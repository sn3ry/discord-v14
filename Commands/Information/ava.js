const {Client, ChatInputCommandInteraction, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder, createComponentBuilder} = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'ava',
    description: 'Посмотреть свою аватарку или баннер',
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

        const avatar_null = new SelectMenuBuilder()
        .setCustomId('avatar_null')
        .setMinValues(1)
        .setMaxValues(1)
        .setPlaceholder('Автарка в профиле')
        .setOptions( new SelectMenuOptionBuilder({
            label: 'Автарка в профиле',
            description: 'Посмотреть основную аватарку',
            value: 'page_1',
            }), new SelectMenuOptionBuilder({
            label: 'Аватарка на сервере',
            description: 'Посмотреть аватарку на сервере',
            value: 'page_2',
            }), new SelectMenuOptionBuilder({
            label: 'Баннер',
            description: 'Посмотреть основной баннер',
            value: 'page_3',
            })
        
     );    



        const avatar = new SelectMenuBuilder()
        .setCustomId('avatar')
        .setMinValues(1)
        .setMaxValues(1)
        .setPlaceholder('Автарка в профиле')
        .setOptions( new SelectMenuOptionBuilder({
            label: 'Автарка в профиле',
            description: 'Посмотреть основную аватарку',
            value: 'page_1',
            }), new SelectMenuOptionBuilder({
            label: 'Аватарка на сервере',
            description: 'Посмотреть аватарку на сервере',
            value: 'page_2',
            }), new SelectMenuOptionBuilder({
            label: 'Баннер',
            description: 'Посмотреть основной баннер',
            value: 'page_3',
            })
        
     );

     try {
        if (interaction.options.getUser('пользователь') !== null) { let avatarUser = await interaction.guild.members.fetch(interaction.options.getUser('пользователь').id);
        avatarUser = avatarUser.user
        let member = interaction.options.getUser('пользователь')
       await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Аватарка пользователя ${member.tag}`)
                .setDescription(`<@${interaction.user.id}>, это **аватарка** пользователя ${member}`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                .setImage(avatarUser.displayAvatarURL({dinamic: true, size: 4096}))
            ],
            components: [new ActionRowBuilder().addComponents(avatar)],
            ephemeral: false
            
        })
    }
    } catch(err)
    {   
        if(interaction.user.id == interaction.user.id) {
            let member = interaction.options.getUser('пользователь')
       await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Аватарка пользователя ${member.tag}`)
                .setDescription(`<@${interaction.user.id}>, пользователя <@${member.id}> **нет** на сервере, поэтому **не получится** посмотреть **аватарку**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
            ],
            ephemeral: true
            
        })
        }
    };





    if(interaction.options.getUser('пользователь') == null && interaction.user.id == interaction.user.id) {

       await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Ваша аватарка`)
                .setDescription(`<@${interaction.user.id}>, это Ваша **аватарка**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                .setImage(interaction.user.displayAvatarURL({dinamic: true, size: 4096}))
            ],
            components: [new ActionRowBuilder().addComponents(avatar_null)],
            ephemeral: false
            
        })
    }


    

}
   
       
    }