# Mobile Phone Catalog

This project is a web application for viewing, searching, and managing a catalog of mobile phones. It features a frontend developed with React.js, React Router, Context API, and Redux, along with Jest for testing. The backend, built with Node.js and Express, handles API requests and hides the x-api-key to prevent exposure in the frontend.

## Demo

[https://mobiles-fe.vercel.app/](https://mobiles-fe.vercel.app/)

## Features

-  Display a list of mobile phones.
-  Search for devices by name and brand.
-  Manage a shopping cart to add devices.

## Requirements

-  Implementation of tests (testing).
-  The application must be responsive.
-  Proper accessibility.
-  Use of _linters_ and _formatters_.
-  The browser console must be free of errors and warnings (\*).
   -  (\*) The only warning appearing in the console in the local environment comes from React Router and not from the project's own code. It is due to a change in relative route resolution within wildcard routes (`*`) in the upcoming version 7. Although upgrading to React Router v7 removes the warning, it causes incompatibilities with Jest, preventing tests from running.
-  Include a README.
-  Deployment of the application.
-  Use of CSS variables.

## Project Structure

-  `/frontend`: Contains the source code for the application's frontend.
-  `/backend`: Contains the source code for the application's backend.

For more details on each component, refer to the README files in their respective folders.

## Installation and Execution

For detailed instructions on how to install and run the project, please check the README files in the `frontend` and `backend` folders.
