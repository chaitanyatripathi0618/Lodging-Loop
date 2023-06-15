const mongoose = require("mongoose")
const imgSchema= new mongoose.Schema({
    name:String,
    description:String,
    breakfast:String,
    roomstype:String,
    location:String,
    img:{
        data:Buffer,
        contentType:String,
    },
    price:String,
    // id:{type:Schema.Types.ObjectId, ref:'user-data'}
})
const ImgModel=mongoose.model("Image",imgSchema)
module.exports=ImgModel;


//implement the functionality on useState and useEffect one button for age and other for siblings name