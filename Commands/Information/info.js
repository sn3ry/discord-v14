const {Client, ChatInputCommandInteraction, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder} = require('discord.js')

module.exports = {
    name: 'info',
    description: 'Информация сервера',
    category: 'Information',

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
            label: 'Основные команды',
            value: 'page_2',

            }),
            new SelectMenuOptionBuilder({
            label: 'Экономика',
            value: 'page_3',
                                
            }),
            new SelectMenuOptionBuilder({
            label: 'Магазин',
            value: 'page_4',
                                
            }),
        
            new SelectMenuOptionBuilder({
            label: 'Личные комнаты',
            value: 'page_5',
                                
            }),
            
            new SelectMenuOptionBuilder({
            label: 'Отношения',
            value: 'page_6',
                                
            }),
            new SelectMenuOptionBuilder({
            label: 'Инвентарь',
            value: 'page_7',
                                
            }),
            new SelectMenuOptionBuilder({
            label: 'Дуэли',
            value: 'page_8',
                                
            }),
            new SelectMenuOptionBuilder({
            label: 'Музыкальный бот',
            value: 'page_9',
                                
            }),
            new SelectMenuOptionBuilder({
            label: 'Команда сервера',
            value: 'page_10',
                                
            }),
            new SelectMenuOptionBuilder({
            label: 'Уведомления',
            value: 'page_11',
                                    
            }),
                    
        
     );
       await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(`<:lounge:1019800466953089064> ・ Памятка сервера`)
                .setDescription(`Выберите категорию, используя меню ниже:\n\n・**Серверные роли** — информация о ролях сервера.\n・**Основные команды** — информация по основным командам.\n・**Экономика** — команды для **получения** и **переводов** серверной валюты.\n・**Магазин** — команды для **создание** и **покупки** ролей на сервере.\n・**Личные комнаты** — команды для **управления** и **просмотра** личных комнат.\n・**Отношения** — создание **любовной комнаты** и **управление** ей.\n・**Инвентарь** — **просмотр** и **скрытие** ролей\n・**Дуэли** — команды для развлечения.\n・**Музыкальные боты** — команды музыкальных ботов\n・**Команда сервера** — ответственные за отдельные ветки на сервере.\n・**Уведомления** — уведомления об ивентах или клозах.`)
                .setImage('https://acegif.com/wp-content/uploads/gifs/book-62.gif')
                .setColor('#36393F')
            ],
            ephemeral: true,
            components: [new ActionRowBuilder().addComponents(menu)]
        })
        
     
        }
       
    }