const db = require("../models");

const create = (req, res) => {
  const newWork = {
    creator: req.session.currentUser.id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time
  };
  db.Work.create(newWork, (err, createdWork) => {
    if (err) return res.json(err);
    const resObj = {
      msg: "Work created.",
      data: createdWork,
      reqAt: new Date().toLocaleString()
    };
    res.json(createdWork);
  });
};

const index = (req, res) => {
  db.Work.find({}, (err, foundWorks) => {
    if (err) return res.json(err);
    const resObj = {
      status: 200,
      data: foundWorks,
      reqAt: new Date().toLocaleString()
    };
    res.json(resObj);
  });
};

const show = (req, res) => {
  db.Work.findById(req.body.id, (err, foundWork) => {
    if (err) return res.json(err);
  });
};

const update = (req, res) => {
  db.Work.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedWork) => {
      if (err) return res.json(err);
      const resObj = {
        msg: "Work updated.",
        data: updatedWork,
        reqAt: new Date().toLocaleString()
      };
      res.json(resObj);
    }
  );
};

const join = async (req, res) => {
  try {
    const foundWork = await db.Work.findById(req.params.id);
    foundWork.attendees.push(req.session.currentUser.id);
    foundWork.save();
    const resObj = {
      status: 200,
      data: foundWork.attendees,
      reqAt: new Date().toLocaleString()
    };
    return res.status(200).json(resObj);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "uh oh", err });
  }
};

const leave = async (req, res) => {
  try {
    const foundWork = await db.Work.findById(req.params.id);
    foundWork.attendees = foundWork.attendees.filter(
      worker => worker != req.params.attid
    );
    foundWork.save();
    return res.status(200).json({ data: foundWork.attendees });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "uh oh", err });
  }
};

const destroy = async (req, res) => {
  try {
    const deletedWork = await db.Work.findByIdAndDelete(req.params.id);
    const resObj = {
      status: 200,
      data: deletedWork,
      reqAt: new Date().toLocaleString()
    };
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "uh oh", err });
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  join,
  leave,
  destroy
};
