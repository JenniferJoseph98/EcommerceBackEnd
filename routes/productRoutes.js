const productRoutes = require("express").Router();
const Product = require("../model/Product");
productRoutes.get("/", async (req, res) => {
  try {
    const allProduct = await Product.find();
    res.status(200).json({
      status: "Successfull",
      products: allProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
});
productRoutes.get("/:id", async (req, res) => {
  try {
    const allProduct = await Product.findById({ _id: req.params.id });
    res.status(200).json({
      status: "Successfull",
      products: allProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
});

productRoutes.post("/add", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json({
      status: "Successfull",
      products: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
});
module.exports = productRoutes;
