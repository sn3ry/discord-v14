const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType} = require('discord.js')
const db = require('../../database/user.controller')


module.exports = {
    name: 'take',
    description: 'Забрать коины пользователю',
    options: [
        {
            name: 'количество',
            description: 'Сколько вы хотите забрать',
            type: ApplicationCommandOptionType.Number,
            required: true
        },
        {
            name: 'пользователь',
            description: 'У кого вы хотите забрать',
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
        let firstCoins = await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // данные с бд, сколько у юзера коинов
        let lastCoins = interaction.options.getNumber('количество'); // данные сколько у юзера заберут
            if(firstCoins >= lastCoins) // проверка если у юзера меньше коинов, чем хотят забрать, то else
            {   let user = interaction.options.getUser('пользователь').id; // информация юзера с бд - айди
                let coins = await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // информация юзера с бд - коины

                let embedCoins = interaction.options.getNumber('количество'); // количество сколько забрали у юзера для эмбеда
                let awardCoins = interaction.options.getNumber('количество'); // количество сколько забрали у юзера для суммы 

            awardCoins -= coins; // формула вычытания коинов

            await db.updateMoney(user, awardCoins); // вывод
            interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Забрать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **забрали** ${embedCoins} :coin: у <@${interaction.options.getUser('пользователь').id}>. Теперь у пользователя ${awardCoins} :coin:`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
     } else {
        let coins = await db.getMoney(`${interaction.options.getUser('пользователь').id}`);
        interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Забрать коины`)
                .setDescription(`<@${interaction.user.id}>, вы не можете **забрать** у пользователя коины, потому что у него сейчас ${coins} :coin:`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
            ],
            ephemeral: true
        })
     }
    }
}