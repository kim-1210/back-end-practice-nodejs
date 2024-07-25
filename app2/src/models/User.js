"use strict";

const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }
    async login(){
        const user = await UserStorage.getUsers(this.body);
        console.log('hmm.... ', user)
        if (user.length > 0){
            return {message : '로그인 하셨습니다.', result : true}
        }
        return {message : '로그인에 실패하셨습니다.', result : false}
    }
    async setUser(){
        const user = await UserStorage.getUsers(this.body);
        if(user.length == 0){
            const return_msg = await UserStorage.setUser(this.body);
            return return_msg;
        }
        return {result : false, message : '이미 등록된 아이디 입니다.'};
    }
}

module.exports = User;