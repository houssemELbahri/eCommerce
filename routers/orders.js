const express = require("express");
const router = express.Router();

const { Order } = require("../models/order");

router.get(`/`, async (req, res) => {
  const orders = await Order.find();
  res.status(200).send({ success: true, orders });
});

router.post(`/`, (req, res) => {
  const { total } = req.body;
  const order = new Order({
    total: +total,
  });
  order
    .save()
    .then((createdOrder) => res.status(201).json(createdOrder))
    .catch((err) => res.status(500).json({ error: err, success: false }));
});

module.exports = router;
