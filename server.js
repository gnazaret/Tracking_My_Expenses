require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
const transactionRouter = require("./controllers/transactions");

const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

db.on("open", () => {
  console.log("Mongo is connected");
});
//MY OWN PROXY
app.use(cors({
    exposedHeaders: ['Content-Type' ,'Content-Length'],
  }));

//
app.use(express.json());
if (process.env.NODE_ENV !== "development") {
  app.use(express.static("public"));
}
app.use(/\.[0-9a-z]+$/i, express.static('public'));

app.use('/api/tracking', require('./controllers/transactions'))


app.use('/api/tracking', transactionRouter);

app.listen(PORT, () => {
  console.log(`API Listening on ${PORT}`);
});
