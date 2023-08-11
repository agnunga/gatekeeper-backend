const mongoose = require("mongoose");

const accessSchema = mongoose.Schema(
  {
    nameName: {
      type: String,
      required: true
    },
    idNumber: {
      type: String,
      required: true
    },
    reason: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    accessGranted: {
      type: Boolean,
      required: true,
      default: false
    },
    accessGrantedBy: {
      type: String,
      required: true
    },
    timeIn: {
      type: Date,
      default: Date.now
    },
  
    timeOut: {
      type: Date
    },
  },
  {
    timestamps: true
  }
);

const Access = mongoose.model("Access", accessSchema);

module.exports = Access;
