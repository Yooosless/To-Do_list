
const express= require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
const tasks= require('./routes/tasks')
const connectDB=require('./database/connect')


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//middleware
app.use(express.static('./public'));

app.use(express.json())



//routes
app.get('/hello',(req,res)=>{
    res.send("Hello World")
})

app.use('/api/v1/tasks',tasks)


const port= 3000

const start= async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}...`))
    }
    catch(error){
        console.log(error)
    }
}

start()


