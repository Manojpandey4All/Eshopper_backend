const connect=require('./connect');
const {Schema}= require('mongoose');

const cartSchema= new Schema({
    title: {type:Schema.Types.String},
    desc:{type: Schema.Types.String},
    price:{type:Schema.Types.Number},
    // quentity:{type:Schema.Types.Number},
    userid:{type:Schema.Types.String},
    img:{type:Schema.Types.String}

})
const cartmodule=connect.model('cartdb',cartSchema);
module.exports=cartmodule;

