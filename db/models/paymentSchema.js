const connect= require('../models/connect');
const {Schema}= require('mongoose');
const paymentschema= new Schema(
    {
    pid: {type:Schema.Types.String},
    price:{type:Schema.Types.Number},
    userid:{type:Schema.Types.String},
    quantity:{type:Schema.Types.Number},
    pmode:{type:Schema.Types.String},
    date:{type:Schema.Types.Date},
    
    
    
    }
)
const paymentmodule=connect.model('paymentdb',paymentschema);
module.exports=paymentmodule;