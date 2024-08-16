#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username TEXT,
  added TIMESTAMP
);

INSERT INTO messages (text, username, added) 
VALUES
  ('Hi there!', 'Harry', CURRENT_TIMESTAMP),
  ('Add new messages by clicking the button below!', 'Harry', CURRENT_TIMESTAMP),
  ('You can also see message details if you click the message', 'Zoe', CURRENT_TIMESTAMP);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${encodeURIComponent(process.env.USER)}:${encodeURIComponent(process.env.PASSWORD)}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DATABASE}`
  });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Done");
  } catch (err) {
    console.error("Error executing query:", err);
  } finally {
    await client.end();
  }
}

main();
