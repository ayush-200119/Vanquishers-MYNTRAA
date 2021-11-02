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
        
       recommendedProducts:[product.schema],

   }
);

const Influencer = mongoose.model("influencer", influencerSchema);

module.exports = Influencer;