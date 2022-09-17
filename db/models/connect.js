
const mongoose= require('mongoose');

// console.log("the url", process.env.DBURL)
// const DBURL='mongodb+srv://root:root@eshoopercluster.p77r2.mongodb.net/AllinNodeAPIEcom?retryWrites=true&w=majority'
mongoose.connect(process.env.DBURL,(err)=>{
// mongoose.connect('mongodb+srv://root:root@eshoopercluster.p77r2.mongodb.net/AllinNodeAPIEcom?retryWrites=true&w=majority',dbOptions,(err)=>{
if(err){
        console.log(err);
    }
    else{
        console.log("Connection Stablished")
    }
})
module.exports=mongoose;