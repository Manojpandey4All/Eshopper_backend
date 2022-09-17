const productoperation = require('../services/productoperations')
const ProductDto = require('../dto/ProductDto');
const cartDto = require('../dto/cartdto')
const messages = require('../utils/Messages');
const path = require('path');
// const multer = require("multer")
// const storage = multer.diskStorage({
//   destination: (req,file,cb) =>{
//       cb(null,'upload')
//   },
//   filename: (req,file,cb)=>{
//       cb(null,Date.now()+ "-" + file.originalname)
//   }
// })

// const upload = multer({storage}).single('file')
// const productcontroller = {

const productcontroller = {

  addproduct(request, response) {
    console.log(request.body);
    if (request.files.img.mimetype === "image/jpeg"
      || request.files.img.mimetype === "image/png"
      || request.files.img.mimetype === "image/webp") {

      const file = request.files.img; //getting file object
      const imgname = request.files.img.name;
      const parent = path.normalize(__dirname + '/..');
      console.log(parent, "path of parent")
      const fullpath = path.join(parent, '/upload/');
      console.log("fullpath og image", fullpath + imgname);
      file.mv(fullpath + imgname, (err) => {
        if (err) {
          response.sendStatus(500);
        }

      })
      

      const { name, pdescription, price, catname, pcode } = request.body;
      const productobj = new ProductDto(name, pdescription, price, catname, pcode, imgname);
      const product_data = productoperation.add(productobj);
      product_data.then(data => {
        if (data) {
          response.sendStatus(200)
        }
      }).catch(err => {
        if (err) {
          console.log(err.message);
          response.sendStatus(500);
        }
      })

    }
  }

  ,
  displayproduct(request, response) {
    const pagenum = 1;

    const product_data = productoperation.display(pagenum);
    product_data.then(res => {
      setTimeout(() => {
        response.status(201).json({ res });
      }, 500)

    }).catch(err => {
      console.log("err in fatching");
    })
  },

  getallproduct(request,response){
    const product_data = productoperation.diplayall();
    product_data.then(res => {
      setTimeout(() => {
        response.status(201).json({ res });
      }, 500)

    }).catch(err => {
      console.log("err in fatching");
    })
  }
,
  // editproduct(request, response) { },
  deleteproduct(request, response) {
    console.log("hi i am there", request.body);
    const { id } = request.body
    const product_data = productoperation.delete(id)
    product_data.then(data => {
      if (data.deletedCount != 0) {
        response.sendStatus(200);
      } else {
        response.sendStatus(500);
      }
    }).catch(err => {
      response.sendStatus(500);
    })

  },
  // searchproduct(request, response) { },

  addtocart(request, response) {

    console.log("request data", request.body);
    const { title, desc, price, userid, img } = request.body;


    const dto = new cartDto(title, desc, parseInt(price), userid, img);
    console.log("dot in controller", dto);
    const promise = productoperation.addtocart(dto);
    promise.then(data => {


      response.status(201).json({ value: true });
    }).catch(err => {
      console.log("errroe", err.messages);
    })

  },

  showcart(request, response) {

    const promise = productoperation.displaycart(request.body.id);

    promise.then(data => {
// console.log("data in show cart",data)
      if (data.length != 0) {
        response.status(200).json(data);
      } else {
        console.log(" show in else condition");
        response.status(500).json({ data: false });
      }
    })
  }
  ,
  deletecart(request, response) {
    
    const promise = productoperation.deletecart(request.body);
    promise.then(data => {


      if (data.deletedCount !== 0) {
        response.sendStatus(200)
      }
      else {
        response.sendStatus(500);
      }
    }).catch(err => {
      if (err) {
        console.log(err);
      }
    })
  }
  ,searchproduct(request,response){
    const obj=request.body
    const promise=productoperation.searchbyid(obj);
    promise.then(data=>{
      if(data!==null){

        response.status(200).json(data)
      }else{
        response.sendStatus(500);
      }
      
    }).catch(err=>{
      if(err){
        console.log(err.message);
      }
    })
  }
  ,
  updateproduct(request,response){
    console.log("in update product",request.body);
    const {id}=request.body;
    const obj={
      pcode:request.body.pcode,
      name:request.body.name,
      pdescription:request.body.pdescription,
      price:request.body.price,
      catname:request.body.catname,
           
    }
    const promise=productoperation.updateproduct(id,obj)
    promise.then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
      response.sendStatus(200);
      }
      else{
        response.sendStatus(500);
      }
    }).catch(err=>{
     
        console.log("err",err.message);
     
    })
  }
}


module.exports = productcontroller;