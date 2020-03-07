const db = require("../models");

const indexUsers = (req, res) => {
  db.User.find({}, (err, foundUsers) => {
    if (err) {
      console.log(`indexUsers error: ${err}`);
    }
    const responseObj = {
      status: 200,
      data: foundUsers,
      reqAt: new Date().toLocaleString()
    };
    res.json(responseObj);
  });
};

module.exports = {
  indexUsers
};
