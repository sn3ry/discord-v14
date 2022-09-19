const { SlashCommandSubcommandBuilder } = require("discord.js");
const db = require("./database")
class UserController {
    async createUser(user){
       const newPerson = await db.query(`SELECT EXISTS (SELECT * FROM users WHERE user_id = $1);`,[user])
        if(!newPerson.rows[0].exists){
            await db.query(`INSERT INTO users(user_id,coins) values ($1,$2);`, [user,0]);
        }else{
            console.log("Этот пользователь уже в базе данных");
        }
    }
    async getUsers(req,res){

    }
    async getOneUsers(req,res){

    }
    async updateUser(req,res){

    }
    async updateMoney(user,count){
        await db.query(`UPDATE users SET coins = $1 WHERE user_id = $2;`,[count,user])
        
    }
    async getMoney(user) {

        const coins = await db.query(`SELECT coins FROM users WHERE user_id = $1;`,[user]);
        return coins.rows[0].coins;
        
}
    async updateTime(user,time){
        await db.query(`UPDATE users SET timely = $1 WHERE user_id = $2;`,[time,user])

    }
    async getTime(user){
        const s = await db.query(`SELECT timely from users where user_id=$1;`,[user]);
        let result = +s.rows[0].timely;
        return result;
        
    }


}
module.exports = new UserController();