const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'banner',
    description: 'Посмотреть свой баннер',
    options: [
        {
            name: 'пользователь',
            description: 'Или чужой',
            type: 6,
            required: false
        }
    ],
    category: 'Information',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {
    
            console.log(interaction.member)
        if(interaction.options.getUser('пользователь') == null) {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Ваша аватарка`)
                    .setDescription(`<@${interaction.user.id}>, это Ваша **аватарка**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                    .setImage(`https://cdn.discordapp.com/banners/${interaction.member.id}/eaf951e684da10139b73f0277c2dec0b.png?size=1024`)
                ],
                ephemeral: false
                
            })
        } else {
            let member = interaction.options.getUser('пользователь')
            let avatar = await interaction.guild.members.fetch(interaction.options.getUser('пользователь').id);
            avatar = avatar.user
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Аватарка пользователя ${member.tag}`)
                    .setDescription(`<@${interaction.user.id}>, это **аватарка** пользователя ${member}`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                ],
                ephemeral: false
                
            })
        }
     }
}
