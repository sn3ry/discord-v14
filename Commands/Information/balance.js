const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')
const db = require('../../database/user.controller')


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

            async execute (interaction, client) {
                let user = interaction.options.getUser('пользователь').id
                let coins = db.getMoney(`${user}`)
                console.log(coins)
            }
    }