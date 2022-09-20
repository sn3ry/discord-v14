const { Client, GatewayIntentBits,  Partials, Collection } = require('discord.js');
const userController = require('../database/user.controller');
const { promisify } = require('util');
const {glob} = require('glob');
const PG = promisify(glob);
const Ascii = require('ascii-table');
require('dotenv').config()
const {Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent} = Partials;
const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent],
    allowedMentions: {parse: [ 'everyone', 'roles', 'users']},
});

client.events = new Collection()
client.commands = new Collection()

const Handlers = ['Events', 'Commands']

Handlers.forEach(handlers => {
    require(`../Handlers/${handlers}`)(client, PG, Ascii)
})

client.config = require('../config.json');

module.exports = client

userController.createUser('343086478554824705');

function time(){
    let now = Date.now();
    let date_object = new Date();
    date_object.setDate(date_object.getDate() + 1);
    date_object.setHours(01);
    date_object.setMinutes(0);
    date_object.setSeconds(0);
    console.log(date_object);
    console.log((date_object.getTime() - now) /1000)
    return date_object.getTime() - now;
}
console.log(time())
// повторить с интервалом 2 секунды
let timerId = setTimeout(() => 
    userController.updateVoiceDay(),
    console.log("первый интервал"), time()/1000);

// остановить вывод через 5 секунд
setTimeout(() => { clearTimeout(timerId); setInterval(() => 
    userController.updateVoiceDay(),
    console.log("второй"), 86400);; }, time()/1000);


//userController.getMoney('851530670581088276');

/*userController.createUser('851530670581088276');
userController.getMoney('851530670581088276');*/

client.login(client.config.token);