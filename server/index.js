// Starting up the server
// Use the require method on express
// Create variable to hold it
const express = require('express');


// Provides utilities for working with file and directory paths
const path = require('path'); // Make sure to have node.js installed
// Using resolve method
// Resolves a given value to a Promise

const distPath = path.resolve(__dirname, '..', 'dist');

// Create an instance of an Express application
const app = express(); // => A function provided by the Express.js framework
// App object represents web application
// Use app object to define routes middleware and other functionalities

// Setting up middleware
app.use(express.json()); // Parse the request body
app.use(express.urlencoded({ extended: true })); // Parses url
app.use(express.static(distPath)); // Statically serve up client directory
// Adding dist file path into express.static()

// Setting environment variable
// The port express will listen on
// Read the port number
const PORT = 3000; //=> 3000 is default value if PORT is not set

// Creating GET request for some functionality
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Use .listen() method to listen on port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
