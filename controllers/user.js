const bcrypt = require("bcryptjs");
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

const showUser = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    if (err) {
      console.log(`showUser error: ${err}`);
      return res.json({ msg: "uh oh." });
    }
    const responseObj = {
      status: 200,
      user: foundUser,
      reqAt: new Date().toLocaleString()
    };
    res.json(responseObj);
  });
};
//________________________________________________________________MOVED TO AUTH
// const register = (req, res) => {
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) return res.status(500).json({ msg: "uh oh." });
//     bcrypt.hash(req.body.password, salt, (err, hash) => {
//       if (err) return res.status(500).json({ msg: "uh oh." });
//       const newUser = {
//         name: req.body.name,
//         email: req.body.email,
//         tel: req.body.tel,
//         password: hash,
//         ecn: req.body.ecn,
//         emi: req.body.emi,
//         avatar: req.body.avatar,
//         admin: req.body.admin
//       };
//       db.User.create(newUser, (err, createdUser) => {
//         if (err)
//           return res.status(500).json({ msg: "uh oh. register failed." });
//         res.status(201).json({ msg: "register success" });
//       });
//     });
//   });
// };

module.exports = {
  showUser,
  indexUsers
};
