const connect= require('../models/connect');
const {Schema}= require('mongoose');
const productschema= new Schema(
    {
    name: {type:Schema.Types.String},
    pdescription :{type:Schema.Types.String},
    price:{type:Schema.Types.Number},
    catname:{type:Schema.Types.String},
    pcode:{type:Schema.Types.String},
    image:{type:Schema.Types.String},
    
    
    }
)
const productmodule=connect.model('productdb',productschema);
module.exports=productmodule;