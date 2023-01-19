const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
app.use(cors());
const jsonParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({extended: true});  
mongoose.set('strictQuery',true);

mongoose.connect(process.env.URI);
const emailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});
const cardSchema = new mongoose.Schema({
    img : {
        data: Buffer,
    },
    title : String,
    des : String,
    date : String,
    yt :String
});
const Email = mongoose.model('Email',emailSchema);
const Card = mongoose.model('Card',cardSchema);
let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname+'-'+Date.now())
    }
});
const fileFilter = (req, file, cb) => {
    // Only accept image files
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
let upload = multer({storage: storage,limits: {fileSize: 1024*1024*1},fileFilter: fileFilter});
app.get("/work",(req,res)=>{
    Card.find({},(err,foundCards)=>{
        if(!err) {
            res.json(foundCards);
        }
        else {
            res.send(err);
        }
    });
});
app.get("/email",(req,res)=>{
    Email.find({},(err,foundCards)=>{
        if(!err) {
            res.send(foundCards);
        }
        else {
            res.send(err);
        }
    });
});
app.post("/email",jsonParser,(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    const newEntry = new Email({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newEntry.save()
    .then(response=> {
        console.log("email saved");
        res.sendStatus(res.statusCode);
    })
    .catch(err=> console.log("err"));
});
app.post("/createpost",upload.single('img'),(req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    const reqData = req.body;
    const newPost = new Card({
        img : {
            data: fs.readFileSync(path.join(__dirname+ '/uploads/'+req.file.filename)),
        },
        title : reqData.title,
        des : reqData.des,
        date : reqData.date,
        yt : reqData.yt
    });
    newPost.save()
    .then(res=> console.log("Post saved"))
    .catch(err=> console.log("Can't save post"));
});
app.delete("/deletemail/:id",(req,res)=>{
    const id = req.params.id;
    Email.findByIdAndDelete({_id:id},(err)=>{
        if(!err) {
            console.log("email deleted");
        }
        else {
            console.log(err);
        }
    });
});
app.get("/findPost/:postId",urlParser,(req,res)=>{
    const id = req.params.postId;
    Card.findOne({_id:id},(err,foundEmail)=>{
        if(!err){
            res.send(foundEmail);
        }
        else {
            console.log(err);
        }
    });
});
app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
});
app.listen(process.env.PORT,()=>{
            console.log(`Server is running at port ${process.env.PORT}`); 
        });