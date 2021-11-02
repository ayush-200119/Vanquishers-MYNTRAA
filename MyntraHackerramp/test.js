// const express = require('express');
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const setUp=require(__dirname+"/src/configs/db.js");

//  const p = require(__dirname+"/src/models/product.model.js");
//  const Product= p.model;
//  const Influencer=require(__dirname+"/src/models/influencers.js");

// const app = express();

// setUp();

// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));

// const shirt=new Product({
//    productId:"1",
//    brandName:"Rebook",
//    category:"shoes",
//    description:"Comfortable & light weight",
//    productName:"Mens Shoes",
//    price:400,
//    quantity:10,
//    images:["https://content.shop4reebok.com/static/Product-FW0363/MEN_RUNNING_SHOES_FW0363_1.jpg.zoom"],
//    discount:20,
//    sizes:["6","7","8","9"],
//    color:"black",
//    gender:"men",

//    recommandedBy:[{influencerId:"1",influencerName:"Ayush"},{influencerId:"2",influencerName:"Avni"},{influencerId:"3",influencerName:"Ameeta"}],

//    Likes:100
// });

// const Tshirt=new Product({
//     productId:"2",
//     brandName:"Rebook",
//     category:"shoes",
//     description:"Comfortable & light weight",
//     productName:"Mens Shoes",
//     price:400,
//     quantity:10,
//     images:["https://content.shop4reebok.com/static/Product-FW0363/MEN_RUNNING_SHOES_FW0363_1.jpg.zoom"],
//     discount:20,
//     sizes:["6","7","8","9"],
//     color:"black",
//     gender:"men",
 
//     recommandedBy:[{influencerId:"1",influencerName:"Ayush"},{influencerId:"2",influencerName:"Avni"},{influencerId:"3",influencerName:"Ameeta"}],
 
//     Likes:100
//  });
//  Tshirt.save();

//  const hirt=new Product({
//     productId:"3",
//     brandName:"Rebook",
//     category:"shoes",
//     description:"Comfortable & light weight",
//     productName:"Mens Shoes",
//     price:400,
//     quantity:10,
//     images:["https://content.shop4reebok.com/static/Product-FW0363/MEN_RUNNING_SHOES_FW0363_1.jpg.zoom"],
//     discount:20,
//     sizes:["6","7","8","9"],
//     color:"black",
//     gender:"men",
 
//     recommandedBy:[{influencerId:"1",influencerName:"Ayush"},{influencerId:"2",influencerName:"Avni"},{influencerId:"3",influencerName:"Ameeta"}],
 
//     Likes:100
//  });
//  hirt.save();

//  const rt=new Product({
//     productId:"4",
//     brandName:"Rebook",
//     category:"shoes",
//     description:"Comfortable & light weight",
//     productName:"Mens Shoes",
//     price:400,
//     quantity:10,
//     images:["https://content.shop4reebok.com/static/Product-FW0363/MEN_RUNNING_SHOES_FW0363_1.jpg.zoom"],
//     discount:20,
//     sizes:["6","7","8","9"],
//     color:"black",
//     gender:"men",
 
//     recommandedBy:[{influencerId:"1",influencerName:"Ayush"},{influencerId:"2",influencerName:"Avni"},{influencerId:"3",influencerName:"Ameeta"}],
 
//     Likes:100
//  });
//  rt.save();

//  const check=new Product({
//     productId:"5",
//     brandName:"Rebook",
//     category:"shoes",
//     description:"Comfortable & light weight",
//     productName:"Mens Shoes",
//     price:400,
//     quantity:10,
//     images:["https://content.shop4reebok.com/static/Product-FW0363/MEN_RUNNING_SHOES_FW0363_1.jpg.zoom"],
//     discount:20,
//     sizes:["6","7","8","9"],
//     color:"black",
//     gender:"men",
 
//     recommandedBy:[{influencerId:"1",influencerName:"Ayush"},{influencerId:"2",influencerName:"Avni"},{influencerId:"3",influencerName:"Ameeta"}],
 
//     Likes:100
//  });
//  check.save();

//  const check2=new Product({
//     productId:"6",
//     brandName:"Rebook",
//     category:"shoes",
//     description:"Comfortable & light weight",
//     productName:"Mens Shoes",
//     price:400,
//     quantity:10,
//     images:["https://content.shop4reebok.com/static/Product-FW0363/MEN_RUNNING_SHOES_FW0363_1.jpg.zoom"],
//     discount:20,
//     sizes:["6","7","8","9"],
//     color:"black",
//     gender:"men",
 
//     recommandedBy:[{influencerId:"1",influencerName:"Ayush"},{influencerId:"2",influencerName:"Avni"},{influencerId:"3",influencerName:"Ameeta"}],
 
//     Likes:100
//  });
//  check2.save();
 

//  const check3=new Product({
//     productId:"1",
//     brandName:"Rebook",
//     category:"shoes",
//     description:"Comfortable & light weight",
//     productName:"Mens Shoes",
//     price:400,
//     quantity:10,
//     images:["https://content.shop4reebok.com/static/Product-FW0363/MEN_RUNNING_SHOES_FW0363_1.jpg.zoom"],
//     discount:20,
//     sizes:["6","7","8","9"],
//     color:"black",
//     gender:"men",
 
//     recommandedBy:[{influencerId:"1",influencerName:"Ayush"},{influencerId:"2",influencerName:"Avni"},{influencerId:"3",influencerName:"Ameeta"}],
 
//     Likes:100
//  });
//  check3.save();


// // shirt.save();

// const influencer1=new Influencer({
//     name:"Ayush",
//     image:"https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70",
//     gender:"male",
//     followers:10,

//     recommendedProducts:[check,check2,check3]
// });

// influencer1.save();

// const influencer2=new Influencer({
//     name:"Avni",
//     image:"https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70",
//     gender:"female",
//     followers:15,

//     recommendedProducts:[shirt,Tshirt]
// });
// influencer2.save();

// const influencer3=new Influencer({
//     name:"Ameeta",
//     image:"https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70",
//     gender:"female",
//     followers:10,

//     recommendedProducts:[hirt,rt]
// });
// influencer3.save();



// app.listen(3000,function(req,res){
//     console.log("Listeneing to port 3000");
// });