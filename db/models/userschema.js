const connect=require('./connect');
const {Schema, model}=require('mongoose');
const userschema=new Schema({
    Name:{type:Schema.Types.String},
    Email:{type:Schema.Types.String,unique:true},
    Password:{type:Schema.Types.String},
    Gender:{type:Schema.Types.String,default:'Male'},
    Contact:{type:Schema.Types.Number},
    Address:{type:Schema.Types.String},
    Flag:{type:Schema.Types.Boolean,default:'false'},

},{timestamps:{ createdAt: 'RegistrationDate' }})
const usermodule=connect.model('users',userschema);
module.exports=usermodule;