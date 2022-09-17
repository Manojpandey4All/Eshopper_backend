const jwt=require('jsonwebtoken');
const tokenCreation={
    createToken(id){
        console.log("id in token creation",id)
        let tokenId = jwt.sign({id},process.env.JWT_kEY,{expiresIn:'1h'});
        return tokenId;
    }
}

module.exports=tokenCreation;