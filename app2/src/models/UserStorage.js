"use strict";

const { error } = require('console');

const fs = require('fs').promises;

class UserStorage {

    static getUsers(...fields) {
        return fs.readFile('src/databases/userDB/users.json')
            .then((data) => {
                const users = JSON.parse(data);
                console.log('확인 : ', users);
                const newUsers = fields.reduce((newUsers, field) => {
                    if (users.hasOwnProperty(field)) {
                        newUsers[field] = users[field];
                    }
                    return newUsers;
                }, {});
                return newUsers;
            })
            .catch((error) => console.log('error : ' + error))
    }

    static setUser(input_data) {
        return fs.readFile('src/databases/userDB/users.json')
            .then((data) => {
                const users = JSON.parse(data);
                users['id'].push(input_data.id);
                users['pw'].push(input_data.pw);
                fs.writeFile('src/databases/userDB/users.json', JSON.stringify(users))
                console.log('추가 : ', users);
                return { result: true, message: '저장되었습니다.' }
            })
            .catch((error) => console.log('error : ' + error))
    }
}

module.exports = UserStorage;