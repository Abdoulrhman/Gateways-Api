const {Gateway} = require("../models")
const ValidateIpAddress = ipaddress => {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress
    )
  ) {
    return true
  }

  return false
}

const GatewaysController = {
  async index(req, res) {
    const gateways = await Gateway.find().populate("devices")
    res.send(gateways)
  },
  async store(req, res, next) {
    try {
      if (ValidateIpAddress(req.body.ipv4)) {
        res.status(422).json({error: "invalid ip"})
        return
      }

      let gateWay = new Gateway()
      gateWay.uid = req.body.uid
      gateWay.name = req.body.name
      gateWay.ipv4 = req.body.ipv4
      gateWay.devices = req.body.devices

      // save the Gateway and check for errors
      gateWay.save(function (err) {
        // Check for validation error
        if (err) res.json(err)
        else
          res.json({
            message: "New gateway created!",
            data: gateWay
          })
      })
    } catch (err) {
      return next(err)
    }
  },
  async show(req, res) {
    const gateway = await Gateway.findById(req.params.id)
    res.send(gateway)
  },

  async remove(req, res) {
    Gateway.remove(
      {
        _id: req.params.gateway_id
      },
      function (err, gateway) {
        if (err) res.send(err)
        res.json({
          status: "success",
          message: "Gateway deleted"
        })
      }
    )
  }
}

module.exports = GatewaysController
