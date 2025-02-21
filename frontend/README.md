# Frontend

## Description

This is the frontend of the **phone-store** project, built with React.

## Technologies Used

- React
- React Router
- Context API
- Redux
- Jest (para pruebas)

## Project Structure

```
frontend/
│── src/
│   ├── context/
│   ├── hooks/
│   ├── redux/
│   ├── views/
│   │   ├── components/
│   │   ├── pages/
│   ├── styles/
│── public/
│── .env.example
│── package.json
│── App.js
│── index.js
```

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository and navigate to the frontend folder:
   ```bash
   git clone https://github.com/jordivilar/phone-store.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Copy the environment variables example file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit the `.env` file with the appropriate values.
   - `REACT_APP_BACKEND_URL`: Define the backend base URL, including the configured port.

## Usage

### Development

Run the application in development mode:

```bash
npm start
```

### Production

Build the application for production:

```bash
npm run build
```

## Testing

Run the tests with:

```bash
npm run test
```

## Formatting

Format all files inside src/.

```bash
npm run format
```

Check for improperly formatted files without making changes:

```bash
npm run format:check
```
