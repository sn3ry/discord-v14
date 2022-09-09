const { Client, GatewayIntentBits,  Partials, Collection } = require('discord.js');
/*const userController = require('../database/user.controller');*/
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
/*userController.createUser('288313836589678593')
console.log(Date.now());*/
client.login(client.config.token);