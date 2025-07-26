const mongoose = require('mongoose');
const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

// Port from .env or fallback
const PORT = process.env.PORT || 5000;

// Connect DB and then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});