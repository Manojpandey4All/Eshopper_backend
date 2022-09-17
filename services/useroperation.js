const feedbackmodule = require('../db/models/feedbackSchema');
const paymentmodule = require('../db/models/paymentSchema');
const usermodule = require('../db/models/userschema');
const messages= require('../utils/Messages');
const useroperation = {
    register(obj) {

        const promise = usermodule.create(obj);
        return promise;
    }
    
    ,async findbyemail(Email) {
      
               const promise = await usermodule.findOne({ Email: Email});
            return promise;

    
    },
        async getusers(){
            const promise = await usermodule.find();
            return promise;

        }
    ,
    Feedback(obj){
        const promise =feedbackmodule.create(obj);
        return promise;
    }    
    ,
   async payment(obj){
        const promise =await paymentmodule.create(obj);
        return promise;
    }    


}
module.exports = useroperation;