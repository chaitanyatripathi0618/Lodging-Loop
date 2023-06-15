const mongoose = require("mongoose")
const holidaySchema= new mongoose.Schema({
    place:String,
    description:String,
    img:{
        data:Buffer,
        contentType:String,
    },
    price:String,
    offers:String,
    // id:{type:Schema.Types.ObjectId, ref:'user-data'}
})
const HolidayModel=mongoose.model("holiday",holidaySchema)
module.exports=HolidayModel;