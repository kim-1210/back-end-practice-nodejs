"use strict";

const Userfunc = require('../../models/User');

const show = {
    home : (req, res) => {
        res.render('home/login');
    },
    after_login : (req, res) =>{
        res.render('home/next')
    },
}

const func = {
    login_check : (req, res) => {
        const user_func = new Userfunc(req.body);
        res.json(user_func.login())
    },
}


module.exports = {
    show,
    func,
};