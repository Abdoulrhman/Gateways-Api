const mongoose = require("mongoose")

const deviceModel = mongoose.Schema(
  {
    uid: {
      type: Number,
      required: "{PATH} is required!"
    },
    vendor: {
      type: String
    },
    status: {
      type: Boolean
    },
    gateway: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gateway"
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Device", deviceModel)
