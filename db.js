const { MongoClient } = require("mongodb");

const connect = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(process.env.DB_NAME);
    const contactsCollection = db.collection(process.env.DB_COLLECTION_NAME);
    console.log("MongoDB connected!");
    return contactsCollection;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { connect };
