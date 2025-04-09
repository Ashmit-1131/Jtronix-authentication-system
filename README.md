# Jtronix-authentication-system

# Backend completed
# Spring Boot Authentication System

A simple authentication system built with **Spring Boot** and **MongoDB** that supports **user registration and login** with password hashing.

## 🚀 Features

- User Registration (`/api/signup`)
- User Login (`/api/signin`)
- Password hashing with BCrypt
- MongoDB for data persistence
- Spring Security integration

## 🛠️ Tech Stack

- Java 21
- Spring Boot 3
- Spring Security
- MongoDB
- BCrypt for password encryption

## 📦 Setup Instructions

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






