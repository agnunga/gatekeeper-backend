const mongoose = require("mongoose");

const gatekeeperSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a gatekeeper"],
    },
    onDuty: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Gatekeeper = mongoose.model("Gatekeeper", gatekeeperSchema);

module.exports = Gatekeeper;
