const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType} = require('discord.js')
const db = require('../../database/user.controller')


module.exports = {
    name: 'award',
    description: 'Выдать коины пользователю',
    options: [
        {
            name: 'количество',
            description: 'Сколько вы хотите выдать',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'пользователь',
            description: 'Кому вы хотите выдать',
            type: ApplicationCommandOptionType.User,
            required: true
        },
    ],
    category: 'Information',
    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
     async execute (interaction, client) {
            let user = interaction.options.getUser('пользователь').id; // информация юзера с бд - айди
            let coins = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // информация юзера с бд - коины

                let embedCoins = interaction.options.getString('количество'); // количество сколько забрали у юзера для эмбеда
                let awardCoins = +interaction.options.getString('количество'); // количество сколько забрали у юзера для суммы 

            awardCoins += coins; // формула вычытания коинов

            await db.updateMoney(user, awardCoins); // вывод

            

            interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** коины пользователю. Теперь у пользователя ${awardCoins} :coin:`)
                    .setColor('#36393F')
                    .addFields(
                        {name: '**Пользователь:**', value: `<@${interaction.options.getUser('пользователь').id}>` ,inline: true},
                        {name: '**Количестно:**', value: `${embedCoins} :coin:` ,inline: true},
                        )
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
     }
}