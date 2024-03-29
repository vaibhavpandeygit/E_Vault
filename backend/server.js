const express = require('express')
const app = express();
const {dbConnect} = require('./config/dbConnect');
const { router } = require('./routes/authRoute');
const cors = require('cors')

require('dotenv').config()

app.use(cors())

app.use(express.json())
dbConnect();

app.use('/e_vault/auth',router)

app.get('/',(req,res)=>{
    res.send("bhut badia")
})

app.listen(process.env.PORT,()=>{
    console.log('Server Started on',process.env.PORT);
})