const { json } = require("express");
const express = require("express");
const transactionRouter = express.Router();
const Transaction = require("../models/Transaction");

//CREATE
transactionRouter.post("/", async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    res.status(200).json(newTransaction);
  } catch (error) {
    res.status(400).json(error);
  }
});

//READ
transactionRouter.get("/", async (req, res) => {
  try {
    const foundTransaction = await Transaction.find({});
    res.status(200).json(foundTransaction);
  } catch (error) {
    res.status(400).json(error);
  }
});
//SHOW
transactionRouter.get("/:id", async (req, res) => {
  try {
    const foundTransaction = await Transaction.findById(req.params.id);
    res.status(200).json(foundTransaction);

  } catch (error) {
    res.status(400).json(error);
  }
});

//DELETE

transactionRouter.delete('/:id', async (req, res) => {
  try {
    const foundTransaction = await Transaction.findByIdAndDelete(req.params.id);
    res
    .status(200)
    .json(foundTransaction);

  } catch (error) {
    res.status(400)
    .json(error);
  }
});

transactionRouter.get("/", (req, res) => res.send("Hello"));

module.exports = transactionRouter;
