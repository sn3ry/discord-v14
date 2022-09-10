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
        const updatePerson = await db.query(`SELECT coins FROM users WHERE user_id = $1;`,[user]);
    }
    async getMoney(user) {

        console.log(user);
        const getMoney = await db.query(`SELECT coins FROM users WHERE user_id = $1;`,[user]);
        return getMoney.rows[0].coins;
        
}
    async updateTime(user){
        await db.query(`UPDATE users SET timely = DEFAULT WHERE user_id = $1;`,[user])

        const getMoney = await db.query(`SELECT * FROM users WHERE user_id = $1;`,[user]);
        const money = await db.query(`SELECT * from economy WHERE id = $1;`,[getMoney.rows[0].id]);
        return money.rows[0].money;

       


    }
    async getTime(user){
        const s = await db.query(`SELECT * from users;`);
        console.log(s);
    }


}
module.exports = new UserController();