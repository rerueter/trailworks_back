const bcrypt = require("bcryptjs");
const db = require("../models");

const register = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email });
    if (foundUser)
      return res.status(500).json({ msg: "this email is already in use" });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = {
      ...req.body,
      password: hash
    };

    const createdUser = await db.User.create(newUser);
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).json({ msg: "uh oh." });
  }
};

const login = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email });
    if (!foundUser)
      return res.status(500).json({ msg: "this user does not exist" });

    const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
    if (!isMatch) return res.status(500).json({ msg: "password incorrect" });
    req.session.currentUser = { id: foundUser._id };
    return res
      .status(200)
      .json({ msg: "login successful", data: foundUser._id });
  } catch (err) {
    return res.status(500).json({ msg: "uh oh" });
  }
};

const logout = async (req, res) => {
  try {
    if (!req.session.currentUser)
      return res.status(401).json({ message: "unauthorized" });
    await req.session.destroy();
    return res.sendStatus(200);
  } catch (err) {
    return res.status(500).json({ msg: "uh oh." });
  }
};

module.exports = {
  register,
  login,
  logout
};
