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
        if(interaction.user.id == '288313836589678593' || interaction.user.id == '343086478554824705' || interaction.member.roles.cache.has('1019253016970412095') || interaction.member.roles.cache.has('1019253443157839892')) // проверка на айди, чтобы использовать команды или роль
        {
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
        } else {
            interaction.reply({
                content: 'У Вас недостаточно прав для выполнения этой команды',
                ephemeral: true });
        }
        
        }
} 
