const express=require('express');
const productcontroller=require('../controller/ProductController');
const route=express.Router();
const verifyToken=require('../utils/verifyToken')
console.log("iam in router");
route.post('/addproduct',verifyToken,productcontroller.addproduct);
route.get('/product',productcontroller.displayproduct);
route.get('/products',productcontroller.getallproduct);
route.post('/deleteproduct',productcontroller.deleteproduct);
route.post ('/addtocart',verifyToken,productcontroller.addtocart);
route.post("/cart",productcontroller.showcart)
route.post("/deletecart",productcontroller.deletecart)
route.post("/searchproduct",productcontroller.searchproduct);
route.post("/updateproduct",productcontroller.updateproduct);
module.exports=route;