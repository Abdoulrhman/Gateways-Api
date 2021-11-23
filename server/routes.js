const express = require("express"),
  path = require("path"),
  rootPath = path.normalize(__dirname + "/../"),
  router = express.Router(),
  {
    GatewaysController,
    HomeController,
    DevicesController
  } = require("./controllers")

module.exports = function (app) {
  router.get("/", HomeController.index)

  router.get("/gateways", GatewaysController.index)
  router.post("/gateways", GatewaysController.store)
  router.get("/gateways/:id", GatewaysController.show)
  router.delete("/gateways/:id", GatewaysController.remove)

  router.get("/devices", DevicesController.index)
  router.post("/devices", DevicesController.store)
  app.use("/api", router)
}
