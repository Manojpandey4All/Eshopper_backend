const connect= require('../models/connect');
const {Schema}= require('mongoose');
const feedbackSchema= new Schema(
    {
    email: {type:Schema.Types.String},
    message:{type:Schema.Types.String},
   
    
    }
)
const feedbackmodule=connect.model('feedbackdb',feedbackSchema);
module.exports=feedbackmodule;