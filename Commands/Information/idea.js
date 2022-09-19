const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType} = require('discord.js')


module.exports = {
    name: 'idea',
    description: 'Предложить свою идею',
    options: [
        {
            name: 'идея',
            description: 'Расскажите о своей идее',
            type: ApplicationCommandOptionType.String,
            min_length: 10,
            required: true
        }
    ],
    category: 'Information',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {
        let message = interaction.options.getString('идея')
        let idChannel = `1020277817142935612` // айди канала, куда будет приходить
      
        await interaction.reply({embeds: [
            new EmbedBuilder()
            .setTitle(`Подать идею`)
            .setDescription(`<@${interaction.user.id}>, Вы успешно подали **идею**. Спасибо Вам!`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))

        ]})
       return interaction.guild.channels.cache.get(idChannel).send({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Идея`)
            .setDescription(`**Предложил идею:**\n<@${interaction.user.id}> **[${interaction.user.tag}]**\n\n**Предложение:**\n${message}`)
            .setColor('#36393F')
        ]
       })
}}