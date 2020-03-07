const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: [true, "Trail work projects must have a title."]
  },
  descrip: {
    type: String,
    required: [true, "Trail work projects must include a description"]
  },
  location: {
    type: String,
    required: [
      true,
      "Trail work projects must include an address or location information"
    ]
  },
  date: {
    type: Date,
    min: Date.now,
    required: [true, "Trail work projects must include a date."]
  },
  time: {
    type: String,
    required: [
      true,
      "Trail work projects must include a start time and estimated duration. "
    ]
  },
  image: String,
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  complete: { type: Boolean, default: false }
});
