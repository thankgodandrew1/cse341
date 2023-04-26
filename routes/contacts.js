const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

module.exports = (contactsCollection) => {
  const { getContacts, getContactById } = contactController(contactsCollection);

  router.get("/", getContacts);

  router.get("/:id", getContactById);

  return router;
};
