const { redisClient } = require("./redis/redis");


//Cache midleware
async function plansCache(req, res, next) {
  // const { username } = req.params;
  // try {
    // try {
      const data = redisClient.get("plansKey")
      if(!data)  res.locals.plansdata = null
      res.locals.plansdata = data
      next()
    // } catch (error) {
      
    // }
  // } 
}


module.exports = { plansCache }