"use strict";

const Userfunc = require('../../models/User');

const show = {
    home : (req, res) => {
        res.render('home/login');
    },
    after_login : (req, res) =>{
        res.render('home/next')
    },
    register : (req, res) =>{
        res.render('home/register')
    },
}

const func = {
    login_check : async (req, res) => {
        const user_func = new Userfunc(req.body);
        return res.json(await user_func.login())
    },
    register_save : async (req, res) =>{
        const user_func = new Userfunc(req.body);
        var result = await user_func.setUser()
        return res.json(result);
    }
}


module.exports = {
    show,
    func,
};