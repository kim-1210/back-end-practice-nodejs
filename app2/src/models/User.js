"use strict";

const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const users = UserStorage.getUsers('id', 'pw');
        if(users.id.includes(this.body.id)){
            const idx = users.id.indexOf(this.body.id);
            if(users.pw[idx] == this.body.pw){
                return {message : '로그인 하셨습니다.', result : true}
            }
        }
        return {message : '로그인에 실패하셨습니다.', result : false}
    }
}

module.exports = User;