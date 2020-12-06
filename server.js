'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { clients } = require('./data/clients');
const { words } = require('./data/words');


express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/clients", (req, res) => {
    res.status(200).json({
      status: 200,
      data: clients,
    });
  })

  .get("/clients/:id",(req,res)=> { 
    const Id = req.params.id; 
    const client = clients.filter((element)=>{ 
      return element.id === Id;
    });
    if(client.length>0) {
      res.status(200).json({
        status:200,
        data: client,
      });
    } else {
      res.status(200).json({
        status:404,
        message: "Client not found"
      })
    }; 
  })

  .post("/clients",(req,res)=> {
    const newClient = req.body; 
    clients.forEach((element)=>{ 
      if(element.email === newClient.email) { 
        res.json({
          status: "error",
          error: "Existing client"
        });
      } else { 
        clients.push(newClient);  
        res.status(200).json({
          status: 200,
          data: clients
        });  
      };
    });
  })

  .delete("/clients/:id",(req,res)=>{ 
    const Id = req.params.id; 
    const client = clients.filter((element)=>{ 
      return element.id === Id;
    });
    if(client.length>0) {
      let newClients = clients.filter((element)=>{
        return element.id !== Id;
      }); 
      res.status(200).json({
        status:200,
        data: newClients 
      });
    } else {
      res.json({
        status:"error",
        error: "Client not found",
      })
    }; 
  })

  .get("/hangman/words",(req,res)=>{
    res.status(200).json({
      status:200, 
      data: words
    })
  })

  .get("/hangman/words/:id",(req,res)=> { 
    let id = req.params.id; 
    let word = words.filter((element)=>{
      return element.id === id; 
    });
    if(word.length>0) {
      res.status(200).json({
        status:200, 
        data: word,
      })
    } else {
      res.status(200).json({
        status:404,
        message: "Word not found"
      })
    }; 
  })

  .get("/hangman/word",(req,res)=> { 
    let randomWordIndex = Math.round(Math.random()*(words.length-1)); 
    let randomWord = words[randomWordIndex]; 
    let newObject = {}; 
    newObject.id = randomWord.id; 
    newObject.letterCount = randomWord.letterCount; 
    res.status(200).json({
      status:200,
      data: newObject
    });
  })

  .get("/hangman/guess/:id/:letter",(req,res)=>{
    const id = req.params.id; 
    const letter = req.params.letter; 
    let wordObject = words.filter((element)=> {
      return element.id === id;
    });
    const word = wordObject[0].word; 
    let charactersArray = word.split("");
    let arrayBooleans = [];
    charactersArray.forEach((element)=> { 
      if(element === letter) {
        arrayBooleans.push(true); 
      } else {
        arrayBooleans.push(false); 
      }; 
    });
    res.status(200).json({
      status:200, 
      data: arrayBooleans
    });
  })

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "Page not found",
    });
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
