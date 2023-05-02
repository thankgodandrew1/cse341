const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

module.exports = (contactsCollection) => {
  const { getContacts, getContactById, createContact, updateContact, deleteContact } =
    contactController(contactsCollection);

  router.get('/', getContacts);

  router.get('/:id', getContactById);

  router.post('/', createContact);

  router.put('/:id', updateContact);

  router.delete('/:id', deleteContact);

  return router;
};
