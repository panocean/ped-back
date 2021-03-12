const redis = require("async-redis");
// const redisClient = redis.createClient(process.env.REDIS_PORT)

let redisClient
if(process.env.REDISCLOUD_URL){
    let redisURL = url.parse(process.env.REDISCLOUD_URL);
    redisClient = redis.createClient(redisURL)
} else {
    redisClient = redis.createClient(process.env.REDIS_PORT)
}

module.exports = { redisClient }

