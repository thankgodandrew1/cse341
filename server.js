const express = require('express');
const dotenv = require('dotenv');
const homeRoute = require('./routes/home');
const contactsRoute = require('./routes/contacts');
const db = require('./database/db');

const app = express();
const port = process.env.PORT || 3000;
// const hostname = '127.0.0.1';

dotenv.config();

db.connect()
  .then((contactsCollection) => {
    app.locals.contactsCollection = contactsCollection;
    app.use(express.json());

    // pass the contacts collection to the contacts route
    app.use('/contacts', contactsRoute(contactsCollection));

    // use the home route for all other routes
    app.use('/', homeRoute);

    app.use((req, res, next) => {
      const error = new Error('Not found');
      error.status = 404;
      next(error);
    });

    app.use((error, req, res, next) => {
      res.status(error.status || 500);
      res.json({
        error: {
          message: error.message
        }
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
