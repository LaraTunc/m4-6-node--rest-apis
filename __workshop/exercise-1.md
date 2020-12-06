 # Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

/customers | GET | All clients of the cafe. This data set might have information such as name, last name, frequency of coming to the cafe, preferred seating spot, etc. 
/seats | GET | All available seats at the cafe
/products | GET | Details about the products such as stock, description, nutrition value, dietary restrictions, etc 
/customers/:id | GET | individual customer 
/customers | POST | when a new customers comes to the cafe, this will create a new data point for the customer. 
/seats/:id | GET | individual seats available at the cafe 
/seats | PATCH | This will update the seats as available or non-available as they fill up 
/stock/:id | GET | This will provide the available stock of a specific item (such as croissants)
/order | POST | This will collect all order data. It will associate the order to customers and will amend the stock accordingly with each order.