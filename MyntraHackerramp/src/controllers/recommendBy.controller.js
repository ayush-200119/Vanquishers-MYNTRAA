const express = require("express");
const { route } = require("./product.controller");

const router = express.Router();
const product=require(__dirname+"/../models/product.model.js");

const Product = product.model;

router.get("/",function(req,res){
    res.send("Hello");
});

module.exports=router;