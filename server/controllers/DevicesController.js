const {Device} = require("../models")

module.exports = {
  async index(req, res) {
    const devices = await Device.find().populate("gateway")
    res.send(devices)
  },

  async store(req, res) {
    let device = new Device()
    device.uid = req.body.uid
    device.vendor = req.body.vendor
    device.status = req.body.status
    device.gateway = req.body.gateway

    // save the Device and check for errors
    device.save(function (err) {
      // Check for validation error
      if (err) res.json(err)
      else
        res.json({
          message: "New Device created!",
          data: device
        })
    })
  }
}
