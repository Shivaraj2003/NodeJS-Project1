const express = require("express");
const userRouter = require('./routes/user');
const connectMongodb = require('./connection');

const app = express();
const port = 8000;
const url = 'mongodb://127.0.0.1:27017/MeanJS';


//connection
connectMongodb(url);

//Schema
//Model

app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter);

app.listen(port, () => console.log("Server started in port",port));
