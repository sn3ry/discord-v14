const {Client, ChatInputCommandInteraction} = require('discord.js')
const Reply = require('../../Systems/Reply')

module.exports = {
    name: 'ping',
    description: 'Check ping',
    category: 'Information',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

    async execute(interaction, client) {

        return Reply(interaction, 'Tik', `Now: ${client.ws.ping} ms`, false)
    }
}