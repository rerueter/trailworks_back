require("dotenv").config();
const mongoose = require("mongoose");
const dbURL = process.env.MONGO_URI;

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB *connected*");
  })
  .catch(err => {
    console.log(`MongoDB *error* (${err})`);
  });

module.exports = {
  User: require("./User"),
  Work: require("./Work")
};
