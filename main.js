const { Client, GatewayIntentBits,  Partials, Collection } = require('discord.js');
const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember} = Partials;
const client = new Client({
    intents: [Guilds, GuildMembers],
    partials: [User, Message, GuildMember, ThreadMember],
});

const {loadEvents} = require("./Handlers/eventHandler");

client.config = require('./config.json');
client.events = new Collection();

loadEvents(client);



client.login(client.config.token)