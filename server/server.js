const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getSchema } = require('./schemaController');
const { checkCache, cacheSchema } = require('./cacheController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/dist/bundle.js', (req, res) => {
  res.set({
    'Content-Encoding': 'gzip',
    'Content-Type': 'application/javascript',
  });
  res.sendFile(path.resolve(__dirname, '../dist/bundle.js.gz'));
});

app.get('/client/styles.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/styles.css'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/api/schema', checkCache, getSchema, cacheSchema, (req, res, next) => {
  res
    .status(200)
    .type('application/json')
    .send(res.locals);
});

app.listen(PORT, (err) => {
  console.log(`Listening on port ${PORT}....`);
});
