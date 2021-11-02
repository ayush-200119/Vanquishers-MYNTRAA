const express = require("express");
const product =require(__dirname+"/../models/product.model.js");
const productDataArray=require(__dirname+"/../productData.js");
const router = express.Router();

const Product=product.modal;

router.get("/", async (req, res) => {
  console.log(productDataArray);
  return res.render("ejs/home", {productDataArray:productDataArray});
});

router.get("/user/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  let name = user.name;
  return res.render("ejs/home", { name });
});

module.exports = router;
