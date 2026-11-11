// Database schema setup script executing SQL definitions into PostgreSQL
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { pool } = require('./db.config');

async function setupDatabase() {
  console.log('[CampusIQ Database Setup] Connecting to PostgreSQL at', process.env.DB_HOST || 'localhost');
  let client;
  try {
    client = await pool.connect();
    console.log('[CampusIQ Database Setup] Successfully connected.');

    const schemaDir = path.join(__dirname, '../../../database/schema');
    const seedsDir = path.join(__dirname, '../../../database/seeds');

    const schemaFiles = fs.readdirSync(schemaDir).filter(f => f.endsWith('.sql')).sort();
    const seedFiles = fs.readdirSync(seedsDir).filter(f => f.endsWith('.sql')).sort();

    console.log(`[CampusIQ Database Setup] Running ${schemaFiles.length} schema files...`);
    for (const file of schemaFiles) {
      const sql = fs.readFileSync(path.join(schemaDir, file), 'utf-8');
      console.log(` -> Executing: schema/${file}`);
      await client.query(sql);
    }

    console.log(`[CampusIQ Database Setup] Running ${seedFiles.length} seed files...`);
    for (const file of seedFiles) {
      const sql = fs.readFileSync(path.join(seedsDir, file), 'utf-8');
      console.log(` -> Executing: seeds/${file}`);
      await client.query(sql);
    }

    console.log('[CampusIQ Database Setup] Database setup and migrations completed successfully!');
  } catch (err) {
    console.error('[CampusIQ Database Setup] Failed:', err.message);
    process.exit(1);
  } finally {
    if (client) client.release();
    await pool.end();
  }
}

if (require.main === module) {
  setupDatabase();
}

module.exports = setupDatabase;
