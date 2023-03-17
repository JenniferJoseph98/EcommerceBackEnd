const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();
const cors = require("cors");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URl, () => {
  console.log("Databases connected");
});
app.get("/", (req, res) => {
  res.send("Hi");
});
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/users", authRoutes);
app.use("/api/products", productRoutes);
app.listen(8000, () => console.log("Server Connected"));
