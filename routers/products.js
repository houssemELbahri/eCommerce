const express = require("express");
const router = express.Router();

const { Product } = require("../models/product");

router.get(`/`, async (req, res) => {
  const products = await Product.find();
  res.status(200).send({ success: true, products: products });
});

router.post(`/`, (req, res) => {
  const { name, image, countInStock } = req.body;
  const product = new Product({
    name,
    image,
    countInStock,
  });
  product
    .save()
    .then((createdProduct) => res.status(201).json(createdProduct))
    .catch((err) => res.status(500).json({ error: err, success: false }));
});

module.exports = router;
