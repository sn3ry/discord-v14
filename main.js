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

console.log(userController.createUser("101203123123123516"));
client.login(client.config.token)