const { MongoClient } = require('mongodb');

// Connection URL - Try multiple options to handle common MongoDB configurations
const urls = [
  'mongodb://mongo:CIQAbElaayhSABwsPqWrEubkJEWcnlJb@shuttle.proxy.rlwy.net:32289',
  // 'mongodb://localhost:27017',
  // 'mongodb://127.0.0.1:27017',
  // 'mongodb://0.0.0.0:27017',
  // 'mongodb://localhost:27017/tixmojo' // With database name in URL
];
const dbName = 'tixmojo';

// Create a connection function that tries multiple URLs
async function connectToDatabase() {
  let lastError = null;

  // Try each connection URL
  for (const url of urls) {
    try {
      console.log(`Attempting to connect to MongoDB at: ${url}`);
      const client = new MongoClient(url, {
        serverSelectionTimeoutMS: 5000, // 5 second timeout for server selection
        connectTimeoutMS: 5000 // 5 second timeout for connection
      });

      await client.connect();
      console.log(`Connected successfully to MongoDB at: ${url}`);

      const db = client.db(dbName);

      return {
        db: db,
        client: client
      };
    } catch (error) {
      console.error(`Failed to connect to MongoDB at ${url}:`, error.message);
      lastError = error;
      // Continue to try the next URL
    }
  }

  // If we get here, all connection attempts failed
  console.error('All MongoDB connection attempts failed');
  throw lastError;
}

module.exports = { connectToDatabase };