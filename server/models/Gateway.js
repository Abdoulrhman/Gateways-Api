const mongoose = require("mongoose")

const gatewayModel = mongoose.Schema(
  {
    uid: {
      type: Number,
      required: "{PATH} is required!"
    },
    name: {
      type: String
    },
    ipv4: {
      type: String,
      required: "{PATH} is required!"
    },
    devices: [{type: mongoose.Schema.Types.ObjectId, ref: "Device"}]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Gateway", gatewayModel)
