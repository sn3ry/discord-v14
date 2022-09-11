const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'clear',
    description: 'Удалить сообщения',
    Permissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: 'количество',
            description: 'сколько хотите удалить',
            max_value: 99,
            min_value: 1,
            type: ApplicationCommandOptionType.Integer,
            required: true
        }
    ],
    category: 'Developer',
    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {
        const amount = interaction.options.getInteger('количество');

        const messages = await interaction.channel.messages.fetch({limit: amount+1,})
        const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms('14 days')); 
        await interaction.channel.bulkDelete(filtered)
        
        interaction.reply ({
            content: 'Вы удалили сообщения.', /*${filtered.size}*/
            ephemeral: true
        }) 
        }
} 
