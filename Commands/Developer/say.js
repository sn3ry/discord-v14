const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType} = require('discord.js')
const db = require('../../database/user.controller')
module.exports = {
    name: 'say',
    description: 'Отправка сообщения от бота',
    Permissions: ["ADMINISTRATOR"],
    options: [
        {
            name: 'message',
            description: 'Сообщение которое нужно отправить',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    category: 'Developer',
    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {

	try{
        const option = interaction.options.getString('message');
        const embed = JSON.parse(option);
        console.log(typeof embed);
        if(typeof embed !== "object"){
            throw new Error("dolbaeb is detected")
        }
        interaction.channel.send({ embeds: [embed] });
        interaction.reply({content: "Вот ваше сообщение:", ephemeral: true})
    }catch(error){
        interaction.channel.send({ content:  interaction.options.getString('message')})
     }}}