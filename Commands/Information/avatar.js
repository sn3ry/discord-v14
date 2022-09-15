const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Посмотреть свою автарку',
    options: [
        {
            name: 'пользователь',
            description: 'Или чужую',
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
        try {
            a = await interaction.guild.members.fetch(interaction.options.getUser('пользователь').id);
            console.log(a)
            a = a.user;
        } catch(err)
        { 
           return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Ваша аватарка`)
                    .setDescription(`<@${interaction.user.id}>, это Ваша **аватарка**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                    .setImage(interaction.user.displayAvatarURL({dinamic: true, size: 512}))
                ],
                ephemeral: false
                
            })
        };
        
        if(interaction.options.getUser('пользователь') == null) {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Ваша аватарка`)
                    .setDescription(`<@${interaction.user.id}>, это Ваша **аватарка**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                    .setImage(interaction.user.displayAvatarURL({dinamic: true, size: 512}))
                ],
                ephemeral: false
                
            })
        } else {
            let member = interaction.options.getUser('пользователь');
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Аватарка пользователя ${member.tag}`)
                    .setDescription(`<@${interaction.user.id}>, это **аватарка** пользователя ${member}`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                    .setImage(member.displayAvatarURL({dinamic: true, size: 512}))
                ],
                ephemeral: false
                
            })
        }
     }
}
