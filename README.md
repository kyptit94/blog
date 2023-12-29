# My Blog

This is a full-stack blog application built with Next.js, Express, and MongoDB.

## Structure

The project is divided into two main parts:

- `client`: This is the frontend of the application, built with Next.js.
- `server`: This is the backend of the application, built with Express and MongoDB.

## Setup

To run this project, you will need to have Node.js and MongoDB installed on your machine.

### Client

Navigate to the `client` directory and install the dependencies:

```
cd client
npm install
```

To start the Next.js application, run:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

### Server

Navigate to the `server` directory and install the dependencies:

```
cd ../server
npm install
```

Before starting the server, make sure to create a `.env` file with your MongoDB connection string:

```
MONGODB_URI=your_connection_string
```

To start the Express server, run:

```
npm start
```

The server will be available at `http://localhost:5000`.

## Usage

You can create, read, update, and delete blog posts. The posts are stored in a MongoDB database and fetched from the Next.js application.

## License

This project is open source and available under the [MIT License](LICENSE).