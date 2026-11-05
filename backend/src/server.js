// Server entry point creating the HTTP server and binding to the designated network port
require('dotenv').config();
const app = require('./app');
const { testDbConnection } = require('./config/db.config');

const PORT = process.env.PORT || 5000;

async function startServer() {
  await testDbConnection();
  app.listen(PORT, () => {
    console.log(`[CampusIQ Backend] Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}

startServer();
