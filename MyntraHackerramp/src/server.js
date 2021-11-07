// Import the important packages
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import the configration file
const connect = require("./configs/db");



const homeController = require("./controllers/home.controller");

const top5Influencer=require("./controllers/Top5Influencers.controller");
const mostLovedProducts=require("./controllers/mostLovedProducts.controller");
const product=require("./controllers/individualProduct.controller.js");
const selling=require("./controllers/selling.controller.js");
// Create the express app using middleware
const app = express();
app.use(express.json());
app.use(cors()); // to unblock CORS
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

// Create the views part of the application
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");


app.use("/home", homeController);

// app.use("/wishlist", wishlistController);

// app.use("/login", loginController);

// app.use("/signin", signinController);
// app.use("/user", userController);

app.use("/sellingOptionForinfluencer",selling);
app.use("/top5influencers",top5Influencer);
app.use("/mostlovedproducts",mostLovedProducts);

app.use("/",product);

// Listen for events
app.listen(3000, async () => {
  await connect();
  console.log("Server is running on port 3000");
});
