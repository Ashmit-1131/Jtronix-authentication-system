# Jtronix-authentication-system

# Backend completed
# Spring Boot Authentication System

A simple authentication system built with **Spring Boot** and **MongoDB** that supports **user registration and login** with password hashing.

##  Features

- User Registration (`/api/signup`)
- User Login (`/api/signin`)
- Password hashing with BCrypt
- MongoDB for data persistence
- Spring Security integration

##  Tech Stack

- Java 21
- Spring Boot 3
- Spring Security
- MongoDB
- BCrypt for password encryption

##  Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/Ashmit-1131/Jtronix-authentication-system
cd backend/authsystem


2. **Configure MongoDB**

Update your application.properties:
spring.data.mongodb.uri=mongodb://localhost:27017/authdb  ("You can use your own mongoDb url")

3. **Run the Application **
./mvnw spring-boot:run


4. Test API (e.g., using Postman or ThunderClient)
Register:
POST     http://localhost:8080/api/signup

Add a json like this:-
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "address": "123 Main Street",
  "password": "secure123"
}

Login :
POST   http://localhost:8080/api/signin

Add a json like this:-
{ 
 "email": "john@example.com",
 "password": "secure123"
    }



# JTRONIX Authentication System - Frontend

This is the frontend implementation for the JTRONIX Authentication System using ReactJS with Material-UI and notistack for alerts. The application provides a clean and responsive user interface for user registration (Sign Up) and login (Sign In), and redirects users appropriately after successful actions.

## Features

- **Responsive Design:** Built with Material-UI components for a modern, responsive layout.
- **User Authentication:** Sign Up and Sign In forms with real-time validations.
- **Notifications:** Uses notistack to display success and error messages.
- **Routing:** Implements React Router for navigation between Sign Up and Sign In pages.
- **Integration:** Connects seamlessly with the Spring Boot backend APIs.



## Installation

1. **Clone the repository:**
   ```bash
  git clone https://github.com/Ashmit-1131/Jtronix-authentication-system
cd frontend
npm install
npm start :-  your frontend application will be running on :- http://localhost:3000






