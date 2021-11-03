const express = require("express");
const product =require(__dirname+"/../models/product.model.js");
const productDataArray=require(__dirname+"/../productData.js");
// const influencerDataArray=require(__dirname+"/../influencerData.js");
const router = express.Router();
// const InfluencerModel=require(__dirname+"/../models/influencer.modal.js");


const Product=product.model;

router.get("/", async (req, res) => {
  // console.log(productDataArray);
  Product.find({},function(err,foundProducts){
    if(foundProducts.length===0){
      Product.insertMany(productDataArray,function(err){
        if(err){
          console.log(err);
        }else{
          console.log("Successfully saved to Database");
        }
      });
      res.redirect("/");
    }else{
      return res.render("ejs/home", {productDataArray:foundProducts});
    }
  });
});

router.get("/user/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  let name = user.name;
  return res.render("ejs/home", { name });
});

module.exports = router;
