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

module.exports = {
  index,
  show,
  create,
  update
};
