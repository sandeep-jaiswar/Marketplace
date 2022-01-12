const cluster = require('cluster');
if(cluster.isMaster){
  cluster.fork();
  cluster.fork();
}else{
  const express = require('express');
  const connectDB = require('./config/database');
  const cookieSession = require('cookie-session');
  const passport = require('passport');
  const bodyParser = require('body-parser');
  const rootRoute = require('./routes/api');
  const cors = require('cors');
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: '123123123'
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  connectDB();
  app.use('/api',rootRoute);
  const PORT = process.env.PORT || 8080;
  app.listen(PORT,()=>{
    console.log(`server is up at port : ${PORT}`);
  })
}


