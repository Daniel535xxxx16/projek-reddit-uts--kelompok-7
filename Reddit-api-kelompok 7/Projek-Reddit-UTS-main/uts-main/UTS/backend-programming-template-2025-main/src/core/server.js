require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pinoHTTP = require('pino-http');

const config = require('./config');
const logger = require('./logger')('app');
const routes = require('../routes'); // Pastikan path ini benar
const { errorResponder, errorTypes } = require('./errors');

const app = express();

// Konfigurasi dasar
// // Useful if behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc).
// // It shows the real origin IP in the Heroku or Cloudwatch logs.
app.enable('trust proxy'); // Jika menggunakan proxy seperti Heroku atau Nginx
// // Enable cross origin resource sharing to all origins by default
app.use(cors()); // Mengizinkan CORS
app.use(express.json()); // Mengelola request body dalam format JSON
app.use(express.urlencoded({ extended: false })); // Untuk menerima form data
app.use(pinoHTTP({ logger })); // Logging HTTP request

// Rute API
app.use(`${config.api.prefix}`, routes);

// Handle 404 route
app.use((req, res, next) => {
  next(errorResponder(errorTypes.ROUTE_NOT_FOUND, 'Route not found'));
});

// Middleware untuk logging error
app.use((error, req, res, next) => {
  logger.error({
    code: error.code || 'UNKNOWN_ERROR',
    status: error.status || 500,
    message: error.message || 'An error has occurred',
    stack: error.stack || null,
  });

  res.status(error.status || 500).json({
    statusCode: error.status || 500,
    error: error.code || 'UNKNOWN_ERROR',
    message: error.message || 'An unexpected error occurred',
  });
});

module.exports = app;
