const {Client, ChatInputCommandInteraction, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder} = require('discord.js')

module.exports = {
    name: 'staff',
    description: 'Заявки на стафф',
    category: 'Developer',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {
        
        if(interaction.user.id == '987649071835676672' || interaction.user.id == '343086478554824705' || interaction.member.roles.cache.has('1016795426982219837') || interaction.member.roles.cache.has('1019253443157839892')) // проверка на айди, чтобы использовать команды или роль
        {
            const menu = new SelectMenuBuilder()
        .setCustomId('staff')
        .setMinValues(1)
        .setMaxValues(1)
        .setPlaceholder('📌 Выберите должность...')
        .setOptions( new SelectMenuOptionBuilder({
            label: 'Набор в модераторы',
            value: 'page_1',
            emoji: {
                name: `moderator`,
                id: `1019777508427702313`,
            },
            }), new SelectMenuOptionBuilder({
            label: 'Набор в cаппорты',
            value: 'page_2',
            emoji: {
                name: `support`,
                id: `1019777507064557639`,
            },
            }), new SelectMenuOptionBuilder({
            label: 'Набор в ивентеры',
            value: 'page_3',
            emoji: {
                name: `eventor`,
                id: `1019777505336512684`,
            },
            }), new SelectMenuOptionBuilder({
            label: 'Набор в клозеры',
            value: 'page_4',
            emoji: {
                name: `closer`,
                id: `1019777504136925224`,
            },
            }),
        
     );
        await interaction.reply({content:"Заявка на стафф отправлена",ephemeral: true})
        await interaction.channel.send({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Набор в команду нашего сервера!`)
                .setDescription(`> Ты проводишь время на нашем сервере и хочешь попробовать стать частью **нашей команды**?
                > Нажав на кнопку ниже, ты можешь выбрать одну из ролей нашей команды и узнать о ней подробнее, а также подать свою **заявку**!`)
                .setColor('#4B5BB6')
                .setImage(`https://cdn.discordapp.com/attachments/1012035499688464494/1019879748131897384/animesher.com_scenery-gif-gif-anime-gif-1171714.gif`)
            ],
            components: [new ActionRowBuilder().addComponents(menu)]
        
        })
        } else {
            interaction.reply({
                content: 'У Вас недостаточно прав для выполнения этой команды',
                ephemeral: true });
        }
     
        }
       
    }