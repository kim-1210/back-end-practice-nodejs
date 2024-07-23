"use strict";

class UserStorage{
    static #user_information = {
        id : ['kim', 'Dae', 'Young'],
        pw : ['1234', '1234', '1234'],
    };

    static getUsers(...fields){
        const users = this.#user_information;
        const newUsers = fields.reduce((newUsers, field) =>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }
}

module.exports = UserStorage;