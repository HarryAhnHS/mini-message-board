const { Pool } = require("pg");

// Check that all necessary environment variables are defined
if (!process.env.DATABASE_URL) {
  throw new Error("Missing required environment variables");
}

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
// Create a new pool using the connection string from the environment variables
module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});
