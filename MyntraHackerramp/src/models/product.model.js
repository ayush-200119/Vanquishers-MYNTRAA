const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
 
    brandName: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: false },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: false },
    images: [{ type: String, required: true }],
    discount: { type: Number, required: false },
    sizes: [{ type: String, required: false }],
    color: { type: String, required: false },
    colorIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "color", required: false },
    ],
    gender: { type: String, required: true },
    tagIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: false },
    ],

    recommandedBy:[
      {
        influencerId:{type:String,requied:true},
        influencerName:{type:String,required:true}
      }
    ],
    Likes:{type:Number,required:true},
    dFactor:{type:Number,required:true} //sizeof(recommandedBy Array)/Likes *100
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports.schema=productSchema;
module.exports.model = Product;

