const db = require("./database")
class UserController {
    async createUser(user){
       const newPerson = await db.query(`SELECT EXISTS (SELECT * FROM users WHERE user_id = $1);`,[user]).then()
        if(!newPerson.rows[0].exists){
            await db.query(`INSERT INTO users(user_id) values ($1);`, [user]);
            await db.query(`INSERT INTO economy(money) values ($1);`, [0]);
        }else{
            console.log("Этот пользователь уже в базе данных")
        }
    }
    async getUsers(req,res){

    }
    async getOneUsers(req,res){

    }
    async updateUser(req,res){

    }
    async updateMoney(user,count){
        const updatePerson = await db.query(`SELECT * FROM users WHERE user_id = $1;`,[user]);
        await db.query(`UPDATE economy SET money = $1 WHERE id = $2;`, [count, updatePerson.rows[0].id,]);
        console.log("ok");
    }


}
module.exports = new UserController();