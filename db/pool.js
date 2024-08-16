const { Pool } = require("pg");

// Check that all necessary environment variables are defined
if (!process.env.DATABASE_URL) {
  throw new Error("Missing required environment variables");
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

pool.on('connect', () => {
    console.log('Database connected successfully');
});
  
pool.on('error', (err) => {
    console.error('Database connection error:', err);
});

// Create a new pool using the connection string from the environment variables
module.exports = pool;
