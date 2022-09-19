const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType} = require('discord.js')


module.exports = {
    name: 'bug',
    description: 'Сообщить о баге',
    options: [
        {
            name: 'баг',
            description: 'Описание бага',
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
        let message = interaction.options.getString('баг')
        let idChannel = `1020277795450007553` // айди канала, куда будет приходить
      
        await interaction.reply({embeds: [
            new EmbedBuilder()
            .setTitle(`Сообщить о баге`)
            .setDescription(`<@${interaction.user.id}>, спасибо за **сообщение**, <@&848876539931656214> **напишет** Вам в **личные сообщения** через время по **этому** поводу`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
            .setFooter({ text: 'беспричинная отправка - ведет к наказанию'})

        ]})
       return interaction.guild.channels.cache.get(idChannel).send({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Сообщение о баге`)
            .setDescription(`**Сообщил о баге:**\n<@${interaction.user.id}> **[${interaction.user.tag}]**\n\n**Описание бага:**\n${message}`)
            .setColor('#36393F')
            .setThumbnail(`https://cdn.discordapp.com/attachments/1012035499688464494/1020287261759242260/848734980837474316.png`)
        ]
       })
}}