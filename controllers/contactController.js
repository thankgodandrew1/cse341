const ObjectId = require("mongodb").ObjectId;

module.exports = (contactsCollection) => {
  const getContacts = async (req, res) => {
    try {
      const contacts = await contactsCollection.find({}).toArray();
      // console.log(contacts);
      res.json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  };

  const getContactById = async (req, res) => {
    try {
      const contact = await contactsCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      if (!contact) {
        return res.status(404).send("Contact not found");
      }
      res.json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  };

  return { getContacts, getContactById };
};
