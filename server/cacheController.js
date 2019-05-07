const redis = require('redis');
const parseUrl = require('url-parse');

const redisClient = redis.createClient('redis://redis:6379');
const { promisify } = require('util');

const getAsync = promisify(redisClient.get).bind(redisClient);

const EXPIRE_TIME = 300;
redisClient.on('connect', () => {
  console.log('Redis client connected.');
});

const checkCache = async (req, res, next) => {
  const { uri } = req.body;
  const result = await getAsync(uri);
  if (!result) {
    next();
  } else {
    res
      .status(200)
      .type('application/json')
      .send(JSON.parse(result));
  }
};

const cacheSchema = (req, res, next) => {
  const { uri } = req.body;
  const { hostname } = parseUrl(uri);
  if (hostname !== 'localhost' || hostname !== '127.0.0.1') {
    redisClient.set(uri, JSON.stringify(res.locals), 'EX', EXPIRE_TIME);
    next();
  }
};
module.exports = { checkCache, cacheSchema };
