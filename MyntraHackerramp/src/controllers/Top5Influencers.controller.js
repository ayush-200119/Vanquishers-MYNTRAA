const express = require("express");
const influencerDataArray=require("../influencerData.js");
const router = express.Router();
const Influencer=require(__dirname+"/../models/influencer.model.js");



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
    
  Influencer.find({},function(err,foundInfluencers){
    if(foundInfluencers.length===0){
      Influencer.insertMany(influencerDataArray,function(err){
        if(err){
          console.log(err);
        }else{
          console.log("Succesfully added Infulencers data to database");
        }
      });
      res.redirect("/");
    }else{
        foundInfluencers.sort(compare);
        return res.render("ejs/Top5Influencer",{influencerDataArray:foundInfluencers});
    }
  });
});


  //routing for individual Influencers
  router.get("/:influencerName", async(req,res)=>{
    
    const customName=req.params.influencerName;
    // var foundInfluencer=influencerDataArray.find(function(inf,index){
    //      if(inf.name==name)
    //      {
    //        return true;
    //      }
    // });

    // return res.render("ejs/influencer",{recommendedProducts:foundInfluencer.recommendedProducts});

    Influencer.findOne({name:customName},function(err,foundCustomInfluencer){
      return res.render("ejs/influencerRecommendedProducts",{recommendedProducts:foundCustomInfluencer.recommendedProducts,name:customName});
    });


  });

  module.exports = router;