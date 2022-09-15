const {Client, ChatInputCommandInteraction, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder} = require('discord.js')

module.exports = {
    name: 'memory',
    description: 'Памятка сервера',
    category: 'Developer',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {
        const menu = new SelectMenuBuilder()
        .setCustomId('memory')
        .setMinValues(1)
        .setMaxValues(1)
        .setPlaceholder('Выбрать категорию')
        .setOptions( new SelectMenuOptionBuilder({
            label: 'Серверные роли',
            value: 'page_1',
            
            }), new SelectMenuOptionBuilder({
            label: 'Команды',
            value: 'page_2',

            }),
            new SelectMenuOptionBuilder({
            label: 'Команда сервера',
            value: 'page_3',
                                
            }),
            new SelectMenuOptionBuilder({
            label: 'Уведомления',
            value: 'page_4',
                                    
            }),
                    
        
     );
           await interaction.reply({content:"Памятка сервера отправлена",ephemeral: true})
       await interaction.channel.send({
            embeds: [
                new EmbedBuilder()
                .setTitle(`<:lounge:1019800466953089064> ・ Памятка сервера`)
                .setDescription(`Выберите категорию, используя меню ниже:\n\n・**Серверные роли** — информация о ролях сервера.\n・**Команды** — информация по основным командам сервера.\n・**Команда сервера** — ответственные за отдельные ветки на сервере.\n・**Уведомления** — уведомлений об ивентах или клозах`)
                .setImage('https://acegif.com/wp-content/uploads/gifs/book-62.gif')
                .setColor('#36393F')
            ],
            components: [new ActionRowBuilder().addComponents(menu)]
        })
     
        }
       
    }