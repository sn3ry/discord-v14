const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')


module.exports = {
    name: 'ping',
    description: 'Check ping',
    category: 'Information',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

    async execute(interaction, client) {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setColor('Red')
                .setDescription(`Tik Now: ${client.ws.ping} ms`)
            ],
            ephemeral: false
        })
    }
}
