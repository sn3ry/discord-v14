const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')
const Database = require('../../database/user.controller')

module.exports = {
    name: 'balance',
    description: 'Посмотреть свой баланс',
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
     async execute(interaction, client) {
        if(interaction.options.getMember('пользователь') == null) {
           console.log(Database.getMoney(interaction.member.id)) 
        } 
     }
}