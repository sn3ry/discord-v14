const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')
const db = require('../../database/user.controller')

module.exports = {
    name: 'timely',
    description: 'Получить временную награду',
    category: 'Information',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {

      let a = await db.getTime(`${interaction.user.id}`);
      let time = parseInt(new Date(`${a}`).getTime() / 1000).toFixed(0);
      console.log(time);
      db.updateTime(interaction.user.id);

        
        let check 

     }
}     