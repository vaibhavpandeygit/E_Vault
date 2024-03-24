const express = require('express')
const app = express();
const {dbConnect} = require('./config/dbConnect');
const { router } = require('./routes/authRoute');

require('dotenv').config()

app.use(express.json())
dbConnect();

app.use('/e_vault/auth',router)

app.listen(process.env.PORT,()=>{
    console.log('Server Started on',process.env.PORT);
})