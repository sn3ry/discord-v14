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
        const s = await db.query(`SELECT timely from users WHERE user_id=$1;`,[user]);
        let result = +s.rows[0].timely;
        return result;
        
    }
    async updateVoiceTime(user,time){
        let a = await db.query(`SELECT voice_time_day from users WHERE user_id=$1;`, [user]);
        let b = await db.query(`SELECT voice_time from users WHERE user_id=$1;`, [user]);
        a = a.rows[0].voice_time_day;
        b = +b.rows[0].voice_time;
        await db.query(`UPDATE users SET voice_time_day = $1 WHERE user_id=$2;`, [a + 5,user]);
        await db.query(`UPDATE users SET voice_time = $1 WHERE user_id=$2;`, [b + 5,user]);
    }
    async updateVoiceDay(){
        await db.query(`UPDATE users SET voice_time_day = 0 WHERE voice_time_day <> 0`);
    }
    async getVoiceTime(user){
        let b = await db.query(`SELECT voice_time from users WHERE user_id=$1;`, [user]);
        let result = +b.rows[0].voice_time;
        return result;
    }
    async getVoiceDay(user){
        let a = await db.query(`SELECT voice_time_day from users WHERE user_id=$1;`, [user]);
        let result = a.rows[0].voice_time_day;
        return result;
    }


}
module.exports = new UserController();