const express = require("express");
const productDataArray=require("../productData");
const router = express.Router();

function compare(a,b){
  var dFactor_a=a.recommandedBy.length;
  var dFactor_b=b.recommandedBy.length;

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
    productDataArray.sort(compare);
    return res.render("ejs/mostLovedProducts.ejs",{productDataArray:productDataArray});
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