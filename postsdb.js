const mongoose=require("mongoose")
const posstsschema=new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    userid:{type:Number,required:true},
    title:{type:String,required:true,unique:true},
    body:{type:String,required:true}
})
module.exports=mongoose.model("posts",posstsschema)