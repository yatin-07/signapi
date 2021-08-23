const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/route");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();
app.use('/api', router)


if (process.env.DataBase_Connection) {
    try {
      mongoose.connect(process.env.DataBase_Connection, {
        useNewUrlParser: true,
      });
    } catch (err) {
      console.log("errr  while connecting db", "errr");
    }
  }
app.listen(4000, () => console.log("server is running"));
