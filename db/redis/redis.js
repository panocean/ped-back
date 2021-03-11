const redis = require("async-redis");
const redisClient = redis.createClient(process.env.REDIS_PORT)

module.exports = { redisClient }

