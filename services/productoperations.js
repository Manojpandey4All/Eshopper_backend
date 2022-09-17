const productmodule=require('../db/models/productschema')
const cartmodule=require('../db/models/cartschema');
const productoperations={
    add(obj){
        console.log("product data ",obj);
        const promise=productmodule.create(obj);
        return promise;
    }
,
    display(pagenum){
         
        const value=6;
        const promise=productmodule.find().limit(value).skip(value*(pagenum-1));
        // const promise=productmodule.find();
        // const promise=productmodule.find({catname:{$in:["sofas","chairs","tables","beds","storages"]}}).limit(value).skip(value*(pagenum-1));
        
        return promise;
      
      
    },
    diplayall(){
        // const promise=productmodule.find({catname:{$in:["sofas","chairs","tables","beds","storages"]}});

        const promise=productmodule.find({catname:{$in:["Camera & Accessiors","Gaming Devices","Mobile Phones","Home Appliances","Computer & Accessories  "]}});
            return promise
    }
    ,edit(obj){
        const promise=productmodule.updateOne({_id:obj._id});
        return promise;
    }
    ,delete(obj){
        console.log("id in delete",obj)
        const promise=productmodule.deleteOne({_id:obj});
        return promise;

    }
    ,
    addtocart(obj){
        console.log("object in operations",obj.price);
        const promise=cartmodule.create(obj);
         return promise;
    },
     displaycart (userid) {
         console.log("in operations useid",userid)
        const promise= cartmodule.find({userid:userid});
        // const promise=cartmodule.find();
        return promise;
    },
    deletecart(obj){
        const {p_id,user_id}=obj
        const promise=cartmodule.deleteOne({_id:p_id,userid:user_id});
        return promise;

    },
    searchbyid(obj){
        
     const promise=productmodule.findOne({_id:obj.id});   

    return promise;
    },
    updateproduct(id ,data){
      
        const promise=productmodule.updateOne({_id:id},data)
        return promise;
    }

}
module.exports=productoperations;