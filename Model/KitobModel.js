const {Schema,model}=require("mongoose")

const KitobModel=new Schema({
    name:{
        type:String,
        required:true,
        minlength:5
    },
    title:{
        type:String,
        required:true,
        maxlength:25,
        minlength:10
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true,
        maxlength:15,
        minlength:5
    },
    image:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})
module.exports=model("Book",KitobModel)