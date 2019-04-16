const path = require('path');
const express =  require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/dist/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/bundle.js'));
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(PORT, (err) => {
  console.log(`Listening on port ${PORT}....`);
})