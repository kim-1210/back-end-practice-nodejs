"use strict";

const { error } = require('console');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'node_user',
    password : '12344',
    database : 'userDB'
});

connection.connect();

class UserStorage {

    static getUsers(data) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user_info WHERE ID = ? AND PW = ?`, [data.id, data.pw], (error, rows, fields) => {
                if (error) {
                    reject(error);
                } else {
                    console.log('결과 : ', rows);
                    resolve(rows);
                }
            });
        });
    }

    static setUser(input_data) {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO user_info (ID, PW) VALUES (?, ?)`, [input_data.id, input_data.pw], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ result: true, message: '회원가입 되셨습니다.' });
                }
            });
        });
    }
}

module.exports = UserStorage;