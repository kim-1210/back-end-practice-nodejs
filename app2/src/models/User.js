"use strict";

const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }
    async login(){
        const users = await UserStorage.getUsers('id', 'pw');
        if(users.id.includes(this.body.id)){
            const idx = users.id.indexOf(this.body.id);
            if(users.pw[idx] == this.body.pw){
                return {message : '로그인 하셨습니다.', result : true}
            }
        }
        return {message : '로그인에 실패하셨습니다.', result : false}
    }
    async setUser(){
        const user_info = await UserStorage.getUsers('id', 'pw');
        if(!user_info.id.includes(this.body.id)){
            const return_msg = await UserStorage.setUser(this.body);
            return return_msg;
        }
        return {result : false, message : '이미 등록된 아이디 입니다.'};
    }
}

module.exports = User;