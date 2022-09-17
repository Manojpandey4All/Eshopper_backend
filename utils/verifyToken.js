const jwt= require('jsonwebtoken')
// const verifyToken={

//     tokencheck(request,response,next){
// //Get Token from header
// const headertoken = request.headers.authorization;
// // console.log(request.header.authorization);
// // console.log("token in verify token :- ",headertoken);
// //checking token is not undefined
// if(typeof headertoken!=='undefined'){
//     const token=headertoken.split(' ')[1];
//     jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
//                if(err){ 
          
//                   }      response.status(403).json({Message:"Token is Not Valid..."});    
//                   request.user = user;
//                   next()
           
       
//         })
// }
// else{
//     response.sendStatus(403);
// }
//        }

// }

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.authorization

    console.log("request header",authHeader)
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_kEY,(err,user)=>{
            if(err) res.status(403).json("Token is Not Valid...")
            req.user = user
            next()
        })
    }else{
        return res.status(401).json("You are not authenticated...")
    }
}
module.exports=verifyToken;