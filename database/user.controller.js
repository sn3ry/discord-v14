const db = require("./database")
class UserController {
    async createUser(user){
       const newPerson = await db.query(`SELECT EXISTS (SELECT * FROM users WHERE user_id = $1);`,[user])
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
    async getMoney(user) {
        console.log(user)
        const getMoney = await db.query(`SELECT * FROM users WHERE user_id = $1;`,[user]);
        const money = await db.query(`SELECT * from economy WHERE id = $1;`,[getMoney.rows[0].id]);
        const result = money.rows[0].money;
        console.log(result, typeof(result));
        return result;

       


    }

}
module.exports = new UserController();