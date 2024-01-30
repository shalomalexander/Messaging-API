# Group Chat Application

A simple application that provides web services to facilitate group chat and user management. The application includes Admin APIs for managing users, authentication APIs for login and logout, and features for both normal and admin users.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [API Documentation](#api-documentation)
  - [Admin APIs](#admin-apis)
  - [Authentication APIs](#authentication-apis)
  - [Group APIs](#group-apis)
  - [Group Messages APIs](#group-messages-apis)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

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

2. Run npm install
    
    ```bash
    npm install

3. Create a MongoDB ATLAS connection and get the MongoURI. Visit the below url
    
    ```bash
    https://www.mongodb.com/cloud/atlas/register

4. Create a .env file in the root and paste your MongoURI.

    ```bash
    MONGODB_URI='mongodb+srv://<username>:<password>@cluster0.rjxvt2v.mongodb.net/?retryWrites=true&w=majority'






