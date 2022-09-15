const {Client, ChatInputCommandInteraction, EmbedBuilder, Guild, GuildMember} = require('discord.js');
const { guilds } = require('../../Structures/main');
const avatar = require('./avatar');

module.exports = {
    name: 'sava',
    description: 'Посмотреть свою автарку на сервере',
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
        


        if(interaction.options.getUser('пользователь') == null) {
           
           
            if(interaction.member.avatar == undefined) {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Ваша аватарка на сервере`)
                    .setDescription(`<@${interaction.user.id}>, у Вас **нет** аватарки **на сервере**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                ],
                ephemeral: false
                
            })
           } else{
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Ваша аватарка на сервере`)
                    .setDescription(`<@${interaction.user.id}>, это Ваша **аватарка** на сервере`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                    .setImage(interaction.member.displayAvatarURL({ dynamic: true, size: 4096 }))
                ],
                ephemeral: false
                
            })
           }
        } else {
            let member = interaction.options.getUser('пользователь')
            let avatar = await interaction.guild.members.fetch(interaction.options.getUser('пользователь').id);

            if(avatar.avatar == null) {
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Аватарка пользователя ${member.tag} на сервере`)
                        .setDescription(`<@${interaction.user.id}>, у пользователя ${member} **нет** аватарки **на сервере**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                    ],
                    ephemeral: false
                    
                })
            }
            
              else  interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Аватарка пользователя ${member.tag}`)
                        .setDescription(`<@${interaction.user.id}>, это **аватарка** пользователя ${member}`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                        .setImage(avatar.displayAvatarURL({ dynamic: true, size: 4096 }))
                    ],
                    ephemeral: false
                    
                })
        }
     }
}
