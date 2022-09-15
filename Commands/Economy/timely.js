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
      let a = await db.getTime(interaction.user.id);
      let date = Date.now() - a;  //
      //4320000 - 12 часов
      if(date > 43200000 || a == 43200000){
       await db.updateTime(interaction.user.id, Date.now());
        let count = 30;
        if (interaction.member.roles.cache.has('1019052909872283758') && interaction.member.roles.cache.has('1019039246620839988')){ //plus and staff
          count = 35;
          console.log(count);
        }
        if (interaction.member.roles.cache.has('1019052909872283758')){ //plus 1019052909872283758
          count *= 2;
          console.log(count);
        }
        else if(interaction.member.roles.cache.has('1019052893501935666')){ //gold 1019052893501935666
          count *= 4;
          console.log(count);
        }
        else if(interaction.member.roles.cache.has('1019052872400384011')){ // platinum 1019052872400384011 
          count *= 5;
          console.log(count);
        }
        else if(interaction.member.roles.cache.has('1019052834123169832')){ //diamond 1019052834123169832
          count *= 10;
          console.log(count);
        }
        else if(interaction.member.roles.cache.has('1019039246620839988')){ //staff 1019039246620839988 and !plus
          count = 70
        }
        let authorCoins = +await db.getMoney(`${interaction.user.id}`);
        
        let = resultCoins = count;

        count += authorCoins;


       await db.updateMoney(interaction.user.id,count);
       return interaction.reply ({
          embeds: [
              new EmbedBuilder()
              .setTitle(`Временные награды`)
              .setDescription(`<@${interaction.user.id}>, Вы **забрали свои** ${resultCoins} :coin:. Возвращайтесь ${date}`)
              .setColor('#36393F')
              .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
          ],
          ephemeral: false
      })
      
      }
     else{
      let ost = new Date(43200000 - date - 10800000);
      return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Временные награды`)
            .setDescription(`<@${interaction.user.id}>, Вы **уже** забрали **временную** награду! Вы можете **получить** следующую через **${ost.getHours()}** часов, **${ost.getMinutes()}** минут, **${ost.getSeconds()}** секунд`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })}}}
