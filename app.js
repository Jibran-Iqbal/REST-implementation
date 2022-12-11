const express = require('express')

const mongoose = require("mongoose")

const app = express()

require('dotenv/config')


// Now we can create routes

const postRoute = require('./routes/posts')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.json());
app.use('/post',postRoute)
app.use(cors())
// Routes


app.get('/',(req,res) =>{
    res.send("We are on home");
})

mongoose.connect(process.env.DB_CONNECTION,{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Connected to DB!")).catch((e)=>{console.log(e)})




//Connect to DB




// Listening to the server
app.listen(5000);
