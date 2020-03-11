const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required for signup."]
  },
  email: {
    type: String,
    required: [true, "An email address is required for signup."]
  },
  tel: {
    type: String,
    required: [true, "A phone number is required for signup"]
  },
  password: {
    type: String,
    required: [true, "A password is required for signup."]
  },
  ecName: {
    type: String,
    required: [true, "You must enter the name of an Emergency Contact"]
  },
  ecRel: String,
  ecTel: {
    type: String,
    required: [
      true,
      "You must enter a phone number for your Emergency Contact."
    ]
  },
  emi: {
    type: String,
    required: [
      true,
      "Please describe any existing medical conditions. If none, you may state 'none'."
    ]
  },
  avatar: String,
  admin: { type: Boolean, default: false },
  wksCreated: [{ type: Schema.Types.ObjectId, ref: "Work" }],
  wksAttended: {
    type: Number,
    default: 0
  },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
