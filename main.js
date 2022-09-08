const { Client, GatewayIntentBits,  Partials, Collection } = require('discord.js');
const userController = require('./database/user.controller');
const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember} = Partials;
const client = new Client({
    intents: [Guilds, GuildMembers],
    partials: [User, Message, GuildMember, ThreadMember],
});

const {loadEvents} = require("./Handlers/eventHandler");

client.config = require('./config.json');
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);
userController.createUser('1')
console.log(Date.now());
client.login(client.config.token);
//for(let i = 0;i < 300000;){
  //  String(i);
    //console.log(typeof i)
    //userController.createUser(i);
   
    //console.log(typeof i)
  //  i++;
   // console.log(i);
//}