const express = require("express");
const router = express.Router();

const { User } = require("../models/user");

router.get(`/`, async (req, res) => {
  const users = await User.find();
  res.status(200).send({ success: true, users });
});

router.post(`/`, (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });
  user
    .save()
    .then((createdUser) => res.status(201).json(createdUser))
    .catch((err) => res.status(500).json({ error: err, success: false }));
});

module.exports = router;
