"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl') //기능 설정

router.get('/', ctrl.home);

module.exports = router; //외부로 내보내기