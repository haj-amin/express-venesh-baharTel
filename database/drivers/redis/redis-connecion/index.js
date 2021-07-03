const redis = require("redis")

const REDIS_PORT = process.env.REDIS_PORT || 6379
const client = redis.createClient(REDIS_PORT)

client
  .once("connect", () => {
    console.log(`redis connected on port ${process.env.REDIS_PORT}`)
  })
  .on("error", (error) => {
    console.error(error)
  })

module.exports = {
  client
}
