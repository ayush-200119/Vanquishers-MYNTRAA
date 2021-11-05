const mongoose = require("mongoose");
const product =require(__dirname+"/product.model.js");

const influencerSchema = new mongoose.Schema(
   {
     influencerId:{type:Number,required:true},
       name:{type:String, required:true},
       description:{type:String,required:false},
       image:{type:String, required:true},
       gender:{type:String,required:true},
       followers:{type:Number,required:true},
       likes:{type:Number,required:true},//represents avg likes on the prev 4 posts by the influencer
       comments:{type:Number,required:true},//represents avg comments on the prev 4 posts by the influencer
       recommendedProducts:[product.schema],
       link:{type:String, required:false}

   }
);

const Influencer = mongoose.model("influencer", influencerSchema);

module.exports = Influencer;