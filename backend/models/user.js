const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullname not provided"],
    },
    email: {
      type: String,
      unique: [true, "email already exists!"],
      lowercase: true,
      trim: true,
      required: [true, "email not provided"],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "{VALUE} is not a valid email!",
      },
    },
    role: {
      type: String,
      enum: ["admin", "management", "gatekeeper"],
      required: [true, "specify role"]
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
