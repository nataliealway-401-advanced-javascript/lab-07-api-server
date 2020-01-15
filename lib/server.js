'use strict';
const express = require('express');
const app = express();
const timestamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');

app.use(express.json);

// ERROR HANDLERS

function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).send(err);
}

function notFoundHandler(req, res, next) {
  console.log('unknown route');
  res.status(404);
  res.send('no idea where your trying to go');
  res.end();
}

let productsDatabase = [ { name: 'Avocado', id: 1}];
let categoriesDatabase = [ { name: 'Travel', id: 1}];

// PRODUCT ROUTES
app.get('/products', timestamp, logger, (req, res, next) => {
  let count = productsDatabase.length;
  let results = productsDatabase;
  res.json({ count, results});
});

app.post('/products', (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = productsDatabase.length + 1;
  productsDatabase.push(record);
  res.json(record);
});

app.put('/products', (req, res, next) => {
  let idToUpdate = req.params.id;
  let {name, id} = req.body;
  let updatedRecord = { name, id};
  productsDatabase = productsDatabase.map( record => (record.id=== parseInt(idToUpdate)) ? updatedRecord: record );
  res.json({});
});

app.delete('/products', (req, res, next) => {
  let id = req.params.id;
  productsDatabase = productsDatabase.filter( record => record.id !== parseInt(id));
  res.json({});
});

//CATEGORIES ROUTES
app.get('/categories', (req, res, next) => {
  let count = categoriesDatabase.length;
  let results = categoriesDatabase;
  res.json({ count, results});
});

app.post('/categories', (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = categoriesDatabase.length + 1;
  categoriesDatabase.push(record);
  res.json(record);
});

app.put('/categories', (req, res, next) => {
  let idToUpdate = req.params.id;
  let {name, id} = req.body;
  let updatedRecord = { name, id};
  categoriesDatabase = categoriesDatabase.map( record => (record.id=== parseInt(idToUpdate)) ? updatedRecord: record );
  res.json({});
});

app.delete('/categories', (req, res, next) => {
  let id = req.params.id;
  categoriesDatabase = categoriesDatabase.filter( record => record.id !== parseInt(id));
  res.json({});
});


app.use('*', notFoundHandler);
app.use(errorHandler);




app.listen(3000, () => console.log('server is running on port 3000'));