const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Basic middlewares
app.use(cors());  // Allow frontend (Angular) to talk to backend
app.use(helmet());  // Add security headers
app.use(express.json()); // Parse incoming JSON data from the client into req.body (body-parser replacement)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Optional: serve static files (like uploads)
app.use('/uploads', express.static('uploads'));

// Import routes
const authRoutes = require('./routes/authRoute');

// Use routes with base path
app.use('/api/auth', authRoutes);

// Test Route (// Health check)
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;