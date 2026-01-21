
const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../utils/db");

router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();

  const product = db.products.find((p) => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });
  if (product.stock === 0 || quantity > product.stock)
    return res.status(400).json({ message: "Insufficient stock" });

  const totalAmount = product.price * quantity;
  product.stock -= quantity;

  const order = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount,
    status: "placed",
    createdAt: new Date().toISOString().slice(0, 10),
  };

  db.orders.push(order);
  writeDB(db);
  res.status(201).json(order);
});

router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.orders);
});

router.delete("/:orderId", (req, res) => {
  const db = readDB();
  const order = db.orders.find((o) => o.id == req.params.orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled")
    return res.status(400).json({ message: "Already cancelled" });

  const today = new Date().toISOString().slice(0, 10);
  if (order.createdAt !== today)
    return res.status(400).json({ message: "Cannot cancel now" });

  order.status = "cancelled";
  const product = db.products.find((p) => p.id === order.productId);
  product.stock += order.quantity;

  writeDB(db);
  res.json(order);
});

router.patch("/change-status/:orderId", (req, res) => {
  const db = readDB();
  const order = db.orders.find((o) => o.id == req.params.orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });

  const flow = ["placed", "shipped", "delivered"];
  const currentIndex = flow.indexOf(order.status);

  if (order.status === "cancelled" || order.status === "delivered")
    return res.status(400).json({ message: "Status change not allowed" });

  order.status = flow[currentIndex + 1];
  writeDB(db);
  res.json(order);
});

module.exports = router;
