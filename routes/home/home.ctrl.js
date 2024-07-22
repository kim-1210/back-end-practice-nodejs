"use strict";

const home = (req, res) => {
    res.render('home/login');
};

const login_check = (req, res) => {
    const {id, pw} = req.body;
    console.log(`${id}, ${pw}`)
    if(id == 'kim' && pw == '1234'){
        res.json({message : '로그인되었습니다.'})
    }
    else{
        res.json({message : '로그인에 실패했습니다.'})
    }
};

module.exports = {
    home,
    login_check,
};