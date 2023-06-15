const express = require("express")
const app= express()
const mongoose =require('mongoose')
const User= require('./modules/User')
const jwt=require('jsonwebtoken')
const fs= require('fs')
const multer = require('multer')
const imageModel =require('./modules/File')
const roomModel =require('./modules/Room')
const holidayModel =require('./modules/Holiday')



//password:chaitanya123
//pehle admin bnao the access
// database connect kro through compass 
// pehle atlas to compass se connect kro then atlas ko fir code se
//niche diye gye url me password dal or question mark se pehle database name dalo 
//ar run hote hi collection name jo v hota h schma me usse compass me apne aap bn jata h bhai
//syad user-data likhna h User ke jagh
mongoose.connect('mongodb+srv://chaitanya123:chaitanya123@cluster0.bck4ey7.mongodb.net/user-data?retryWrites=true&w=majority')
// mongoose.connect('mongodb+srv://chaitanya123:chaitanya123@cluster0.bck4ey7.mongodb.net/test')


const cors=require("cors")
app.use(cors())

app.use(express.json())

app.post('/api/register',async(req,res)=>{
    console.log(req.body)
    try{
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone,
        })
        res.json({ status:ok})
        
    }
    catch(err){
        console.log(err)
        res.json({status:'error', error:'Duplicate Email'})
    }
})
app.post('/api/login',async(req,res)=>{
    // console.log(req.body)
        const user = await User.findOne({
            password:req.body.password,
            phone:req.body.phone,
        })

        if(user){
            const token= jwt.sign({
                phone:user.phone,
                email:user.email,
                
            },'secret123')
            return res.json({status:'ok', user:true, token:token})
            console.log(user)
        }
        else{
            return res.json({status:'error', user:false})

        }
        // res.json({ status:ok}) 
})

const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload =multer({storage:storage})
app.post('/upload',upload.single('testImage'),(req,res)=>{
    const saveImage=new imageModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        breakfast:req.body.breakfast,
        roomstype:req.body.roomstype,
        location:req.body.location,
        img:{
            data:fs.readFileSync('uploads/'+req.file.filename),
            contentType:"image/jpeg",
        },
        
    });
    saveImage.save()
    .then((res)=>{console.log('image is saved')})
    .catch((err)=>{console.log(err,'error')})
    res.send("image is saved")
});

app.get('/upload',async(req,res)=>{
    const allData= await imageModel.find()
    res.json(allData)
})
app.get('/upload/:id', async(req,res)=>{
    const {id}=req.params;
    res.json(await imageModel.findById(id))
})

//rooms
const store =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'rooms')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const rooms =multer({storage:store})
app.post('/rooms',rooms.single('roomImage'),(req,res)=>{
    const saveImage=new roomModel({
        description:req.body.description,
        price:req.body.price,
        roomstype:req.body.roomstype,
        img:{
            data:fs.readFileSync('rooms/'+req.file.filename),
            contentType:"image/jpg",
        },
        
    });
    saveImage.save()
    .then((res)=>{console.log('image is saved')})
    .catch((err)=>{console.log(err,'error')})
    res.send("image is saved")
});

app.get('/rooms',async(req,res)=>{
    const allData= await roomModel.find()
    res.json(allData)
})
 


//vacations

const storage2 =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'holiday')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const holiday =multer({storage:storage2})
app.post('/holiday',holiday.single('holidayImage'),(req,res)=>{
    const saveImage=new holidayModel({
        place:req.body.place,
        description:req.body.description,
        price:req.body.price,
        offers:req.body.offers,
        img:{
            data:fs.readFileSync('holiday/'+req.file.filename),
            contentType:"image/jpeg",
        },
        
    });
    saveImage.save()
    .then((res)=>{console.log('image is saved')})
    .catch((err)=>{console.log(err,'error')})
    res.send("image is saved")
});

app.get('/holiday',async(req,res)=>{
    const allData= await holidayModel.find()
    res.json(allData)
})


app.listen(4000,()=>{
    console.log("Server build")
})