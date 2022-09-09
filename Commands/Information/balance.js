const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')
const database = require('../../database/user.controller')


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

        console
        if(interaction.options.getMember('пользователь') == null) {
            console.log(interaction.member.id);
           console.log(database.getMoney(`${interaction.member.id}`)) 

        if(interaction.options.getMember('пользователь') == null) {
           console.log(database.getMoney(interaction.member.id)) 
        } 
     }
}}