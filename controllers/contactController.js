const ObjectId = require('mongodb').ObjectId;

module.exports = (contactsCollection) => {
  const getContacts = async (req, res) => {
    try {
      const contacts = await contactsCollection.find({}).toArray();
      res.json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  const getContactById = async (req, res) => {
    try {
      const contact = await contactsCollection.findOne({
        _id: new ObjectId(req.params.id)
      });
      if (!contact) {
        return res.status(404).send('Contact not found');
      }
      res.json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  const createContact = async (req, res) => {
    try {
      const result = await contactsCollection.insertOne(req.body);
      res.status(201).json({ id: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  const updateContact = async (req, res) => {
    try {
      await contactsCollection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  const deleteContact = async (req, res) => {
    try {
      const result = await contactsCollection.deleteOne({
        _id: new ObjectId(req.params.id)
      });
      if (result.deletedCount === 0) {
        return res.status(404).send('Contact not found');
      }
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  return { getContacts, getContactById, createContact, updateContact, deleteContact };
};
