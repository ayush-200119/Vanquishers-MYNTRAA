const express = require("express");
const router = express.Router();
const products =require(__dirname+"/../models/product.model.js");

const Product=products.model;

router.get("/:productName",async(req,res)=>{

     const selectedProduct=req.params.productName;
     Product.find({},function(err,foundProducts){
        if(err){
          console.log(err);
        }else{
          const requiredProduct=foundProducts.find(function(product,index){
              if(product.productName === selectedProduct)
              return true;
          });
          return res.render("ejs/product.ejs",{product:requiredProduct});
        }
      });

});

module.exports = router;