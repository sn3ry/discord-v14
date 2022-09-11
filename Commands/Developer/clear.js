const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'clear',
    description: 'Удалить сообщения',
    Permissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: 'количество',
            description: 'сколько хотите удалить (макс. 99)',
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
            if(amount == 1) {
                const messages = await interaction.channel.messages.fetch({limit: amount})
                const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms('14 days')); 
                await interaction.channel.bulkDelete(filtered)
                
                interaction.reply ({
                    content: `Вы удалили сообщение.`,
                    ephemeral: true
                }) 
            } else if(amount < 5) {
                const messages = await interaction.channel.messages.fetch({limit: amount})
                const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms('14 days')); 
                await interaction.channel.bulkDelete(filtered)
                
                interaction.reply ({
                    content: `Вы удалили ${filtered.size} сообщения.`,
                    ephemeral: true
                })
            } else {
                const messages = await interaction.channel.messages.fetch({limit: amount})
                const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms('14 days')); 
                await interaction.channel.bulkDelete(filtered)
                
                interaction.reply ({
                    content: `Вы удалили ${filtered.size} сообщений.`,
                    ephemeral: true
                })
            }
        
        }
} 
