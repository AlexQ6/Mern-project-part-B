[Part A Docs](https://github.com/AlexQ6/Mern-project-part-A)

[Part B Docs and server repo](https://github.com/AlexQ6/Mern-project-part-B)

[Client repo](https://github.com/AlexQ6/mern-app-react)

[website](https://cafexyz.netlify.app/)

# Part B

Joint project By Alex Qiang and Lachlan Reynolds

## Description

### Purpose

As Australia enters a covid-normal environment, the restaurant industry has to adapt to continue to succeed. It is essential that a business has online ordering click and collect capabilities. This application makes ordering at cafe XYZ an easy and fast online affair. By having an in-house system, a business can prevent a percentage of the profits getting taken by large ordering apps. We also seek to makes it easy for the business operator to interact with the website content and data. This web app will provide a seamless experience for customers to engage with and be a powerful business and marketing platform for restaurant operators. 

### Functionality / features

- Content management system (Admin UI)
  - Image upload 
  - Transaction management
  - Products Management(CRUD)
  - Authentication/AUthorisation
  - The application contains an admin ui for business operators to edit and manipulate content without touching code. It will support admin authentication which direct user to dashboard. The dashboard has image upload for gallery carousel and menu, tab to manage incoming orders and create, edit and deleting of menu items. 
  
- Payment system (Stripe and Paypal API)
  - Allows for ordering and payment from within the application 
  - Allows customer to use Paypal or credit/debit card for payment 
  - Transaction is sent to Admin UI
  
- Online ordering
  - View list of menu items, grouped by categories
  - Filterable dietary requirements
  - Cart functionality
  - Pick collection time
  

#### Nice to have feature
- Google analytics 
- Maps API 
- Search function for ordering
- AWS S3 image hosting


### Target audience

- Young people, professionals and families that want to save time by ordering online. 
- Enjoy freshly baked goods and well prepared meals using fresh ingredients.
- Dislikes frustrating ordering experiences
- Dislikes bland meals
  

### Tech stack

#### App

- MongoDB  
- ExpressJS
- React
- NodeJS


#### APis and libraries

- Passport JS
  - Authentication library for the server side
- Mongoose
  - Provides schema-based modelling to MongoDB. Allows for easy interaction with rest of the app. 
- Mocha and chai
  - Mocha is the testing framework used and chai is the assertion library used
- Stripe and PayPal API
  - Third party payment processing API
- SendGrid 
  - Allows the app to send emails 


  
#### Deployment

- Heroku (backend) 
- Netlify (frontend) 
  
### Wireframes, Diagrams, Planning tools

- Adobe Xd
- Lucid Charts/diagrams.net
- Trello
  
### Styling

- Bootstrap

## Dataflow Diagram

![dfd](docs/dfd.jpg)



## Application Architecture Diagram

![aad](docs/aad.jpg)


## User Stories

### Content management system (Admin UI)

Julie is the owner of cafe XYZ for 6 years now. In recent time, it has become very clear to her that an online presence and service is crucial for business operations and growth. She is hesitant to deal with large ordering apps who take a large chunk out of the revenue. She wants to bring her products to more customers and at the same time reduce crowding at the establishment.

- As an admin(Julie) I want to be able to 
  - see and edit all website content from one place, so it is easier to manage
  - quickly add, edit and remove menu items so the website will be up to date
  - see orders that are coming through so I can send the orders to the kitchen
  - upload pictures for the menu items so the products seem more appetising

### Payment system (Stripe and Paypal API)

Jeff is a student at University B studying law. He is a big fan of his local cafe XYZ and wants to support them during current times of covid. He is quite time constrained and want to breeze through the payment process and then pick up his order. 

- As a customer(Jeff) I want to be able to
  - add wanted products into a cart so it can be ready for purchase
  - use Paypal for the transaction as it is a popular service for payment
  - send the receipt to my email so I can have a proof of purchase


### Online ordering 

Liz is an accountant and is a mother of 2 children. She is a very busy person but makes time to focus on food and nutrition for herself and family. She recently found a local cafe named XYZ online and is interested in their offerings.

- As a customer(Liz) I want to be able to
  - contact the business on the website so I can easily send inquiries
  - browse through a menu quickly so I can expeditiously make my decision 
  - filter the ordering selections so I can browse items that fit my dietary requirement
  - add special requests upon checkout so I fulfil my culinary experience
  - choose when I come to collect my order so I can pick up my food when I'm ready
  

## Manual testing

For Products and Orders models

| Feature | Description | Expected Outcome occur? | 
| ------ | ------ | ------- | 
| Read all entries | All products and orders can be called | Y |
| Read one entry | Read one product or order | Y | 
| Create an entry | Create an new product / orders entry  | Y |
| Update an entry  | Newly input information of existing entry is overwrites | Y |
| Delete entry | Remove a product/order from the database | Y |


For Admin user authentication

| Feature | Description | Expected Outcome occur? | 
| ------ | ------ | ------- | 
| Admin user login | Admin user can login and get success confirmation |  |
| Admin user register | Add new user entry into database |  |
| Admin user logout | Destroy current user session | Y |



## User interface tour


## Trello Screenshots for project management and task delegation

<details>
<summary>Click to expand</summary>

![Trello-1](docs/part-b-screenshot-1.PNG)



![Trello-2](docs/trello-partB-2.jpg)

![Trello-3](docs/part-b-screenshot-3.PNG)

</details>


## Wireframes

### Home

<details>
<summary>Click to expand</summary>

![Home - Desktop Colored](./docs/Wireframes/Home%20-%20Desktop%20-%20Prototype.png)
![Home - Desktop](./docs/Wireframes/Home%20-%20Desktop.png)
![Home - Tablet](./docs/Wireframes/Home%20-%20Tablet.png)
![Home - Mobile](./docs/Wireframes/Home%20-%20Mobile.png)
![Home - Mobile w/ Nav](./docs/Wireframes/Home%20-%20Mobile%20-%20Nav.png)

</details>

### Order

<details>
<summary>Click to expand</summary>

![Order - Desktop Colored](docs/Wireframes/Menu%20-%20Desktop%20–%204.png)
![Order - Desktop](./docs/Wireframes/Menu%20-%20Desktop.png)
![Order - Tablet](./docs/Wireframes/Menu%20%20-%20Tablet.png)
![Order - Mobile](./docs/Wireframes/Menu%20-%20Mobile.png)

</details>

### Order Modal

<details>
<summary>Click to expand</summary>

![Order Modal - Desktop Colored](docs/Wireframes/Menu%20-%20Desktop%20–%205.png)
![Order Modal - Desktop](./docs/Wireframes/Order%20Modal%20-%20Desktop.png)
![Order Modal - Tablet](./docs/Wireframes/Order%20Modal%20-%20Tablet.png)
![Order Modal - Mobile](./docs/Wireframes/Order%20Modal%20-%20Mobile.png)

</details>

### Contact

<details>
<summary>Click to expand</summary>

![Contact - Desktop Colored](./docs/Wireframes/Menu%20-%20Desktop%20–%203.png)
![Contact - Tablet Colored](docs/Wireframes/Menu%20%20-%20Tablet%20-%20Portrait%20–%204.png)
![Contact - Mobile Colored](docs/Wireframes/Contact%20-%20Mobile%20–%201.png)
![Contact - Desktop](./docs/Wireframes/Contact%20-%20Desktop.png)
![Contact - Tablet](./docs/Wireframes/Contact%20-%20Tablet.png)
![Contact - Mobile](./docs/Wireframes/Contact%20-%20Mobile.png)

</details>

### Checkout

<details>
<summary>Click to expand</summary>

![Checkout - Desktop](./docs/Wireframes/Checkout%20-%20Desktop.png)
![Checkout - Tablet](./docs/Wireframes/Checkout%20-%20Tablet.png)
![Checkout - Mobile](./docs/Wireframes/Checkout%20-%20Mobile.png)

</details>

### CMS

<details>
<summary>Click to expand</summary>

![CMS - Products Home](./docs/Wireframes/CMS%20-%20Products.png)
![CMS - All Products](./docs/Wireframes/CMS%20-%20All%20Product.png)
![CMS - New Product](./docs/Wireframes/CMS%20-%20New%20Product.png)
![CMS - All Orders](./docs/Wireframes/CMS%20-%20All%20Orders.png)
![CMS - Account](./docs/Wireframes/CMS%20-%20Account.png)

</details>

## Trello planning Screenshots

<details>
<summary>Click to expand</summary>

### 23/11/2020

![Trello - 23rd Nov](./docs/screenshots/start_trello_board.PNG)

### 25/11/2020

![Trello - 25th Nov](./docs/screenshots/during_one_trello_board.PNG)

### 02/12/2020

![Trello - 2nd Dec](./docsscreenshots/during_two_trello_board.PNG)

### 09/12/2020

![Trello - 9th Dec](./docs/screenshots/final_trello_board.PNG)

</details>



