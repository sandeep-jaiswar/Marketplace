const express = require('express');

const app = express();

app.get('/',(req,res)=>res.send('hello'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server is up at port : ${PORT}`))
