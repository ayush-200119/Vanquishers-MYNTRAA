const mongoose = require("mongoose");
const product =requires(__dirname+"/product.model.js");

const influencerSchema = new mongoose.Schema(
   {
       name:{type:String, required:true},
       description:{type:String},
       image:{type:String, required:true},
       gender:{type:String,required:true},
       followers:{type:Number,required:true},
        
       recommendedProducts:product.schema,

   }
);

const Influencer = mongoose.model("influencer", productSchema);

module.exports = Influencer;