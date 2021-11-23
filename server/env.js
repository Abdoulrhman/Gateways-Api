var path = require("path"),
  rootPath = path.normalize(__dirname + "/../../")

module.exports = {
  development: {
    rootPath: rootPath,
    db: "mongodb+srv://abdoul:ranken1995246@cluster0.8djee.mongodb.net/gateways",
    port: process.env.PORT || 8080
  },
  production: {
    rootPath: rootPath,
    db: "mongodb+srv://abdoul:ranken1995246@cluster0.8djee.mongodb.net/gateways",
    port: process.env.PORT || 80
  }
}
