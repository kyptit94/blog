# Server

This directory contains the server-side code for the blog application. It is an Express.js application that connects to a MongoDB database.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, you can start the server:

```bash
npm start
```

## Environment Variables

The server uses the following environment variables:

- `MONGODB_URI`: The connection string for the MongoDB database.

You can create a `.env` file in the server directory to set these variables.

## Directory Structure

- `src/app.js`: The entry point of the application.
- `src/controllers`: Contains controller files that handle the logic for different routes.
- `src/models`: Contains Mongoose models for interacting with MongoDB.
- `src/routes`: Contains route files that map endpoints to controllers.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

## Testing

To run the tests:

```bash
npm test