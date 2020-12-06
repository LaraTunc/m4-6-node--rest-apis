const words = [
  {
    id: '1000',
    word: 'bacon',
    letterCount: '5',
  },
];

let id = 1000+1;

let toAdd = ["pixel", "cheese", "fridge", "water", "buffalo", "syndrome","bagpipes","lesson","development","important","weather","holiday","chair","oven","economy"];
toAdd.forEach((element)=> { 
  let object = {}; 
  object.id = `${id++}`; 
  object.word = element; 
  object.letterCount = `${element.length}`; 
  words.push(object);
});

module.exports = { words };
