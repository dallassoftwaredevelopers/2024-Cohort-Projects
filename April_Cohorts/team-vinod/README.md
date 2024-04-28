# GROCERYapp

Grocery Management tool with built-in Recipe integration and macro counter. 

![DSD-community](https://www.meetup.com/dallas-software-developers-meetup/)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Schema Diagram](#schema-diagram)
- [Getting Started](#getting-started)

## Project Overview

This tool will analyze the groceries you have on hand, can help build out a grocery list for things to get for meal prepping for the week, and give a detailed list of macros such as protein, carbs, etc. 

If a user puts in the items they have in the fridge, it can generate a list of recipes based on those ingredients.

## Features

- [x] User authentication and authorization (JWT)
- [x] Generate grocery list
- [x] Analyze groceries in pantry
- [x] Recipe generation
- [x] Macro counter

## Technologies

- NextJ
- Node.js
- Express.js
- PostgreSQL
- Tailwind CSS
- JWT Authentication

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- PostreSQL

### Installation

1. Clone the repository

```bash
 git clone https://github.com/chitangchin/Groceryapp.git 
```

2. Go to the project directory and install dependencies for both the client and server

```bash
npm devInstall
```

Alternative(optional)

```bash
cd client
npm install
```

```bash
cd server
npm install
```

3. Create a `.env` file in both the `client` and `server` directories and add the environment variables as shown in the `.env.example` files.
4. Start the server

```bash
npm startClient
npm startServer
```
Alternative(optional)

```bash
cd server
npm start
```

5. Start the client

```bash
cd client
npm start
```




