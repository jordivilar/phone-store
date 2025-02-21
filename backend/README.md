# Backend

## Description

This is the backend of the **phone-store** project, built with Node.js and Express. It handles API requests, business logic, and requests to the product API. It has been primarily built to prevent exposing the `API_KEY` in the frontend.

## Technologies Used

-  Node.js
-  Express

## Project Structure

```
backend/
│── src/
│   ├── routes/
│── .env.example
│── package.json
│── server.js
```

## Prerequisites

-  [Node.js](https://nodejs.org/) (version 18)
-  [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository (if cloned before):
   ```bash
   git clone https://github.com/jordivilar/phone-store.git
   ```
2. Install dependencies:
   ```bash
   cd backend/
   npm install
   ```

## Configuration

1. Copy the environment variables example file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit the `.env` file with the appropriate values.
   -  `PORT`: Defines the port where the server will run.
   -  `API_URL`: Specifies the base URL of the mobile API.
   -  `API_KEY`: Contains the authentication key to access the API.

## Usage

```bash
npm start
```
