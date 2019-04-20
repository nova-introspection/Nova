const redis = require("redis");
const redisClient = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(redisClient.get).bind(redisClient);

const EXPIRE_TIME = 300;

redisClient.on("connect", function() {
  console.log("Redis client connected.");
});

const checkCache = async (req, res, next) => {
  const { uri } = req.body;
  const result = await getAsync(uri);
  if (!result) {
    next();
    return;
  } else {
    res
      .status(200)
      .type("application/json")
      .send(JSON.parse(result));
  }
};

const cacheSchema = (req, res, next) => {
  const { uri } = req.body;
  redisClient.set(uri, JSON.stringify(res.locals), "EX", EXPIRE_TIME);
  next();
};

module.exports = { checkCache, cacheSchema };
