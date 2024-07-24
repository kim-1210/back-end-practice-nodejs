"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl') //기능 설정

router.get('/', ctrl.show.home);
router.get('/after_login', ctrl.show.after_login);
router.get('/register', ctrl.show.register);

router.post('/login_check', ctrl.func.login_check);
router.post('/register_save', ctrl.func.register_save);

module.exports = router; //외부로 내보내기