# Social Plus
<!-- ABOUT THE PROJECT -->
## About The Project
The application is based on concept of social media. This application build using MERN stack
### Built With MERN
* [MongoDB](https://www.mongodb.com/) - Database
* [Express JS](https://expressjs.com/) - Creating Rest End Point
* [React JS](https://reactjs.org/) - Front End
* [Node JS](https://nodejs.org/en/) - Back End 

<br>
<hr>

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
1. MongoDB
2. Node JS
3. NPM
3. React JS

### Database
1. Collections - 
    - *Users* - use to store user related information, *fields -* username, email, password, profilePicture, coverPicture, followers, followings, isAdmin, desc, city, from, relationship
    - *Posts* -  use to store post related data, *fields -* userId, desc, likes, img
2. Fields - 
    - *Users* - username, email, password, profilePicture, coverPicture, followers, followings, isAdmin, desc, city, from, relationship
    - *Posts* -  userId, desc, likes, img

### Server - steps to start server side
1. run command ** npm install** to install required modules
2. create **.env** file in ``` \server ``` dir and create variable **MONGO_URL**. This varaible will contain database connection uri.
```
MONGO_URL=mongodb://<HOST_NAME>:<PORT>/<DATABASE_NAME>
```
3. to start server use command **npm start**


*I have also attached POSTMAN collection for rest endpoint reference*

### Client - steps to start client side
1. run command ** npm install** to install required modules
2. to start server use command **npm start**

### Frontend Screenshots
![Login](social_plus_login.PNG)
![Register](social_plus_register.PNG)
![Home](social_plus_home.PNG)
![Profile](social_plus_profile.PNG)