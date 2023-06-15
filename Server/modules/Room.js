const mongoose = require("mongoose")
const roomSchema= new mongoose.Schema({
    description:String,
    breakfast:String,
    roomstype:String,
    img:{
        data:Buffer,
        contentType:String,
    },
    price:String,
})
const RoomModel=mongoose.model("rooms",roomSchema)
module.exports=RoomModel;