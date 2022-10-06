<h1>The application works at:</h1>
<br>
https://asianfood.tlossy.networkmanager.pl
<br>
<br>
You can create your own account using your email adress, log in and test how it works 🙂
<br>
<br>
If you don't want to create an account you can use this test USER account:
<br>
email: <b>user@gmail.com</b>
<br>
password: <b>user1234</b></p>
<br>
You can also use this test ADMIN account:
<br>
email: <b>admin@gmail.com</b>
<br>
password: <b>admin123</b>
<br>

<div align="center">

<img src="https://github.com/madridista5/madridista5/blob/main/asian_food.gif" alt="logo" width="500" height="auto" />
  <h1>Asian Restaurant</h1>
</div>

<br />

- [About the Project](#star2-about-the-project)
  * [Description](#star-description)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Run Locally](#running-run-locally)

  

<!-- About the Project -->
## :star2: About the Project

<!-- Description -->
### :star: Description
<p>With this application you can order food from Asian Food restaurant. First of all you have to create your account, log in, open the menu and then you can add every dish to your order. There are two validations. Email must includes @ and passoword length cannot be shorter then 8 signs. If you are Admin you can also add new dish to the menu or edit/delete existing dish. The application looks good on desktop and on mobile as well.</p>
<h4>If you do not want to create your account, you can use these example accounts:</h4>
<p>Admin account, login: <b>admin@gmail.com</b> password: <b>admin123</b></p>
<p>User account, login: <b>user@gmail.com</b> password: <b>user1234</b></p>


<!-- Screenshots -->
### :camera: Screenshots

<p>1. Navbar and Header components:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/1.png" alt="screenshot" />
</div>

<br>
<p>2. About Us component:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/2.png" alt="screenshot" />
</div>

<br>
<p>3. SpecialMenu component:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/3.png" alt="screenshot" />
</div>

<br>
<p>4. Chef component:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/4.png" alt="screenshot" />
</div>

<br>
<p>5. Intro component (short video from the kitchen):</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/5.png" alt="screenshot" />
</div>

<br>
<p>6. Laurels component (you can see our awards):</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/6.png" alt="screenshot" />
</div>

<br>
<p>7. Gallery component:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/7.png" alt="screenshot" />
</div>

<br>
<p>8. FindUs component:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/8.png" alt="screenshot" />
</div>

<br>
<p>9. Footer component:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/9.png" alt="screenshot" />
</div>

<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nestjs.com/">Nest.js</a></li>  
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://typeorm.io">TypeORM</a></li>  
  </ul>
</details>

<br>
<p>Database structure:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/Asian_Restaurant_front/blob/main/screenshots/db_asian_restaurant.png" alt="screenshot" />
</div>

<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_HOST`

`DB_PORT`

`DB_USERNAME`

`DB_PASSWORD`

`DB_DATABASE`

`SALT`

`SECRET_OR_KEY`

`CORS_ORIGIN`

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses npm as package manager


<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/madridista5/Asian_Restaurant_back.git
```

Go to the project directory

```bash
  cd restaurant_back
```

Install dependencies

```bash
  npm install
```

Start the application

```bash
  nest start --watch
```
