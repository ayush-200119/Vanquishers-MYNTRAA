const express = require("express");
const productDataArray=require("../productData");
const router = express.Router();
const product =require(__dirname+"/../models/product.model.js");

const Product=product.model;

function compare(a,b){
  var dFactor_a=a.recommendedBy.length;
  var dFactor_b=b.recommendedBy.length;

  if(dFactor_a>dFactor_b)
  {
    return -10;
  }
  else if(dFactor_a<dFactor_b)
  {
    return +10;
  }
  else
  {
    if(a.Likes>=b.Likes)
    {
      return -10;
    }
    else
    {
      return 10;
    }
  }
}

router.get("/", async (req, res) => {

  Product.find({},function(err,foundMostLovedProducts){
    if(err){
      console.log(err);
    }else{
      foundMostLovedProducts.sort(compare);
      return res.render("ejs/mostLovedProducts.ejs",{productDataArray:foundMostLovedProducts});
    }
  });
});

//adding routes for /:productName ... so that the influencers can be found

// router.get("/:productName",async(req,res) =>{
//    const productName=req.params.productName;
//    const foundProduct=productDataArray.find(function(product,ind){
//        if(product.productName==productName)
//        {
//          return true;
//        }
//    });



// });

  module.exports = router;