const {Client, ChatInputCommandInteraction, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require('discord.js')

module.exports = {
    name: 'staff',
    description: 'Заявки на стафф',
    category: 'Developer',

    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

     async execute (interaction, client) {
        const menu = new ActionRowBuilder()
        .addComponents(new SelectMenuBuilder()
        .setCustomId('staff')
        .setPlaceholder('💙 Выберите должность...')
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions(
            {
            label: 'Набор в модераторы',
            value: 'page_1',
            emoji: '⚔️',
            },
            {
            label: 'Набор в cаппорты',
            value: 'page_2',
            emoji: '🔑',
            },
            {
            label: 'Набор в ивентеры',
            value: 'page_3',
            emoji: '🎯',
            },
            {
            label: 'Набор в клозеры',
            value: 'page_4',
            emoji: '🎮',
            },
        
        ));
            interaction.reply({
                content: 'Вы успешно отправили заявки на стафф',
                ephemeral: true
            })
       interaction.channel.send({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Набор в команду нашего сервера! аватарка`)
                .setDescription(`> Ты проводишь время на нашем сервере и хочешь попробовать стать частью **нашей команды**?
                > Нажав на кнопку ниже, ты можешь выбрать одну из ролей нашей команды и узнать о ней подробнее, а также подать свою **заявку**!`)
                .setColor('#2B92C5')
                .setImage(`https://i.pinimg.com/originals/e5/ef/33/e5ef337e8073a1b7109c20b4f35085f4.gif`)
            ],
            components: [menu]
        })
       
    }}