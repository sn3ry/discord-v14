const db = require("./database")
class UserController {
    async createUser(user){
        const newPerson = await db.query(`SELECT EXISTS (SELECT * FROM users WHERE user_id = $1);`,[user]);
        console.log(newPerson.rows[0].exists)
    }
    async getUsers(req,res){

    }
    async getOneUsers(req,res){

    }
    async updateUser(req,res){

    }


}
module.exports = new UserController();