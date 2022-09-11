const {Client, ChatInputCommandInteraction, EmbedBuilder, ApplicationCommandOptionType} = require('discord.js')
const db = require('../../database/user.controller')

module.exports = {
    name: 'give',
    description: 'Выдать валюту',
    options: [
        {
            name: 'пользователь',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'количество',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: true
        },
        /*{
            name: 'пользователь2',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество2',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь3',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество3',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь4',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество4',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь5',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество5',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь6',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество6',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь7',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество7',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь8',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество8',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь9',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество9',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь10',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество10',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь11',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество11',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },
        {
            name: 'пользователь12',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            required: false
        },
        {
            name: 'количество12',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            required: false
        },*/
    ],
    category: 'Economy',
    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
     async execute (interaction, client) {
        let firstCoins = +await db.getMoney(`${interaction.user.id}`); // берем с бд инфу сколько коинов у пользователя, который хочет передать коины
        let lastCoins = interaction.options.getNumber('количество'); 


        if(firstCoins >= lastCoins){

        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
        let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
        
        let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
        
        let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
        
        let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
        let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
        
        let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
        
        awardCoins += coinsGive - ((4* takeCoins)/100); // формула для передачи коинов
        coinsMain -= takeCoins; // формула которая забирает коины у userMain


        await db.updateMoney(userMain, coinsMain); // вывод userMain
        await db.updateMoney(userGive, awardCoins); // вывод userGive

        interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${embedCoins} :coin: <@${interaction.options.getUser('пользователь').id}>, включая комиссию **4%.**`)
                .addFields(
                    {
                        name: '**Пользователь**',
                        value: `<@${interaction.options.getUser('пользователь').id}>`,
                        inline: true,
                    },
                    {
                        name: '**Количество**',
                        value: `${embedCoins} :coin:`,
                        inline: true,
                    },
                )
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
            ],
            ephemeral: false
        })


    } else {
        let coinsMain = +await db.getMoney(`${interaction.user.id}`);
        let embedCoins = interaction.options.getNumber('количество') - coinsMain;
        interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, у **Вас** не хватает ${embedCoins} :coin:.`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
            ],
            ephemeral: true
        })
    }
     }
}