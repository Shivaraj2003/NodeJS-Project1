const express = require("express");
const userRouter = require('./routes/user');
const connectMongodb = require('./connection');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
const url = 'mongodb://127.0.0.1:27017/MeanJS';


//connection
connectMongodb(url);

app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter);

app.listen(port, () => console.log("Server started in port",port));
