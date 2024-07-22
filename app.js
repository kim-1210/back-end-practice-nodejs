"use strict";

const cors = require('cors');
const express = require('express')

const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

const home = require('./routes/home') //라우팅
app.use('/', home); //use -> middle ware를 등록해주는 메소드

app.set("views", "./views"); //보여지는 뷰 위치
app.set("view engine", "ejs"); //html 코드의 확장명


module.exports = app;