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
         console.log(interaction)
        }
     
}
