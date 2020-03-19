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

const updateUser = async (req, res) => {
  try {
    const updatedUser = await db.User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    updatedUser.save();
    const resObj = {
      status: 200,
      data: updatedUser,
      reqAt: new Date().toLocaleString()
    };
    return res.status(200).json(resObj);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "uh oh", err });
  }
};

module.exports = {
  showUser,
  indexUsers,
  updateUser
};
