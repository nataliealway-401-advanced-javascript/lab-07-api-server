'use strict';
const express = require('express');
const app = express();
const timestamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');

app.use(express.json);

// ERROR HANDLERS

function errorHandler500(err, req, res, next) {
  console.log(err)
  res.status(500).send(err);
}

function errorHandler404(req, res, next) {
  console.log('unknown route');
  res.status(404);
  res.send('no idea where your trying to go');
  res.end();
}



// ROUTES
app.get









module.exports = {
    app: app;
    start: PORT => app.listen(port = 3000, () => console.log('Listening on port ${PORT')),
    log: (req, res, next) => timestamp(req, res, next);

};