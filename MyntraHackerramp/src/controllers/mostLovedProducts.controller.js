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

  module.exports = router;