const mongoose = require("mongoose")
const BookingSchema= new mongoose.Schema({
   room:{
    type:String,required:true
   },
    roomId:{
        type:String,required:true
    },
    FormData:{
        type:String,required:true
    },
    ToDate:{
        type:String,required:true
    },
    totalAmount:{
        type:Number,required:true

    },
    totalDays:{
        type:Number,required:true

    },
    transactionId:{
        type:String,required:true

    },
    status:{
        type:String,required:true,default:"booked"
    }
})
const BookModel=mongoose.model("bookings",BookingSchema)
module.exports=BookModel;