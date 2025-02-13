const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


const PORT = process.env.PORT || 5000;

mongoose
  .connect('mongodb+srv://GANESHPRASHINDE:Ganesh%40143@cluster0.ne9dv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log('MongoDB Connection Error:', err));