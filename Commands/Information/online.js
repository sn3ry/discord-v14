const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')
const db = require('../../database/user.controller');

module.exports = {
    name: 'online',
    description: 'Посмотреть свой голосовой онлайн',
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
        if(interaction.options.getUser('пользователь') == null) {
            let authorTimeDay = await db.getVoiceDay(`${interaction.user.id}`);
            let authorTime = await db.getVoiceTime(`${interaction.user.id}`);

            return interaction.reply({
                embeds:[
                    new EmbedBuilder()
                    .setDescription(`онлайн время дня: ${authorTimeDay} общее: ${authorTime}`)
                ],
                epheremal: false
            })
        } else {
            let timeDay = await db.getVoiceDay(`${interaction.options.getUser(`пользователь`)}`);
            let time = await db.getVoiceTime(`${interaction.options.getUser(`пользователь`)}`);

            return interaction.reply({
                embeds:[
                    new EmbedBuilder()
                    .setDescription(`онлайн время дня: ${timeDay} общее: ${time}`)
                ],
                epheremal: false
            })
        }
}}