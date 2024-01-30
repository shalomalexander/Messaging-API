# Group Chat Application

A simple application that provides web services to facilitate group chat and user management. The application includes Admin APIs for managing users, authentication APIs for login and logout, and features for both normal and admin users.

## Table of Contents

- [Features](#features)
- [Additional Features](#additional-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
  - [1. Create User](#create-user)
  - [2. Edit User](#edit-user)
  - [3. Get All Users](#get-all-users)
  - [4. Create Group](#create-group)
  - [5. Delete Group](#delete-group)
  - [6. Search Group](#search-group)
  - [7. Edit Group](#edit-group)
  - [8. Send Messages](#send-messages)
  - [9. Like Messages](#like-messages)
  - [10. Login](#login)
  - [11. Logout](#logout)
- [Testing](#testing)

## Features

- [x] Admin APIs for managing users (create, edit)
- [x] Authentication APIs for login and logout
- [x] Normal User APIs for managing groups (create, delete, search, add members)
- [x] Normal User APIs for group messages (send messages, like messages)

## Additional Features

- [ ] Setting Authorization to each controller.
- [ ] Adding controller to refresh the token whenever the accessToken is expired.
- [ ] Creating the Frontend using ReactJS.

## Tech Stack

- Backend: NodeJS, Express, and MongoDB
- Frontend: (Optional - if applicable)
- Testing: Python for end-to-end functional tests

## Getting Started

### Prerequisites

- Python 3.x
- MongoDB ATLAS database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shalomalexander/Messaging-API.git

   ```

2. Run npm install

   ```bash
   npm install

   ```

3. Create a MongoDB ATLAS connection and get the MongoURI. Visit the below url

   ```bash
   https://www.mongodb.com/cloud/atlas/register

   ```

4. Create a .env file in the root and paste your MongoURI.

   ```bash
   MONGODB_URI='mongodb+srv://<username>:<password>@cluster0.rjxvt2v.mongodb.net/?retryWrites=true&w=majority'
   ```

## API Documentation

# Messaging API Postman Collection

This Postman collection provides a set of API requests for interacting with a Messaging API. The collection includes requests for user management, group management, messaging, and authentication.

## Collection Information

- **Collection ID**: 2a93c35a-d22e-484c-bdfc-e98887a938f9
- **Collection Name**: Messaging API
- **Collection Schema**: [Postman Collection v2.1.0](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)

## API Requests

### 1. Create User

- **Request Name**: Create User
- **Method**: POST
- **Endpoint**: [http://localhost:3000/users/create](http://localhost:3000/users/create)
- **Request Body**:
  ```json
  {
    "username": "Sharon",
    "password": "123456"
  }
  ```

### 2. Edit User

- **Request Name**: Edit User
- **Method**: PUT
- **Endpoint**: [http://localhost:3000/users/edit/65b4ca568074c8aa732361e0](http://localhost:3000/users/edit/65b4ca568074c8aa732361e0)
- **Request Body**:
  ```json
  {
    "username": "User4",
    "password": "123456"
  }
  ```

### 3. Get All Users

- **Request Name**: Get All Users
- **Method**: GET
- **Endpoint**: [http://localhost:3000/users](http://localhost:3000/users)

### 4. Create Group

- **Request Name**: Create Group
- **Method**: POST
- **Endpoint**: [http://localhost:3000/groups/create](http://localhost:3000/groups/create)
- **Request Body**:
  ```json
  {
    "groupName": "Group 1",
    "members": ["65b4ca568074c8aa732361e0", "65b4ca7b8074c8aa732361e2"]
  }
  ```

### 5. Delete Group

- **Request Name**: Delete Group
- **Method**: POST
- **Endpoint**: [http://localhost:3000/groups/delete/65b4d0d3d327da10a4e43d89](http://localhost:3000/groups/delete/65b4d0d3d327da10a4e43d89)

### 6. Search Group

- **Request Name**: Search Group
- **Method**: GET
- **Endpoint**: [http://localhost:3000/groups](http://localhost:3000/groups)

### 7. Edit Group

- **Request Name**: Edit Group
- **Method**: PUT
- **Endpoint**: [http://localhost:3000/groups/edit/65b4d2720901ac7f5715acd6](http://localhost:3000/groups/edit/65b4d2720901ac7f5715acd6)
- **Request Body**:
  ```json
  {
    "groupName": "Group 1",
    "members": ["65b4ca568074c8aa732361e0", "65b4ca7b8074c8aa732361e2"]
  }
  ```

### 8. Send Messages

- **Request Name**: Send Messages
- **Method**: POST
- **Endpoint**: [http://localhost:3000/messages/send](http://localhost:3000/messages/send)
- **Request Body**:
  ```json
  {
    "groupId": "65b67ff352bf10c704a71153",
    "userId": "65b678890b6f948dce566adf",
    "content": "Hi Bro!"
  }
  ```

### 9. Like Messages

- **Request Name**: Like Messages
- **Method**: POST
- **Endpoint**: [http://localhost:3000/messages/like](http://localhost:3000/messages/like)
- **Request Body**:
  ```json
  {
    "messageId": "65b6816ed61f8fd1750d8c80",
    "userId": "65b678850b6f948dce566add"
  }
  ```

### 10. Login

- **Request Name**: Login
- **Method**: POST
- **Endpoint**: [http://localhost:3000/auth/login](http://localhost:3000/auth/login)
- **Request Body**:
  ```json
  {
    "username": "USER1",
    "password": "123456"
  }
  ```

### 11. Logout

- **Request Name**: Logout
- **Method**: POST
- **Endpoint**: [http://localhost:3000/auth/logout](http://localhost:3000/auth/logout)

## Note

- Make sure to replace `http://localhost:3000` with the actual base URL of your Messaging API server.
- Adjust the request bodies and parameters according to your API specifications.

Feel free to explore and use these requests for testing and interacting with your Messaging API. If you encounter any issues or have questions, refer to the API documentation or contact the API provider for assistance.
