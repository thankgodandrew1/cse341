// Require the express module and home route
const express = require('express');
const homeRoute = require('./routes/home');

// Create a new instance of the express application, const for port and hostname
const app = express();
const port = process.env.PORT || 3000; // use environment port on render, else use port 3000
const hostname = '127.0.0.1';

// Use the homeRoutes module to handle requests to the home page
app.use('/', homeRoute);

// Start the server and listen for incoming requests on port 3000
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  
