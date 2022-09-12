const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js');
const db = require('../../database/user.controller')
const ms = require('ms')

module.exports = {
    name: 'timely',
    description: 'Получить временную награду',
    category: 'Economy',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {
      /*let a = await db.getTime(interaction.user.id);
      let date = ms(43200000-(Date.now() - a));
      let ost = ms(a - 43200000);
      console.log(a,date);
      if(date > 43200000 || a == 43200000){
        await db.updateMoney(interaction.user.id, 30);
        await db.updateTime(interaction.user.id, Date.now());*/
        /*return interaction.reply ({
          embeds: [
              new EmbedBuilder()
              .setTitle(`date`)
              .setDescription(`<@${interaction.user.id}>, Вы **забрали** свои 30 :coin:. Возвращайтесь \`\`через 12 часов\`\``)
              .setColor('#36393F')
              .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
          ],
          ephemeral: false
      })
      
      }*/
     /*else{
      await db.updateTime(interaction.user.id, Date.now());
      return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`date`)
            .setDescription(`<@${interaction.user.id}>, Вы **уже** забрали **временную** награду! Вы можете получить следующую <t:${ost}>`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
      
     }*/
    
    const check = await db.getTime(interaction.user.id);
    const timeout = 43200000;
     if (check !== null && timeout - (Date.now()- check)){
        const timeLeft = ms(timeout - (Date.now()- check))
        let timekd = (Date.now() - check);
        if(timeLeft > 0) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Временная награда`)
                    .setDescription(`<@${interaction.user.id}>, Вы **уже** забрали **временную** награду! Вы можете получить следующую <t:${timekd}>`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            }) 
        } else {
            await db.updateMoney(interaction.user.id, 30);
            await db.updateTime(interaction.user.id, Date.now());
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Временная награда`)
                .setDescription(`<@${interaction.user.id}>, Вы **забрали** свои 30 :coin:. Возвращайтесь <t:${timekd}>`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
            ],
            ephemeral: false
        })
        }
        
        
     }

    
    
    }}