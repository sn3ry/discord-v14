const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType} = require('discord.js')
const db = require('../../database/user.controller')


module.exports = {
    name: 'award',
    description: 'Выдать коины пользователю',
    options: [
        {
            name: 'количество',
            description: 'Сколько вы хотите выдать',
            type: ApplicationCommandOptionType.Number,
            max_value: 1000000,
            min_value: 1,
            required: true
        },
        {
            name: 'пользователь',
            description: 'Кому вы хотите выдать',
            type: ApplicationCommandOptionType.User,
            required: true
        },
    ],
    category: 'Developer',
    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
     async execute (interaction, client) {
            let user = interaction.options.getUser('пользователь').id; // информация юзера с бд - айди
            let coins = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // информация юзера с бд - коины

                let embedCoins = interaction.options.getNumber('количество'); // количество сколько забрали у юзера для эмбеда
                let awardCoins = interaction.options.getNumber('количество'); // количество сколько забрали у юзера для суммы 

            awardCoins += coins; // формула вычытания коинов

            await db.updateMoney(user, awardCoins); // вывод

            

            interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${embedCoins} :coin: <@${interaction.options.getUser('пользователь').id}>. Теперь у пользователя ${awardCoins} :coin:.`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
     }

}