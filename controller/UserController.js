const userdto = require('../dto/userDto');
const useroperation = require('../services/useroperation')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const messages = require('../utils/Messages');
const token = require('../utils/tokenCreation');
const FeedbackDto = require('../dto/feedbackdto');
const PaymentDto = require('../dto/paymentDto');
const UserController = {

    Register(request, response) {
        console.log("data ind register",request.body)
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                messages.err(err);
            }
            else {
                bcrypt.hash(request.body.Password, salt, function (err, hash) {
                    const userobj = new userdto(request.body.Name, request.body.Email, hash, request.body.Gender,parseInt( request.body.Contact), request.body.Address);
                    const checkedUser = useroperation.findbyemail(request.body.Email);
                    checkedUser.then(data => {
                   console.log("Data in data",data)
                        if (data!==null) {
                   console.log("Im in if",data)
                            response.status(200).json({isexits:'true'});
                        }
                        else {
                       
                            const promise = useroperation.register(userobj);
                            promise.then(data => {
                              
                                response.status(200).json({isregister:'true'});
                            }).catch(err => {
                                if (err) {
                                    console.log("registration catch",err.message)
                                  response.sendStatus(500);
                                }
                            })
                        }
                    }).catch(err => {
                        if (err) {
                            console.log("fidbyemail catach",err.message);
                            response.sendStatus(500);
                        }
                    }
                    )
                });
            }
        });


    }
    ,
    login(request, response) {
        console.log(request.body);
         const {Email,Password}=request.body
         const checkedUser = useroperation.findbyemail(Email);
        checkedUser.then(data => {
            console.log("i am data",data)
            if (data!=null) {
                console.log("i am data",data)
                bcrypt.compare(Password, data.Password, function (err, result) {
                    if (result == true) {
                        const accesstoken =   token.createToken(data._id);
                      
                        response.status(200).json({islogin:true,accesstoken:accesstoken,userid:data})
                    }
                    else {
                        console.log("iam in else") 
                        response.status(200).json({islogin:false})
                    }
                });
            }
            else {
                response.sendStatus(500)
            }
        }).catch(err => {
                response.sendStatus(500);
        })
    },
    getusers(request,response){
        const promise=useroperation.getusers();
        promise.then(data=>{
            if(data.length!==0){
                response.status(200).json(data);
            }
            else{
                response.sendStatus(500)
            }
        }).catch(err=>{
           if(err){
               console.log(err.message);
           } i
        })
    },
    addfeedback(request,respone){
        console.log("addfeedback",request.body);
        const {email,message}=request.body
        const dto=  new FeedbackDto(email,message);
        const promise= useroperation.Feedback(dto);
        promise.then(data=>{
       
            if(data){
                respone.sendStatus(200);
            }
            else{
                respone.sendStatus(500);

            }
        }).catch(err=>{
            if(err){
                console.log(err.message);
            }
        })
    },
    payment(request,respone){
        console.log("addfeedback",request.body);
        const {pid,price,userid,pmode,quantity}=request.body
        const current_date=new Date();
        const dto=  new PaymentDto(pid,parseInt(price),userid,parseInt(quantity),pmode,current_date);
        const promise= useroperation.payment(dto);
        promise.then(data=>{
       
            if(data){
                respone.sendStatus(200);
            }
            else{
                respone.sendStatus(500);

            }
        }).catch(err=>{
            if(err){
                console.log(err.message);
            }
        })
    }
    
}
module.exports = UserController;