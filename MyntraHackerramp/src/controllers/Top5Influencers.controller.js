const express = require("express");
const influencerDataArray=require("../influencerData.js");
const router = express.Router();

function compare(a,b){
  let engagingFactor_a=(a.likes/a.followers)*100 + a.comments;
  let engagingFactor_b = (b.likes/b.followers)*100 + b.comments;
  
  if(engagingFactor_a>engagingFactor_b)
  {
    return -10;
  }
  else
  {
    return 10;
  }
}

router.get("/", async (req, res) => {
    
  influencerDataArray.sort(compare);
    return res.render("ejs/Top5",{influencerDataArray:influencerDataArray});
  });


  //routing for individual Influencers
  router.get("/:influencerName", async(req,res)=>{
    
    const name=req.params.influencerName;
    var foundInfluencer=influencerDataArray.find(function(inf,index){
         if(inf.name==name)
         {
           return true;
         }
    });

    return res.render("ejs/influencer",{recommendedProducts:foundInfluencer.recommendedProducts});


  });

  module.exports = router;