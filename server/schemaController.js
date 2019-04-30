const fetch = require('node-fetch');
const { JSON_STRING } = require('./IntroQuery');
const { SchemaGraph } = require('./GraphBuild');

const getSchema = (req, res, next) => {
  const { uri } = req.body;
  fetch(uri, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(JSON_STRING),
  })
    .then(res => res.json())
    .then(({ data }) => {
      res.locals = new SchemaGraph(data.__schema.types);
      next();
    })
    .catch(err => res.sendStatus(400));
};

module.exports = { getSchema };
