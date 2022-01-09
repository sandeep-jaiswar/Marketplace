const express = require('express');
const connectDB = require('./config/database')

const app = express();

connectDB();

app.get('/',(req,res)=>res.send('hello'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server is up at port : ${PORT}`))
