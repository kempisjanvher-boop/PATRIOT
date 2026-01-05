
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://janvher07_db_user:BVPYKQQ6xQ7Kz3mr@cluster0.3rd9glk.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Function to connect to the database and return the client
async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Return the client object to be used in other parts of the app
    return client;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

// Export the connection function
module.exports = {
  connectToDatabase,
};
