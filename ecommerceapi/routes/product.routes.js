
const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../utils/db");

router.post("/", (req, res) => {
  const db = readDB();
  const newProduct = { id: Date.now(), ...req.body };
  db.products.push(newProduct);
  writeDB(db);
  res.status(201).json(newProduct);
});

router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.products);
});

module.exports = router;
