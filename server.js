// server.js

// Require the express module
const express = require('express');

// Create a new instance of the express application, const for port and hostname
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

// Define a route that will return the name "Precious Jasper" when requested
app.get('/', (req, res) => {
    res.send('Precious Jasper');
});

// Start the server and listen for incoming requests on port 3000
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  
