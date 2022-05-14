const express = require("express");
const router = express.Router();

const { Category } = require("../models/category");

router.get(`/`, async (req, res) => {
  const categories = await Category.find();
  res.status(200).send({ success: true, categories });
});

router.post(`/`, (req, res) => {
  const { name } = req.body;
  const category = new Category({
    name,
  });
  category
    .save()
    .then((createdCategory) => res.status(201).json(createdCategory))
    .catch((err) => res.status(500).json({ error: err, success: false }));
});

module.exports = router;
