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
        {
            name: 'пользователь2',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество2',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь3',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество3',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь4',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество4',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь5',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество5',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь6',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество6',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь7',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество7',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь8',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество8',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь9',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество9',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
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
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь11',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество11',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'пользователь12',
            description: 'пользователь',
            type: ApplicationCommandOptionType.User,
            max_value: 100000,
            min_value: 25,
            required: false
        },
        {
            name: 'количество12',
            description: 'количество валюты',
            type: ApplicationCommandOptionType.Number,
            max_value: 100000,
            min_value: 25,
            required: false
        },
    ],
    category: 'Economy',
    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
     async execute (interaction, client) { 
        let mainCoins = +await db.getMoney(`${interaction.user.id}`); // берем с бд инфу сколько коинов у пользователя, который хочет передать коины
        let firstCoins = interaction.options.getNumber('количество'); 
        let secondCoins = interaction.options.getNumber('количество2');
        let thirdCoins = interaction.options.getNumber('количество3'); 
        let fourthCoins = interaction.options.getNumber('количество4');
        let fifthCoins = interaction.options.getNumber('количество5');
        let sixthCoins = interaction.options.getNumber('количество6');
        let seventhCoins = interaction.options.getNumber('количество7');
        let eighthCoins = interaction.options.getNumber('количество8');
        let ninthCoins = interaction.options.getNumber('количество9');
        let tenthCoins = interaction.options.getNumber('количество10');
        let eleventhCoins = interaction.options.getNumber('количество11');
        let twelfthCoins = interaction.options.getNumber('количество12');
        
        
        let sumCoins = firstCoins + secondCoins + thirdCoins + fourthCoins + fifthCoins + sixthCoins + seventhCoins + eighthCoins + ninthCoins + tenthCoins + eleventhCoins + twelfthCoins;

        if (interaction.member.roles.cache.has('1019039246620839988')) // переводы без % (для стаффа)
        {
            if (mainCoins < sumCoins) {
                interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, у **Вас** не хватает ${sumCoins-mainCoins} :coin:.`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: true
                })
            } 
            else if (mainCoins >= sumCoins && (interaction.options.getUser('пользователь') == interaction.user.id || 
            interaction.options.getUser('пользователь2') == interaction.user.id || 
            interaction.options.getUser('пользователь3') == interaction.user.id || 
            interaction.options.getUser('пользователь4') == interaction.user.id || 
            interaction.options.getUser('пользователь5') == interaction.user.id || 
            interaction.options.getUser('пользователь6') == interaction.user.id || 
            interaction.options.getUser('пользователь7') == interaction.user.id || 
            interaction.options.getUser('пользователь8') == interaction.user.id || 
            interaction.options.getUser('пользователь9') == interaction.user.id || 
            interaction.options.getUser('пользователь10') == interaction.user.id || 
            interaction.options.getUser('пользователь11') == interaction.user.id || 
            interaction.options.getUser('пользователь12') == interaction.user.id )) // проверка на самого себя
             {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            } else if (interaction.options.getUser('пользователь2') == null && (interaction.options.getUser('пользователь3') !== null || 
            interaction.options.getUser('пользователь4') !== null || 
            interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null) ||
            (interaction.options.getUser('пользователь3') == null&& ( interaction.options.getUser('пользователь4') !== null || 
            interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь4') == null&& (  interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь5') == null&& ( interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь6') == null&& ( interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь7') == null && ( interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь8') == null&& ( interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь9') == null&& ( interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь10') == null&& ( interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь11') == null&& (interaction.options.getUser('пользователь12') !== null))
            )
            {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            }
            if (mainCoins >= sumCoins && interaction.options.getUser('пользователь2') == null) {
                if (interaction.options.getUser('пользователь').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                } else {
                    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    
                    let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
                    
                    awardCoins += coinsGive; // формула для передачи коинов
                    coinsMain -= takeCoins; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${embedCoins} :coin:`)
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
                }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь3') == null) {
                if (interaction.options.getUser('пользователь').bot == true ||
                interaction.options.getUser('пользователь2').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                }
                else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2')) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                }          
                else {
                    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    
                    let sumTake = takeCoins + takeCoins2;
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                
    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                   
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    
                    
                    let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
                    let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
    
                    let sumEmbed = embedCoins + embedCoins2;
                    
                    awardCoins += coinsGive; // формула для передачи коинов
                    awardCoins2 += coinsGive2; // формула для передачи коинов
                    coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
                    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${embedCoins} :coin:\n${embedCoins2} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
                }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь4') == null) {
                if (interaction.options.getUser('пользователь').bot == true ||
                interaction.options.getUser('пользователь2').bot == true || 
                interaction.options.getUser('пользователь3').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })  
                    
            }
            else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') ||
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3')) {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            } else {
                let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
                    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    
                    let sumTake = takeCoins + takeCoins2 + takeCoins3;
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
                    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
                   
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
                    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive4
                    
                    let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
                    let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
                    let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
    
                    let sumEmbed = embedCoins + embedCoins2 + embedCoins3;
                    
                    awardCoins += coinsGive; // формула для передачи коинов
                    awardCoins2 += coinsGive2; // формула для передачи коинов
                    awardCoins3 += coinsGive3; // формула для передачи коинов
                    coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
                    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
                    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
            }
        } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь5') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true) {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })  
        } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
        interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
        interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
        interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
        interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
        interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4')
        ) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
        } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                
                let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
                let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
                let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    
                let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4;
                
                let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
                let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
                
                let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
                let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
               
                let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
                let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
                let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
                
                let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
                let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
                let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
                let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
    
                let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4;
                
                awardCoins += coinsGive; // формула для передачи коинов
                awardCoins2 += coinsGive2; // формула для передачи коинов
                awardCoins3 += coinsGive3; // формула для передачи коинов
                awardCoins4 += coinsGive4; // формула для передачи коинов
                coinsMain -= sumTake; // формула которая забирает коины у userMain
        
        
                await db.updateMoney(userMain, coinsMain); // вывод userMain
                await db.updateMoney(userGive, awardCoins); // вывод userGive
                await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
                await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
                await db.updateMoney(userGive4, awardCoins4); // вывод userGive3
        
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                        .addFields(
                            {
                                name: '**Пользователь**',
                                value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>`,
                                inline: true,
                            },
                            {
                                name: '**Количество**',
                                value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:`,
                                inline: true,
                            },
                        )
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: false
                })
        }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь6') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true ||
        interaction.options.getUser('пользователь4').bot == true ||
        interaction.options.getUser('пользователь5').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') 
    ) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            
            let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5'); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5;
            
            awardCoins += coinsGive; // формула для передачи коинов
            awardCoins2 += coinsGive2; // формула для передачи коинов
            awardCoins3 += coinsGive3; // формула для передачи коинов
            awardCoins4 += coinsGive4; // формула для передачи коинов
            awardCoins5 += coinsGive5; // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:\n${embedCoins5} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь7') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true ||
        interaction.options.getUser('пользователь4').bot == true ||
        interaction.options.getUser('пользователь5').bot == true ||
        interaction.options.getUser('пользователь6').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') 
    ) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            
            let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5'); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6'); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6;
            
            awardCoins += coinsGive; // формула для передачи коинов
            awardCoins2 += coinsGive2; // формула для передачи коинов
            awardCoins3 += coinsGive3; // формула для передачи коинов
            awardCoins4 += coinsGive4; // формула для передачи коинов
            awardCoins5 += coinsGive5; // формула для передачи коинов
            awardCoins6 += coinsGive6; // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:\n${embedCoins5} :coin:\n${embedCoins6} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь8') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true ||
        interaction.options.getUser('пользователь4').bot == true ||
        interaction.options.getUser('пользователь5').bot == true ||
        interaction.options.getUser('пользователь6').bot == true ||
        interaction.options.getUser('пользователь7').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7')
    ) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive6
            
            let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5'); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6'); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7'); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7;
            
            awardCoins += coinsGive; // формула для передачи коинов
            awardCoins2 += coinsGive2; // формула для передачи коинов
            awardCoins3 += coinsGive3; // формула для передачи коинов
            awardCoins4 += coinsGive4; // формула для передачи коинов
            awardCoins5 += coinsGive5; // формула для передачи коинов
            awardCoins6 += coinsGive6; // формула для передачи коинов
            awardCoins7 += coinsGive7; // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive6
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:\n${embedCoins5} :coin:\n${embedCoins6} :coin:\n${embedCoins7} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь9') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true ||
        interaction.options.getUser('пользователь4').bot == true ||
        interaction.options.getUser('пользователь5').bot == true ||
        interaction.options.getUser('пользователь6').bot == true ||
        interaction.options.getUser('пользователь7').bot == true ||
        interaction.options.getUser('пользователь8').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8')
    ) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            
            let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5'); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6'); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7'); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8'); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8;
            
            awardCoins += coinsGive; // формула для передачи коинов
            awardCoins2 += coinsGive2; // формула для передачи коинов
            awardCoins3 += coinsGive3; // формула для передачи коинов
            awardCoins4 += coinsGive4; // формула для передачи коинов
            awardCoins5 += coinsGive5; // формула для передачи коинов
            awardCoins6 += coinsGive6; // формула для передачи коинов
            awardCoins7 += coinsGive7; // формула для передачи коинов
            awardCoins8 += coinsGive8; // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:\n${embedCoins5} :coin:\n${embedCoins6} :coin:\n${embedCoins7} :coin:\n${embedCoins8} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь10') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true ||
        interaction.options.getUser('пользователь4').bot == true ||
        interaction.options.getUser('пользователь5').bot == true ||
        interaction.options.getUser('пользователь6').bot == true ||
        interaction.options.getUser('пользователь7').bot == true ||
        interaction.options.getUser('пользователь8').bot == true ||
        interaction.options.getUser('пользователь9').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9')
    ) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            
            let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5'); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6'); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7'); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8'); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9'); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9;
            
            awardCoins += coinsGive; // формула для передачи коинов
            awardCoins2 += coinsGive2; // формула для передачи коинов
            awardCoins3 += coinsGive3; // формула для передачи коинов
            awardCoins4 += coinsGive4; // формула для передачи коинов
            awardCoins5 += coinsGive5; // формула для передачи коинов
            awardCoins6 += coinsGive6; // формула для передачи коинов
            awardCoins7 += coinsGive7; // формула для передачи коинов
            awardCoins8 += coinsGive8; // формула для передачи коинов
            awardCoins9 += coinsGive9; // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive8
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:\n${embedCoins5} :coin:\n${embedCoins6} :coin:\n${embedCoins7} :coin:\n${embedCoins8} :coin:\n${embedCoins9} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь11') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true ||
        interaction.options.getUser('пользователь4').bot == true ||
        interaction.options.getUser('пользователь5').bot == true ||
        interaction.options.getUser('пользователь6').bot == true ||
        interaction.options.getUser('пользователь7').bot == true ||
        interaction.options.getUser('пользователь8').bot == true ||
        interaction.options.getUser('пользователь9').bot == true ||
        interaction.options.getUser('пользователь10').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10')
    ) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            
            let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5'); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6'); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7'); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8'); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9'); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10'); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10;
            
            awardCoins += coinsGive; // формула для передачи коинов
            awardCoins2 += coinsGive2; // формула для передачи коинов
            awardCoins3 += coinsGive3; // формула для передачи коинов
            awardCoins4 += coinsGive4; // формула для передачи коинов
            awardCoins5 += coinsGive5; // формула для передачи коинов
            awardCoins6 += coinsGive6; // формула для передачи коинов
            awardCoins7 += coinsGive7; // формула для передачи коинов
            awardCoins8 += coinsGive8; // формула для передачи коинов
            awardCoins9 += coinsGive9; // формула для передачи коинов
            awardCoins10 += coinsGive10; // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:\n${embedCoins5} :coin:\n${embedCoins6} :coin:\n${embedCoins7} :coin:\n${embedCoins8} :coin:\n${embedCoins9} :coin:\n${embedCoins10} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true ||
        interaction.options.getUser('пользователь4').bot == true ||
        interaction.options.getUser('пользователь5').bot == true ||
        interaction.options.getUser('пользователь6').bot == true ||
        interaction.options.getUser('пользователь7').bot == true ||
        interaction.options.getUser('пользователь8').bot == true ||
        interaction.options.getUser('пользователь9').bot == true ||
        interaction.options.getUser('пользователь10').bot == true ||
        interaction.options.getUser('пользователь11').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') 
    ) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
            
            let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5'); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6'); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7'); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8'); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9'); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10'); // информация сколько передали коинов для эмбеда
            let embedCoins11 = interaction.options.getNumber('количество11'); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11;
            
            awardCoins += coinsGive; // формула для передачи коинов
            awardCoins2 += coinsGive2; // формула для передачи коинов
            awardCoins3 += coinsGive3; // формула для передачи коинов
            awardCoins4 += coinsGive4; // формула для передачи коинов
            awardCoins5 += coinsGive5; // формула для передачи коинов
            awardCoins6 += coinsGive6; // формула для передачи коинов
            awardCoins7 += coinsGive7; // формула для передачи коинов
            awardCoins8 += coinsGive8; // формула для передачи коинов
            awardCoins9 += coinsGive9; // формула для передачи коинов
            awardCoins10 += coinsGive10; // формула для передачи коинов
            awardCoins11 += coinsGive11; // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:\n${embedCoins5} :coin:\n${embedCoins6} :coin:\n${embedCoins7} :coin:\n${embedCoins8} :coin:\n${embedCoins9} :coin:\n${embedCoins10} :coin:\n${embedCoins11} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') !== null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true ||
        interaction.options.getUser('пользователь4').bot == true ||
        interaction.options.getUser('пользователь5').bot == true ||
        interaction.options.getUser('пользователь6').bot == true ||
        interaction.options.getUser('пользователь7').bot == true ||
        interaction.options.getUser('пользователь8').bot == true ||
        interaction.options.getUser('пользователь9').bot == true ||
        interaction.options.getUser('пользователь10').bot == true ||
        interaction.options.getUser('пользователь11').bot == true ||
        interaction.options.getUser('пользователь12').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь12') ||
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь12') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь12') ||
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь12') ||
    interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь11') == interaction.options.getUser('пользователь12')
    ) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
            let takeCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11 + takeCoins12;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
            let awardCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы прибавить коины userGive12
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
            let userGive12 = interaction.options.getUser('пользователь12').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
            let coinsGive12 = +await db.getMoney(`${interaction.options.getUser('пользователь12').id}`); // коины с бд сколько на данный момент у userGive12
            
            let embedCoins = interaction.options.getNumber('количество'); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2'); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3'); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4'); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5'); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6'); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7'); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8'); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9'); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10'); // информация сколько передали коинов для эмбеда
            let embedCoins11 = interaction.options.getNumber('количество11'); // информация сколько передали коинов для эмбеда
            let embedCoins12 = interaction.options.getNumber('количество12'); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11 + embedCoins12;
            
            awardCoins += coinsGive; // формула для передачи коинов
            awardCoins2 += coinsGive2; // формула для передачи коинов
            awardCoins3 += coinsGive3; // формула для передачи коинов
            awardCoins4 += coinsGive4; // формула для передачи коинов
            awardCoins5 += coinsGive5; // формула для передачи коинов
            awardCoins6 += coinsGive6; // формула для передачи коинов
            awardCoins7 += coinsGive7; // формула для передачи коинов
            awardCoins8 += coinsGive8; // формула для передачи коинов
            awardCoins9 += coinsGive9; // формула для передачи коинов
            awardCoins10 += coinsGive10; // формула для передачи коинов
            awardCoins11 += coinsGive11; // формула для передачи коинов
            awardCoins12 += coinsGive12; // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
            await db.updateMoney(userGive12, awardCoins12); // вывод userGive12
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n<@${interaction.options.getUser('пользователь12').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${embedCoins} :coin:\n${embedCoins2} :coin:\n${embedCoins3} :coin:\n${embedCoins4} :coin:\n${embedCoins5} :coin:\n${embedCoins6} :coin:\n${embedCoins7} :coin:\n${embedCoins8} :coin:\n${embedCoins9} :coin:\n${embedCoins10} :coin:\n${embedCoins11} :coin:\n${embedCoins12} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    }
        }
        else if (interaction.member.roles.cache.has('1019052872400384011')) // 1% комиссия
        {
            if (mainCoins < sumCoins) {
                interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, у **Вас** не хватает ${sumCoins-mainCoins} :coin:.`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: true
                })
            } 
            else if (mainCoins >= sumCoins && (interaction.options.getUser('пользователь') == interaction.user.id || 
            interaction.options.getUser('пользователь2') == interaction.user.id || 
            interaction.options.getUser('пользователь3') == interaction.user.id || 
            interaction.options.getUser('пользователь4') == interaction.user.id || 
            interaction.options.getUser('пользователь5') == interaction.user.id || 
            interaction.options.getUser('пользователь6') == interaction.user.id || 
            interaction.options.getUser('пользователь7') == interaction.user.id || 
            interaction.options.getUser('пользователь8') == interaction.user.id || 
            interaction.options.getUser('пользователь9') == interaction.user.id || 
            interaction.options.getUser('пользователь10') == interaction.user.id || 
            interaction.options.getUser('пользователь11') == interaction.user.id || 
            interaction.options.getUser('пользователь12') == interaction.user.id )) // проверка на самого себя
             {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            } else if (interaction.options.getUser('пользователь2') == null && (interaction.options.getUser('пользователь3') !== null || 
            interaction.options.getUser('пользователь4') !== null || 
            interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null) ||
            (interaction.options.getUser('пользователь3') == null&& ( interaction.options.getUser('пользователь4') !== null || 
            interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь4') == null&& (  interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь5') == null&& ( interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь6') == null&& ( interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь7') == null && ( interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь8') == null&& ( interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь9') == null&& ( interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь10') == null&& ( interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь11') == null&& (interaction.options.getUser('пользователь12') !== null))
            )
            {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины 123`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            }
            if (mainCoins >= sumCoins && interaction.options.getUser('пользователь2') == null) {
                if (interaction.options.getUser('пользователь').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                } else {
                    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    
                    awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
                    coinsMain -= takeCoins; // формула которая забирает коины у userMain
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive 
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(embedCoins)} :coin:, включая комиссию **1%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
                }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь3') == null) {
                if (interaction.options.getUser('пользователь').bot == true ||
                interaction.options.getUser('пользователь2').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                }
                else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2')) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                }          
                else {
                    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            
                    let sumTake = takeCoins + takeCoins2;
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                
            
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                   
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            
                    let sumEmbed = embedCoins + embedCoins2;
                    
                    awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
                    awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
                    coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
                    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
                }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь4') == null) {
                if (interaction.options.getUser('пользователь').bot == true ||
                interaction.options.getUser('пользователь2').bot == true || 
                interaction.options.getUser('пользователь3').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })  
                    
            }
            else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') ||
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3')) {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            } else {
                let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
                    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            
                    let sumTake = takeCoins + takeCoins2 + takeCoins3;
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
                    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
                   
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
                    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive4
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            
                    let sumEmbed = embedCoins + embedCoins2 + embedCoins3;
                    
                    awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
                    awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
                    awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
                    coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
                    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
                    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь5') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true) {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4')
            ) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                
                let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
                let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
                let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            
                let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4;
                
                let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
                let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
                
                let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
                let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
               
                let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
                let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
                let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
                
                let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
                let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
                let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
                let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            
                let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4;
                
                awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
                awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
                awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
                awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
                coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                await db.updateMoney(userMain, coinsMain); // вывод userMain
                await db.updateMoney(userGive, awardCoins); // вывод userGive
                await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
                await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
                await db.updateMoney(userGive4, awardCoins4); // вывод userGive3
            
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                        .addFields(
                            {
                                name: '**Пользователь**',
                                value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>`,
                                inline: true,
                            },
                            {
                                name: '**Количество**',
                                value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:`,
                                inline: true,
                            },
                        )
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: false
                })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь6') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            
            let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((1* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5;
            
            awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((1* takeCoins5)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь7') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            
            let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((1* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((1* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6;
            
            awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((1* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((1* takeCoins6)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь8') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive6
            
            let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((1* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((1* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((1* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7;
            
            awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((1* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((1* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((1* takeCoins7)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive6
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь9') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            
            let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((1* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((1* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((1* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((1* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8;
            
            awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((1* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((1* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((1* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((1* takeCoins8)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь10') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            
            let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((1* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((1* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((1* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((1* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((1* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9;
            
            awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((1* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((1* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((1* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((1* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((1* takeCoins9)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive8
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь11') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            
            let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((1* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((1* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((1* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((1* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((1* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((1* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10;
            
            awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((1* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((1* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((1* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((1* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((1* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((1* takeCoins10)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true ||
            interaction.options.getUser('пользователь11').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
            
            let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((1* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((1* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((1* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((1* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((1* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((1* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            let embedCoins11 = interaction.options.getNumber('количество11') - ((1* takeCoins11)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11;
            
            awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((1* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((1* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((1* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((1* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((1* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((1* takeCoins10)/100)); // формула для передачи коинов
            awardCoins11 += coinsGive11 - Math.round(((1* takeCoins11)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:\n${Math.round(embedCoins11)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') !== null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true ||
            interaction.options.getUser('пользователь11').bot == true ||
            interaction.options.getUser('пользователь12').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь11') == interaction.options.getUser('пользователь12')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
            let takeCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11 + takeCoins12;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
            let awardCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы прибавить коины userGive12
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
            let userGive12 = interaction.options.getUser('пользователь12').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
            let coinsGive12 = +await db.getMoney(`${interaction.options.getUser('пользователь12').id}`); // коины с бд сколько на данный момент у userGive12
            
            let embedCoins = interaction.options.getNumber('количество') - ((1* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((1* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((1* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((1* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((1* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((1* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((1* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((1* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((1* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((1* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            let embedCoins11 = interaction.options.getNumber('количество11') - ((1* takeCoins11)/100); // информация сколько передали коинов для эмбеда
            let embedCoins12 = interaction.options.getNumber('количество12') - ((1* takeCoins12)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11 + embedCoins12;
            
            awardCoins += coinsGive - Math.round(((1* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((1* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((1* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((1* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((1* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((1* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((1* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((1* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((1* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((1* takeCoins10)/100)); // формула для передачи коинов
            awardCoins11 += coinsGive11 - Math.round(((1* takeCoins11)/100)); // формула для передачи коинов
            awardCoins12 += coinsGive12 - Math.round(((1* takeCoins12)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
            await db.updateMoney(userGive12, awardCoins12); // вывод userGive12
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **1%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n<@${interaction.options.getUser('пользователь12').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:\n${Math.round(embedCoins11)} :coin:\n${Math.round(embedCoins12)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            }
        }
        else if (interaction.member.roles.cache.has('1019052893501935666')) // 2% комиссия
        {
            if (mainCoins < sumCoins) {
                interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, у **Вас** не хватает ${sumCoins-mainCoins} :coin:.`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: true
                })
            } 
            else if (mainCoins >= sumCoins && (interaction.options.getUser('пользователь') == interaction.user.id || 
            interaction.options.getUser('пользователь2') == interaction.user.id || 
            interaction.options.getUser('пользователь3') == interaction.user.id || 
            interaction.options.getUser('пользователь4') == interaction.user.id || 
            interaction.options.getUser('пользователь5') == interaction.user.id || 
            interaction.options.getUser('пользователь6') == interaction.user.id || 
            interaction.options.getUser('пользователь7') == interaction.user.id || 
            interaction.options.getUser('пользователь8') == interaction.user.id || 
            interaction.options.getUser('пользователь9') == interaction.user.id || 
            interaction.options.getUser('пользователь10') == interaction.user.id || 
            interaction.options.getUser('пользователь11') == interaction.user.id || 
            interaction.options.getUser('пользователь12') == interaction.user.id )) // проверка на самого себя
             {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            } else if (interaction.options.getUser('пользователь2') == null && (interaction.options.getUser('пользователь3') !== null || 
            interaction.options.getUser('пользователь4') !== null || 
            interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null) ||
            (interaction.options.getUser('пользователь3') == null&& ( interaction.options.getUser('пользователь4') !== null || 
            interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь4') == null&& (  interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь5') == null&& ( interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь6') == null&& ( interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь7') == null && ( interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь8') == null&& ( interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь9') == null&& ( interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь10') == null&& ( interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь11') == null&& (interaction.options.getUser('пользователь12') !== null))
            )
            {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины 123`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            }
            if (mainCoins >= sumCoins && interaction.options.getUser('пользователь2') == null) {
                if (interaction.options.getUser('пользователь').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                } else {
                    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    
                    awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
                    coinsMain -= takeCoins; // формула которая забирает коины у userMain
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive 
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(embedCoins)} :coin:, включая комиссию **2%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
                }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь3') == null) {
                if (interaction.options.getUser('пользователь').bot == true ||
                interaction.options.getUser('пользователь2').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                }
                else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2')) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                }          
                else {
                    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            
                    let sumTake = takeCoins + takeCoins2;
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                
            
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                   
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            
                    let sumEmbed = embedCoins + embedCoins2;
                    
                    awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
                    awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
                    coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
                    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
                }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь4') == null) {
                if (interaction.options.getUser('пользователь').bot == true ||
                interaction.options.getUser('пользователь2').bot == true || 
                interaction.options.getUser('пользователь3').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })  
                    
            }
            else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') ||
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3')) {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            } else {
                let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
                    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            
                    let sumTake = takeCoins + takeCoins2 + takeCoins3;
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
                    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
                   
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
                    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive4
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            
                    let sumEmbed = embedCoins + embedCoins2 + embedCoins3;
                    
                    awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
                    awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
                    awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
                    coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
                    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
                    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь5') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true) {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4')
            ) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                
                let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
                let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
                let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            
                let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4;
                
                let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
                let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
                
                let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
                let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
               
                let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
                let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
                let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
                
                let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
                let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
                let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
                let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            
                let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4;
                
                awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
                awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
                awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
                awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
                coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                await db.updateMoney(userMain, coinsMain); // вывод userMain
                await db.updateMoney(userGive, awardCoins); // вывод userGive
                await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
                await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
                await db.updateMoney(userGive4, awardCoins4); // вывод userGive3
            
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                        .addFields(
                            {
                                name: '**Пользователь**',
                                value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>`,
                                inline: true,
                            },
                            {
                                name: '**Количество**',
                                value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:`,
                                inline: true,
                            },
                        )
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: false
                })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь6') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            
            let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((2* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5;
            
            awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((2* takeCoins5)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь7') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            
            let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((2* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((2* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6;
            
            awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((2* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((2* takeCoins6)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь8') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive6
            
            let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((2* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((2* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((2* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7;
            
            awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((2* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((2* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((2* takeCoins7)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive6
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь9') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            
            let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((2* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((2* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((2* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((2* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8;
            
            awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((2* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((2* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((2* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((2* takeCoins8)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь10') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            
            let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((2* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((2* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((2* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((2* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((2* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9;
            
            awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((2* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((2* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((2* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((2* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((2* takeCoins9)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive8
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь11') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            
            let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((2* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((2* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((2* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((2* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((2* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((2* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10;
            
            awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((2* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((2* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((2* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((2* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((2* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((2* takeCoins10)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true ||
            interaction.options.getUser('пользователь11').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
            
            let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((2* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((2* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((2* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((2* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((2* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((2* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            let embedCoins11 = interaction.options.getNumber('количество11') - ((2* takeCoins11)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11;
            
            awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((2* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((2* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((2* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((2* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((2* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((2* takeCoins10)/100)); // формула для передачи коинов
            awardCoins11 += coinsGive11 - Math.round(((2* takeCoins11)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:\n${Math.round(embedCoins11)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') !== null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true ||
            interaction.options.getUser('пользователь11').bot == true ||
            interaction.options.getUser('пользователь12').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь11') == interaction.options.getUser('пользователь12')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
            let takeCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11 + takeCoins12;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
            let awardCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы прибавить коины userGive12
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
            let userGive12 = interaction.options.getUser('пользователь12').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
            let coinsGive12 = +await db.getMoney(`${interaction.options.getUser('пользователь12').id}`); // коины с бд сколько на данный момент у userGive12
            
            let embedCoins = interaction.options.getNumber('количество') - ((2* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((2* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((2* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((2* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((2* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((2* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((2* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((2* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((2* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((2* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            let embedCoins11 = interaction.options.getNumber('количество11') - ((2* takeCoins11)/100); // информация сколько передали коинов для эмбеда
            let embedCoins12 = interaction.options.getNumber('количество12') - ((2* takeCoins12)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11 + embedCoins12;
            
            awardCoins += coinsGive - Math.round(((2* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((2* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((2* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((2* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((2* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((2* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((2* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((2* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((2* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((2* takeCoins10)/100)); // формула для передачи коинов
            awardCoins11 += coinsGive11 - Math.round(((2* takeCoins11)/100)); // формула для передачи коинов
            awardCoins12 += coinsGive12 - Math.round(((2* takeCoins12)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
            await db.updateMoney(userGive12, awardCoins12); // вывод userGive12
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **2%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n<@${interaction.options.getUser('пользователь12').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:\n${Math.round(embedCoins11)} :coin:\n${Math.round(embedCoins12)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            }
        }
        else if (interaction.member.roles.cache.has('1019052909872283758')) // 3% комиссия
        {
            if (mainCoins < sumCoins) {
                interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, у **Вас** не хватает ${sumCoins-mainCoins} :coin:.`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: true
                })
            } 
            else if (mainCoins >= sumCoins && (interaction.options.getUser('пользователь') == interaction.user.id || 
            interaction.options.getUser('пользователь2') == interaction.user.id || 
            interaction.options.getUser('пользователь3') == interaction.user.id || 
            interaction.options.getUser('пользователь4') == interaction.user.id || 
            interaction.options.getUser('пользователь5') == interaction.user.id || 
            interaction.options.getUser('пользователь6') == interaction.user.id || 
            interaction.options.getUser('пользователь7') == interaction.user.id || 
            interaction.options.getUser('пользователь8') == interaction.user.id || 
            interaction.options.getUser('пользователь9') == interaction.user.id || 
            interaction.options.getUser('пользователь10') == interaction.user.id || 
            interaction.options.getUser('пользователь11') == interaction.user.id || 
            interaction.options.getUser('пользователь12') == interaction.user.id )) // проверка на самого себя
             {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            } else if (interaction.options.getUser('пользователь2') == null && (interaction.options.getUser('пользователь3') !== null || 
            interaction.options.getUser('пользователь4') !== null || 
            interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null) ||
            (interaction.options.getUser('пользователь3') == null&& ( interaction.options.getUser('пользователь4') !== null || 
            interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь4') == null&& (  interaction.options.getUser('пользователь5') !== null ||
            interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь5') == null&& ( interaction.options.getUser('пользователь6') !== null ||
            interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь6') == null&& ( interaction.options.getUser('пользователь7') !== null ||
            interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь7') == null && ( interaction.options.getUser('пользователь8') !== null ||
            interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь8') == null&& ( interaction.options.getUser('пользователь9') !== null ||
            interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь9') == null&& ( interaction.options.getUser('пользователь10') !== null ||
            interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь10') == null&& ( interaction.options.getUser('пользователь11') !== null ||
            interaction.options.getUser('пользователь12') !== null)) ||
            (interaction.options.getUser('пользователь11') == null&& (interaction.options.getUser('пользователь12') !== null))
            )
            {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины 123`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            }
            if (mainCoins >= sumCoins && interaction.options.getUser('пользователь2') == null) {
                if (interaction.options.getUser('пользователь').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                } else {
                    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    
                    awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
                    coinsMain -= takeCoins; // формула которая забирает коины у userMain
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive 
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(embedCoins)} :coin:, включая комиссию **3%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
                }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь3') == null) {
                if (interaction.options.getUser('пользователь').bot == true ||
                interaction.options.getUser('пользователь2').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                }
                else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2')) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })
                }          
                else {
                    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            
                    let sumTake = takeCoins + takeCoins2;
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                
            
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                   
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            
                    let sumEmbed = embedCoins + embedCoins2;
                    
                    awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
                    awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
                    coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
                    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
                }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь4') == null) {
                if (interaction.options.getUser('пользователь').bot == true ||
                interaction.options.getUser('пользователь2').bot == true || 
                interaction.options.getUser('пользователь3').bot == true) {
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                        ],
                        ephemeral: true
                    })  
                    
            }
            else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') ||
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3')) {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })
            } else {
                let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                    
                    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
                    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            
                    let sumTake = takeCoins + takeCoins2 + takeCoins3;
                    
                    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
                    
                    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
                   
                    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
                    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive4
                    
                    let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
                    let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            
                    let sumEmbed = embedCoins + embedCoins2 + embedCoins3;
                    
                    awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
                    awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
                    awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
                    coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                    await db.updateMoney(userMain, coinsMain); // вывод userMain
                    await db.updateMoney(userGive, awardCoins); // вывод userGive
                    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
                    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            
                    return interaction.reply ({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Передать коины`)
                            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                            .addFields(
                                {
                                    name: '**Пользователь**',
                                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>`,
                                    inline: true,
                                },
                                {
                                    name: '**Количество**',
                                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:`,
                                    inline: true,
                                },
                            )
                            .setColor('#36393F')
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь5') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true) {
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                    ],
                    ephemeral: true
                })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4')
            ) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
                let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
                
                let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
                let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
                let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
                let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            
                let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4;
                
                let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
                let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
                let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
                let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
                
                let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
                let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
                let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
                let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
               
                let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
                let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
                let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
                let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
                
                let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
                let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
                let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
                let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            
                let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4;
                
                awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
                awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
                awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
                awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
                coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
                await db.updateMoney(userMain, coinsMain); // вывод userMain
                await db.updateMoney(userGive, awardCoins); // вывод userGive
                await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
                await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
                await db.updateMoney(userGive4, awardCoins4); // вывод userGive3
            
                return interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                        .addFields(
                            {
                                name: '**Пользователь**',
                                value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>`,
                                inline: true,
                            },
                            {
                                name: '**Количество**',
                                value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:`,
                                inline: true,
                            },
                        )
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: false
                })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь6') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            
            let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((3* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5;
            
            awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((3* takeCoins5)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь7') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            
            let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((3* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((3* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6;
            
            awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((3* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((3* takeCoins6)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь8') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive6
            
            let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((3* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((3* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((3* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7;
            
            awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((3* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((3* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((3* takeCoins7)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive6
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь9') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            
            let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((3* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((3* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((3* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((3* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8;
            
            awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((3* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((3* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((3* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((3* takeCoins8)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь10') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            
            let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((3* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((3* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((3* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((3* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((3* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9;
            
            awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((3* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((3* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((3* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((3* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((3* takeCoins9)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive8
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь11') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            
            let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((3* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((3* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((3* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((3* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((3* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((3* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10;
            
            awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((3* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((3* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((3* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((3* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((3* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((3* takeCoins10)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') == null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true ||
            interaction.options.getUser('пользователь11').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') 
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
            
            let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((3* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((3* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((3* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((3* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((3* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((3* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            let embedCoins11 = interaction.options.getNumber('количество11') - ((3* takeCoins11)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11;
            
            awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((3* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((3* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((3* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((3* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((3* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((3* takeCoins10)/100)); // формула для передачи коинов
            awardCoins11 += coinsGive11 - Math.round(((3* takeCoins11)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:\n${Math.round(embedCoins11)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') !== null) {
            if (interaction.options.getUser('пользователь').bot == true ||
            interaction.options.getUser('пользователь2').bot == true || 
            interaction.options.getUser('пользователь3').bot == true ||
            interaction.options.getUser('пользователь4').bot == true ||
            interaction.options.getUser('пользователь5').bot == true ||
            interaction.options.getUser('пользователь6').bot == true ||
            interaction.options.getUser('пользователь7').bot == true ||
            interaction.options.getUser('пользователь8').bot == true ||
            interaction.options.getUser('пользователь9').bot == true ||
            interaction.options.getUser('пользователь10').bot == true ||
            interaction.options.getUser('пользователь11').bot == true ||
            interaction.options.getUser('пользователь12').bot == true) {
            {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            }
            } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
            interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь12') ||
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') || 
            interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь12') || 
            interaction.options.getUser('пользователь11') == interaction.options.getUser('пользователь12')
            ) {
            return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
            })
            } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
            let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
            let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
            let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
            let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
            let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
            let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
            let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
            let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
            let takeCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы отнять коины userMain
            
            let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11 + takeCoins12;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
            let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
            let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
            let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
            let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
            let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
            let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
            let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
            let awardCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы прибавить коины userGive12
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
            let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
            let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
            let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
            let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
            let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
            let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
            let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
            let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
            let userGive12 = interaction.options.getUser('пользователь12').id; // айди пользователя, которому отдают коины
            
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
            let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
            let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
            let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
            let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
            let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
            let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
            let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
            let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
            let coinsGive12 = +await db.getMoney(`${interaction.options.getUser('пользователь12').id}`); // коины с бд сколько на данный момент у userGive12
            
            let embedCoins = interaction.options.getNumber('количество') - ((3* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((3* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((3* takeCoins3)/100); // информация сколько передали коинов для эмбеда
            let embedCoins4 = interaction.options.getNumber('количество4') - ((3* takeCoins4)/100); // информация сколько передали коинов для эмбеда
            let embedCoins5 = interaction.options.getNumber('количество5') - ((3* takeCoins5)/100); // информация сколько передали коинов для эмбеда
            let embedCoins6 = interaction.options.getNumber('количество6') - ((3* takeCoins6)/100); // информация сколько передали коинов для эмбеда
            let embedCoins7 = interaction.options.getNumber('количество7') - ((3* takeCoins7)/100); // информация сколько передали коинов для эмбеда
            let embedCoins8 = interaction.options.getNumber('количество8') - ((3* takeCoins8)/100); // информация сколько передали коинов для эмбеда
            let embedCoins9 = interaction.options.getNumber('количество9') - ((3* takeCoins9)/100); // информация сколько передали коинов для эмбеда
            let embedCoins10 = interaction.options.getNumber('количество10') - ((3* takeCoins10)/100); // информация сколько передали коинов для эмбеда
            let embedCoins11 = interaction.options.getNumber('количество11') - ((3* takeCoins11)/100); // информация сколько передали коинов для эмбеда
            let embedCoins12 = interaction.options.getNumber('количество12') - ((3* takeCoins12)/100); // информация сколько передали коинов для эмбеда
            
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11 + embedCoins12;
            
            awardCoins += coinsGive - Math.round(((3* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((3* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((3* takeCoins3)/100)); // формула для передачи коинов
            awardCoins4 += coinsGive4 - Math.round(((3* takeCoins4)/100)); // формула для передачи коинов
            awardCoins5 += coinsGive5 - Math.round(((3* takeCoins5)/100)); // формула для передачи коинов
            awardCoins6 += coinsGive6 - Math.round(((3* takeCoins6)/100)); // формула для передачи коинов
            awardCoins7 += coinsGive7 - Math.round(((3* takeCoins7)/100)); // формула для передачи коинов
            awardCoins8 += coinsGive8 - Math.round(((3* takeCoins8)/100)); // формула для передачи коинов
            awardCoins9 += coinsGive9 - Math.round(((3* takeCoins9)/100)); // формула для передачи коинов
            awardCoins10 += coinsGive10 - Math.round(((3* takeCoins10)/100)); // формула для передачи коинов
            awardCoins11 += coinsGive11 - Math.round(((3* takeCoins11)/100)); // формула для передачи коинов
            awardCoins12 += coinsGive12 - Math.round(((3* takeCoins12)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
            
            
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
            await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
            await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
            await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
            await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
            await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
            await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
            await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
            await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
            await db.updateMoney(userGive12, awardCoins12); // вывод userGive12
            
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **3%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n<@${interaction.options.getUser('пользователь12').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:\n${Math.round(embedCoins11)} :coin:\n${Math.round(embedCoins12)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
            }
            }
        }
        else // 4% комиссия
 { 
    
    if (mainCoins < sumCoins) {
        interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, у **Вас** не хватает ${sumCoins-mainCoins} :coin:.`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
            ],
            ephemeral: true
        })
    } 
    else if (mainCoins >= sumCoins && (interaction.options.getUser('пользователь') == interaction.user.id || 
    interaction.options.getUser('пользователь2') == interaction.user.id || 
    interaction.options.getUser('пользователь3') == interaction.user.id || 
    interaction.options.getUser('пользователь4') == interaction.user.id || 
    interaction.options.getUser('пользователь5') == interaction.user.id || 
    interaction.options.getUser('пользователь6') == interaction.user.id || 
    interaction.options.getUser('пользователь7') == interaction.user.id || 
    interaction.options.getUser('пользователь8') == interaction.user.id || 
    interaction.options.getUser('пользователь9') == interaction.user.id || 
    interaction.options.getUser('пользователь10') == interaction.user.id || 
    interaction.options.getUser('пользователь11') == interaction.user.id || 
    interaction.options.getUser('пользователь12') == interaction.user.id )) // проверка на самого себя
     {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else if (interaction.options.getUser('пользователь2') == null && (interaction.options.getUser('пользователь3') !== null || 
    interaction.options.getUser('пользователь4') !== null || 
    interaction.options.getUser('пользователь5') !== null ||
    interaction.options.getUser('пользователь6') !== null ||
    interaction.options.getUser('пользователь7') !== null ||
    interaction.options.getUser('пользователь8') !== null ||
    interaction.options.getUser('пользователь9') !== null ||
    interaction.options.getUser('пользователь10') !== null ||
    interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null) ||
    (interaction.options.getUser('пользователь3') == null&& ( interaction.options.getUser('пользователь4') !== null || 
    interaction.options.getUser('пользователь5') !== null ||
    interaction.options.getUser('пользователь6') !== null ||
    interaction.options.getUser('пользователь7') !== null ||
    interaction.options.getUser('пользователь8') !== null ||
    interaction.options.getUser('пользователь9') !== null ||
    interaction.options.getUser('пользователь10') !== null ||
    interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null)) ||
    (interaction.options.getUser('пользователь4') == null&& (  interaction.options.getUser('пользователь5') !== null ||
    interaction.options.getUser('пользователь6') !== null ||
    interaction.options.getUser('пользователь7') !== null ||
    interaction.options.getUser('пользователь8') !== null ||
    interaction.options.getUser('пользователь9') !== null ||
    interaction.options.getUser('пользователь10') !== null ||
    interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null)) ||
    (interaction.options.getUser('пользователь5') == null&& ( interaction.options.getUser('пользователь6') !== null ||
    interaction.options.getUser('пользователь7') !== null ||
    interaction.options.getUser('пользователь8') !== null ||
    interaction.options.getUser('пользователь9') !== null ||
    interaction.options.getUser('пользователь10') !== null ||
    interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null)) ||
    (interaction.options.getUser('пользователь6') == null&& ( interaction.options.getUser('пользователь7') !== null ||
    interaction.options.getUser('пользователь8') !== null ||
    interaction.options.getUser('пользователь9') !== null ||
    interaction.options.getUser('пользователь10') !== null ||
    interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null)) ||
    (interaction.options.getUser('пользователь7') == null && ( interaction.options.getUser('пользователь8') !== null ||
    interaction.options.getUser('пользователь9') !== null ||
    interaction.options.getUser('пользователь10') !== null ||
    interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null)) ||
    (interaction.options.getUser('пользователь8') == null&& ( interaction.options.getUser('пользователь9') !== null ||
    interaction.options.getUser('пользователь10') !== null ||
    interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null)) ||
    (interaction.options.getUser('пользователь9') == null&& ( interaction.options.getUser('пользователь10') !== null ||
    interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null)) ||
    (interaction.options.getUser('пользователь10') == null&& ( interaction.options.getUser('пользователь11') !== null ||
    interaction.options.getUser('пользователь12') !== null)) ||
    (interaction.options.getUser('пользователь11') == null&& (interaction.options.getUser('пользователь12') !== null))
    )
    {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины 123`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    }
    if (mainCoins >= sumCoins && interaction.options.getUser('пользователь2') == null) {
        if (interaction.options.getUser('пользователь').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
        } else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            
            let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
            
            awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
            coinsMain -= takeCoins; // формула которая забирает коины у userMain
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive 
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(embedCoins)} :coin:, включая комиссию **4%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
        }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь3') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
        }
        else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2')) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
        }          
        else {
            let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
        
    
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    
            
            let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2;
            
            awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
        }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь4') == null) {
        if (interaction.options.getUser('пользователь').bot == true ||
        interaction.options.getUser('пользователь2').bot == true || 
        interaction.options.getUser('пользователь3').bot == true) {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })  
            
    }
    else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') ||
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3')) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    } else {
        let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
            let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
            
            let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
            let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
            let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    
            let sumTake = takeCoins + takeCoins2 + takeCoins3;
            
            let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
            let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
            let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
            
            let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
            let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
            let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
           
            let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
            let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
            let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive4
            
            let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
            let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
            let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    
            let sumEmbed = embedCoins + embedCoins2 + embedCoins3;
            
            awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
            awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
            awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
            coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
            await db.updateMoney(userMain, coinsMain); // вывод userMain
            await db.updateMoney(userGive, awardCoins); // вывод userGive
            await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
            await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь5') == null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true) {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4')
    ) {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
        let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
        
        let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
        let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
        let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
        let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    
        let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4;
        
        let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
        let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
        let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
        let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
        
        let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
        let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
        let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
        let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
       
        let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
        let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
        let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
        let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
        
        let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
        let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
        let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
        let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    
        let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4;
        
        awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
        awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
        awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
        awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
        coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
        await db.updateMoney(userMain, coinsMain); // вывод userMain
        await db.updateMoney(userGive, awardCoins); // вывод userGive
        await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
        await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
        await db.updateMoney(userGive4, awardCoins4); // вывод userGive3
    
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
                .addFields(
                    {
                        name: '**Пользователь**',
                        value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>`,
                        inline: true,
                    },
                    {
                        name: '**Количество**',
                        value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:`,
                        inline: true,
                    },
                )
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
            ],
            ephemeral: false
        })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь6') == null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true ||
    interaction.options.getUser('пользователь5').bot == true) {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') 
    ) {
    return interaction.reply ({
    embeds: [
        new EmbedBuilder()
        .setTitle(`Передать коины`)
        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
        .setColor('#36393F')
        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
    ],
    ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
    
    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    
    let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5;
    
    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
    let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
    let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
    
    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
    let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
    let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
    
    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
    let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
    let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
    
    let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
    let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    let embedCoins5 = interaction.options.getNumber('количество5') - ((4* takeCoins5)/100); // информация сколько передали коинов для эмбеда
    
    let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5;
    
    awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
    awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
    awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
    awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
    awardCoins5 += coinsGive5 - Math.round(((4* takeCoins5)/100)); // формула для передачи коинов
    coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
    await db.updateMoney(userMain, coinsMain); // вывод userMain
    await db.updateMoney(userGive, awardCoins); // вывод userGive
    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
    await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
            .addFields(
                {
                    name: '**Пользователь**',
                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>`,
                    inline: true,
                },
                {
                    name: '**Количество**',
                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:`,
                    inline: true,
                },
            )
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь7') == null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true ||
    interaction.options.getUser('пользователь5').bot == true ||
    interaction.options.getUser('пользователь6').bot == true) {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') 
    ) {
    return interaction.reply ({
    embeds: [
        new EmbedBuilder()
        .setTitle(`Передать коины`)
        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
        .setColor('#36393F')
        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
    ],
    ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
    
    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
    
    let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6;
    
    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
    let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
    let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
    let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
    
    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
    let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
    let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
    let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
    
    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
    let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
    let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
    let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
    
    let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
    let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    let embedCoins5 = interaction.options.getNumber('количество5') - ((4* takeCoins5)/100); // информация сколько передали коинов для эмбеда
    let embedCoins6 = interaction.options.getNumber('количество6') - ((4* takeCoins6)/100); // информация сколько передали коинов для эмбеда
    
    let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6;
    
    awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
    awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
    awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
    awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
    awardCoins5 += coinsGive5 - Math.round(((4* takeCoins5)/100)); // формула для передачи коинов
    awardCoins6 += coinsGive6 - Math.round(((4* takeCoins6)/100)); // формула для передачи коинов
    coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
    await db.updateMoney(userMain, coinsMain); // вывод userMain
    await db.updateMoney(userGive, awardCoins); // вывод userGive
    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
    await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
    
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
            .addFields(
                {
                    name: '**Пользователь**',
                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n`,
                    inline: true,
                },
                {
                    name: '**Количество**',
                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:`,
                    inline: true,
                },
            )
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь8') == null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true ||
    interaction.options.getUser('пользователь5').bot == true ||
    interaction.options.getUser('пользователь6').bot == true ||
    interaction.options.getUser('пользователь7').bot == true) {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7')
    ) {
    return interaction.reply ({
    embeds: [
        new EmbedBuilder()
        .setTitle(`Передать коины`)
        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
        .setColor('#36393F')
        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
    ],
    ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
    
    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
    let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
    
    let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7;
    
    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
    let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
    let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
    let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
    let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
    
    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
    let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
    let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
    let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
    let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
    
    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
    let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
    let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
    let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
    let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive6
    
    let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
    let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    let embedCoins5 = interaction.options.getNumber('количество5') - ((4* takeCoins5)/100); // информация сколько передали коинов для эмбеда
    let embedCoins6 = interaction.options.getNumber('количество6') - ((4* takeCoins6)/100); // информация сколько передали коинов для эмбеда
    let embedCoins7 = interaction.options.getNumber('количество7') - ((4* takeCoins7)/100); // информация сколько передали коинов для эмбеда
    
    let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7;
    
    awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
    awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
    awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
    awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
    awardCoins5 += coinsGive5 - Math.round(((4* takeCoins5)/100)); // формула для передачи коинов
    awardCoins6 += coinsGive6 - Math.round(((4* takeCoins6)/100)); // формула для передачи коинов
    awardCoins7 += coinsGive7 - Math.round(((4* takeCoins7)/100)); // формула для передачи коинов
    coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
    await db.updateMoney(userMain, coinsMain); // вывод userMain
    await db.updateMoney(userGive, awardCoins); // вывод userGive
    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
    await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
    await db.updateMoney(userGive7, awardCoins7); // вывод userGive6
    
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
            .addFields(
                {
                    name: '**Пользователь**',
                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>`,
                    inline: true,
                },
                {
                    name: '**Количество**',
                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:`,
                    inline: true,
                },
            )
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь9') == null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true ||
    interaction.options.getUser('пользователь5').bot == true ||
    interaction.options.getUser('пользователь6').bot == true ||
    interaction.options.getUser('пользователь7').bot == true ||
    interaction.options.getUser('пользователь8').bot == true) {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8')
    ) {
    return interaction.reply ({
    embeds: [
        new EmbedBuilder()
        .setTitle(`Передать коины`)
        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
        .setColor('#36393F')
        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
    ],
    ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
    
    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
    let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
    let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
    
    let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8;
    
    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
    let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
    let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
    let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
    let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
    let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
    
    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
    let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
    let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
    let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
    let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
    let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
    
    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
    let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
    let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
    let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
    let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
    let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
    
    let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
    let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    let embedCoins5 = interaction.options.getNumber('количество5') - ((4* takeCoins5)/100); // информация сколько передали коинов для эмбеда
    let embedCoins6 = interaction.options.getNumber('количество6') - ((4* takeCoins6)/100); // информация сколько передали коинов для эмбеда
    let embedCoins7 = interaction.options.getNumber('количество7') - ((4* takeCoins7)/100); // информация сколько передали коинов для эмбеда
    let embedCoins8 = interaction.options.getNumber('количество8') - ((4* takeCoins8)/100); // информация сколько передали коинов для эмбеда
    
    let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8;
    
    awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
    awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
    awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
    awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
    awardCoins5 += coinsGive5 - Math.round(((4* takeCoins5)/100)); // формула для передачи коинов
    awardCoins6 += coinsGive6 - Math.round(((4* takeCoins6)/100)); // формула для передачи коинов
    awardCoins7 += coinsGive7 - Math.round(((4* takeCoins7)/100)); // формула для передачи коинов
    awardCoins8 += coinsGive8 - Math.round(((4* takeCoins8)/100)); // формула для передачи коинов
    coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
    await db.updateMoney(userMain, coinsMain); // вывод userMain
    await db.updateMoney(userGive, awardCoins); // вывод userGive
    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
    await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
    await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
    await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
    
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
            .addFields(
                {
                    name: '**Пользователь**',
                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>`,
                    inline: true,
                },
                {
                    name: '**Количество**',
                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:`,
                    inline: true,
                },
            )
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь10') == null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true ||
    interaction.options.getUser('пользователь5').bot == true ||
    interaction.options.getUser('пользователь6').bot == true ||
    interaction.options.getUser('пользователь7').bot == true ||
    interaction.options.getUser('пользователь8').bot == true ||
    interaction.options.getUser('пользователь9').bot == true) {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })  
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9')
    ) {
    return interaction.reply ({
    embeds: [
        new EmbedBuilder()
        .setTitle(`Передать коины`)
        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
        .setColor('#36393F')
        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
    ],
    ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
    
    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
    let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
    let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
    let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
    
    let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9;
    
    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
    let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
    let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
    let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
    let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
    let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
    let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
    
    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
    let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
    let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
    let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
    let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
    let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
    let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
    
    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
    let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
    let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
    let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
    let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
    let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
    let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
    
    let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
    let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    let embedCoins5 = interaction.options.getNumber('количество5') - ((4* takeCoins5)/100); // информация сколько передали коинов для эмбеда
    let embedCoins6 = interaction.options.getNumber('количество6') - ((4* takeCoins6)/100); // информация сколько передали коинов для эмбеда
    let embedCoins7 = interaction.options.getNumber('количество7') - ((4* takeCoins7)/100); // информация сколько передали коинов для эмбеда
    let embedCoins8 = interaction.options.getNumber('количество8') - ((4* takeCoins8)/100); // информация сколько передали коинов для эмбеда
    let embedCoins9 = interaction.options.getNumber('количество9') - ((4* takeCoins9)/100); // информация сколько передали коинов для эмбеда
    
    let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9;
    
    awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
    awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
    awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
    awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
    awardCoins5 += coinsGive5 - Math.round(((4* takeCoins5)/100)); // формула для передачи коинов
    awardCoins6 += coinsGive6 - Math.round(((4* takeCoins6)/100)); // формула для передачи коинов
    awardCoins7 += coinsGive7 - Math.round(((4* takeCoins7)/100)); // формула для передачи коинов
    awardCoins8 += coinsGive8 - Math.round(((4* takeCoins8)/100)); // формула для передачи коинов
    awardCoins9 += coinsGive9 - Math.round(((4* takeCoins9)/100)); // формула для передачи коинов
    coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
    await db.updateMoney(userMain, coinsMain); // вывод userMain
    await db.updateMoney(userGive, awardCoins); // вывод userGive
    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
    await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
    await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
    await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
    await db.updateMoney(userGive9, awardCoins9); // вывод userGive8
    
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
            .addFields(
                {
                    name: '**Пользователь**',
                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n`,
                    inline: true,
                },
                {
                    name: '**Количество**',
                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:`,
                    inline: true,
                },
            )
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь11') == null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true ||
    interaction.options.getUser('пользователь5').bot == true ||
    interaction.options.getUser('пользователь6').bot == true ||
    interaction.options.getUser('пользователь7').bot == true ||
    interaction.options.getUser('пользователь8').bot == true ||
    interaction.options.getUser('пользователь9').bot == true ||
    interaction.options.getUser('пользователь10').bot == true) {
    {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })  
    }
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10')
    ) {
    return interaction.reply ({
    embeds: [
        new EmbedBuilder()
        .setTitle(`Передать коины`)
        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
        .setColor('#36393F')
        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
    ],
    ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
    
    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
    let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
    let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
    let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
    let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
    
    let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10;
    
    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
    let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
    let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
    let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
    let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
    let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
    let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
    let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
    
    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
    let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
    let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
    let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
    let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
    let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
    let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
    let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
    
    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
    let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
    let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
    let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
    let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
    let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
    let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
    let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
    
    let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
    let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    let embedCoins5 = interaction.options.getNumber('количество5') - ((4* takeCoins5)/100); // информация сколько передали коинов для эмбеда
    let embedCoins6 = interaction.options.getNumber('количество6') - ((4* takeCoins6)/100); // информация сколько передали коинов для эмбеда
    let embedCoins7 = interaction.options.getNumber('количество7') - ((4* takeCoins7)/100); // информация сколько передали коинов для эмбеда
    let embedCoins8 = interaction.options.getNumber('количество8') - ((4* takeCoins8)/100); // информация сколько передали коинов для эмбеда
    let embedCoins9 = interaction.options.getNumber('количество9') - ((4* takeCoins9)/100); // информация сколько передали коинов для эмбеда
    let embedCoins10 = interaction.options.getNumber('количество10') - ((4* takeCoins10)/100); // информация сколько передали коинов для эмбеда
    
    let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10;
    
    awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
    awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
    awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
    awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
    awardCoins5 += coinsGive5 - Math.round(((4* takeCoins5)/100)); // формула для передачи коинов
    awardCoins6 += coinsGive6 - Math.round(((4* takeCoins6)/100)); // формула для передачи коинов
    awardCoins7 += coinsGive7 - Math.round(((4* takeCoins7)/100)); // формула для передачи коинов
    awardCoins8 += coinsGive8 - Math.round(((4* takeCoins8)/100)); // формула для передачи коинов
    awardCoins9 += coinsGive9 - Math.round(((4* takeCoins9)/100)); // формула для передачи коинов
    awardCoins10 += coinsGive10 - Math.round(((4* takeCoins10)/100)); // формула для передачи коинов
    coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
    await db.updateMoney(userMain, coinsMain); // вывод userMain
    await db.updateMoney(userGive, awardCoins); // вывод userGive
    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
    await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
    await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
    await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
    await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
    await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
    
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
            .addFields(
                {
                    name: '**Пользователь**',
                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n`,
                    inline: true,
                },
                {
                    name: '**Количество**',
                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:`,
                    inline: true,
                },
            )
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') == null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true ||
    interaction.options.getUser('пользователь5').bot == true ||
    interaction.options.getUser('пользователь6').bot == true ||
    interaction.options.getUser('пользователь7').bot == true ||
    interaction.options.getUser('пользователь8').bot == true ||
    interaction.options.getUser('пользователь9').bot == true ||
    interaction.options.getUser('пользователь10').bot == true ||
    interaction.options.getUser('пользователь11').bot == true) {
    {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })  
    }
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') 
    ) {
    return interaction.reply ({
    embeds: [
        new EmbedBuilder()
        .setTitle(`Передать коины`)
        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
        .setColor('#36393F')
        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
    ],
    ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
    
    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
    let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
    let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
    let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
    let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
    let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
    
    let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11;
    
    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
    let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
    let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
    let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
    let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
    let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
    let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
    let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
    let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
    
    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
    let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
    let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
    let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
    let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
    let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
    let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
    let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
    let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
    
    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
    let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
    let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
    let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
    let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
    let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
    let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
    let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
    let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
    
    let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
    let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    let embedCoins5 = interaction.options.getNumber('количество5') - ((4* takeCoins5)/100); // информация сколько передали коинов для эмбеда
    let embedCoins6 = interaction.options.getNumber('количество6') - ((4* takeCoins6)/100); // информация сколько передали коинов для эмбеда
    let embedCoins7 = interaction.options.getNumber('количество7') - ((4* takeCoins7)/100); // информация сколько передали коинов для эмбеда
    let embedCoins8 = interaction.options.getNumber('количество8') - ((4* takeCoins8)/100); // информация сколько передали коинов для эмбеда
    let embedCoins9 = interaction.options.getNumber('количество9') - ((4* takeCoins9)/100); // информация сколько передали коинов для эмбеда
    let embedCoins10 = interaction.options.getNumber('количество10') - ((4* takeCoins10)/100); // информация сколько передали коинов для эмбеда
    let embedCoins11 = interaction.options.getNumber('количество11') - ((4* takeCoins11)/100); // информация сколько передали коинов для эмбеда
    
    let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11;
    
    awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
    awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
    awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
    awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
    awardCoins5 += coinsGive5 - Math.round(((4* takeCoins5)/100)); // формула для передачи коинов
    awardCoins6 += coinsGive6 - Math.round(((4* takeCoins6)/100)); // формула для передачи коинов
    awardCoins7 += coinsGive7 - Math.round(((4* takeCoins7)/100)); // формула для передачи коинов
    awardCoins8 += coinsGive8 - Math.round(((4* takeCoins8)/100)); // формула для передачи коинов
    awardCoins9 += coinsGive9 - Math.round(((4* takeCoins9)/100)); // формула для передачи коинов
    awardCoins10 += coinsGive10 - Math.round(((4* takeCoins10)/100)); // формула для передачи коинов
    awardCoins11 += coinsGive11 - Math.round(((4* takeCoins11)/100)); // формула для передачи коинов
    coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
    await db.updateMoney(userMain, coinsMain); // вывод userMain
    await db.updateMoney(userGive, awardCoins); // вывод userGive
    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
    await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
    await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
    await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
    await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
    await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
    await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
    
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
            .addFields(
                {
                    name: '**Пользователь**',
                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n`,
                    inline: true,
                },
                {
                    name: '**Количество**',
                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:\n${Math.round(embedCoins11)} :coin:`,
                    inline: true,
                },
            )
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
    }
    } else if (mainCoins >= sumCoins && interaction.options.getUser('пользователь12') !== null) {
    if (interaction.options.getUser('пользователь').bot == true ||
    interaction.options.getUser('пользователь2').bot == true || 
    interaction.options.getUser('пользователь3').bot == true ||
    interaction.options.getUser('пользователь4').bot == true ||
    interaction.options.getUser('пользователь5').bot == true ||
    interaction.options.getUser('пользователь6').bot == true ||
    interaction.options.getUser('пользователь7').bot == true ||
    interaction.options.getUser('пользователь8').bot == true ||
    interaction.options.getUser('пользователь9').bot == true ||
    interaction.options.getUser('пользователь10').bot == true ||
    interaction.options.getUser('пользователь11').bot == true ||
    interaction.options.getUser('пользователь12').bot == true) {
    {
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
        ],
        ephemeral: true
    })  
    }
    } else if (interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь2') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь3') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь2') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь4') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь3') == interaction.options.getUser('пользователь12') ||
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь5') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь4') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь6') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь7') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь8') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь5') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь7') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь6') == interaction.options.getUser('пользователь12') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь8') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь9') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь7') == interaction.options.getUser('пользователь12') ||
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь9') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь10') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь8') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь10') ||
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь11') ||
    interaction.options.getUser('пользователь9') == interaction.options.getUser('пользователь12') ||
    interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь11') || 
    interaction.options.getUser('пользователь10') == interaction.options.getUser('пользователь12') || 
    interaction.options.getUser('пользователь11') == interaction.options.getUser('пользователь12')
    ) {
    return interaction.reply ({
    embeds: [
        new EmbedBuilder()
        .setTitle(`Передать коины`)
        .setDescription(`<@${interaction.user.id}>, один из **пользователей** был не найден, или он является **ботом**, или указали **несколько раз** одного пользователей, или им являетесь **Вы**, или **не правильная последовательность** передачи, поэтому передать :coin: **не получится**`)
        .setColor('#36393F')
        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
    ],
    ephemeral: true
    })
    } else {
    let userMain = interaction.user.id; // айди пользоваателя, который отдает коины
    let coinsMain = +await db.getMoney(`${interaction.user.id}`); // коины пользователя, который отдает коины
    
    let takeCoins = interaction.options.getNumber('количество'); // значения для того, чтобы отнять коины userMain
    let takeCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы отнять коины userMain
    let takeCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы отнять коины userMain
    let takeCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы отнять коины userMain
    let takeCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы отнять коины userMain
    let takeCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы отнять коины userMain
    let takeCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы отнять коины userMain
    let takeCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы отнять коины userMain
    let takeCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы отнять коины userMain
    let takeCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы отнять коины userMain
    let takeCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы отнять коины userMain
    let takeCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы отнять коины userMain
    
    let sumTake = takeCoins + takeCoins2 + takeCoins3 +takeCoins4 + takeCoins5 + takeCoins6 + takeCoins7 + takeCoins8 + takeCoins9 + takeCoins10 + takeCoins11 + takeCoins12;
    
    let awardCoins = interaction.options.getNumber('количество'); // значения для того, чтобы прибавить коины userGive
    let awardCoins2 = interaction.options.getNumber('количество2'); // значения для того, чтобы прибавить коины userGive2
    let awardCoins3 = interaction.options.getNumber('количество3'); // значения для того, чтобы прибавить коины userGive3
    let awardCoins4 = interaction.options.getNumber('количество4'); // значения для того, чтобы прибавить коины userGive4
    let awardCoins5 = interaction.options.getNumber('количество5'); // значения для того, чтобы прибавить коины userGive5
    let awardCoins6 = interaction.options.getNumber('количество6'); // значения для того, чтобы прибавить коины userGive6
    let awardCoins7 = interaction.options.getNumber('количество7'); // значения для того, чтобы прибавить коины userGive7
    let awardCoins8 = interaction.options.getNumber('количество8'); // значения для того, чтобы прибавить коины userGive8
    let awardCoins9 = interaction.options.getNumber('количество9'); // значения для того, чтобы прибавить коины userGive9
    let awardCoins10 = interaction.options.getNumber('количество10'); // значения для того, чтобы прибавить коины userGive10
    let awardCoins11 = interaction.options.getNumber('количество11'); // значения для того, чтобы прибавить коины userGive11
    let awardCoins12 = interaction.options.getNumber('количество12'); // значения для того, чтобы прибавить коины userGive12
    
    let userGive = interaction.options.getUser('пользователь').id; // айди пользователя, которому отдают коины
    let userGive2 = interaction.options.getUser('пользователь2').id; // айди пользователя, которому отдают коины
    let userGive3 = interaction.options.getUser('пользователь3').id; // айди пользователя, которому отдают коины
    let userGive4 = interaction.options.getUser('пользователь4').id; // айди пользователя, которому отдают коины
    let userGive5 = interaction.options.getUser('пользователь5').id; // айди пользователя, которому отдают коины
    let userGive6 = interaction.options.getUser('пользователь6').id; // айди пользователя, которому отдают коины
    let userGive7 = interaction.options.getUser('пользователь7').id; // айди пользователя, которому отдают коины
    let userGive8 = interaction.options.getUser('пользователь8').id; // айди пользователя, которому отдают коины
    let userGive9 = interaction.options.getUser('пользователь9').id; // айди пользователя, которому отдают коины
    let userGive10 = interaction.options.getUser('пользователь10').id; // айди пользователя, которому отдают коины
    let userGive11 = interaction.options.getUser('пользователь11').id; // айди пользователя, которому отдают коины
    let userGive12 = interaction.options.getUser('пользователь12').id; // айди пользователя, которому отдают коины
    
    let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // коины с бд сколько на данный момент у userGive
    let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`); // коины с бд сколько на данный момент у userGive2
    let coinsGive3 = +await db.getMoney(`${interaction.options.getUser('пользователь3').id}`); // коины с бд сколько на данный момент у userGive3
    let coinsGive4 = +await db.getMoney(`${interaction.options.getUser('пользователь4').id}`); // коины с бд сколько на данный момент у userGive4
    let coinsGive5 = +await db.getMoney(`${interaction.options.getUser('пользователь5').id}`); // коины с бд сколько на данный момент у userGive5
    let coinsGive6 = +await db.getMoney(`${interaction.options.getUser('пользователь6').id}`); // коины с бд сколько на данный момент у userGive6
    let coinsGive7 = +await db.getMoney(`${interaction.options.getUser('пользователь7').id}`); // коины с бд сколько на данный момент у userGive7
    let coinsGive8 = +await db.getMoney(`${interaction.options.getUser('пользователь8').id}`); // коины с бд сколько на данный момент у userGive8
    let coinsGive9 = +await db.getMoney(`${interaction.options.getUser('пользователь9').id}`); // коины с бд сколько на данный момент у userGive9
    let coinsGive10 = +await db.getMoney(`${interaction.options.getUser('пользователь10').id}`); // коины с бд сколько на данный момент у userGive10
    let coinsGive11 = +await db.getMoney(`${interaction.options.getUser('пользователь11').id}`); // коины с бд сколько на данный момент у userGive11
    let coinsGive12 = +await db.getMoney(`${interaction.options.getUser('пользователь12').id}`); // коины с бд сколько на данный момент у userGive12
    
    let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100); // информация сколько передали коинов для эмбеда
    let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100); // информация сколько передали коинов для эмбеда
    let embedCoins3 = interaction.options.getNumber('количество3') - ((4* takeCoins3)/100); // информация сколько передали коинов для эмбеда
    let embedCoins4 = interaction.options.getNumber('количество4') - ((4* takeCoins4)/100); // информация сколько передали коинов для эмбеда
    let embedCoins5 = interaction.options.getNumber('количество5') - ((4* takeCoins5)/100); // информация сколько передали коинов для эмбеда
    let embedCoins6 = interaction.options.getNumber('количество6') - ((4* takeCoins6)/100); // информация сколько передали коинов для эмбеда
    let embedCoins7 = interaction.options.getNumber('количество7') - ((4* takeCoins7)/100); // информация сколько передали коинов для эмбеда
    let embedCoins8 = interaction.options.getNumber('количество8') - ((4* takeCoins8)/100); // информация сколько передали коинов для эмбеда
    let embedCoins9 = interaction.options.getNumber('количество9') - ((4* takeCoins9)/100); // информация сколько передали коинов для эмбеда
    let embedCoins10 = interaction.options.getNumber('количество10') - ((4* takeCoins10)/100); // информация сколько передали коинов для эмбеда
    let embedCoins11 = interaction.options.getNumber('количество11') - ((4* takeCoins11)/100); // информация сколько передали коинов для эмбеда
    let embedCoins12 = interaction.options.getNumber('количество12') - ((4* takeCoins12)/100); // информация сколько передали коинов для эмбеда
    
    let sumEmbed = embedCoins + embedCoins2 + embedCoins3 + embedCoins4 +embedCoins5 + embedCoins6 + embedCoins7 + embedCoins8 + embedCoins9 + embedCoins10 + embedCoins11 + embedCoins12;
    
    awardCoins += coinsGive - Math.round(((4* takeCoins)/100)); // формула для передачи коинов
    awardCoins2 += coinsGive2 - Math.round(((4* takeCoins2)/100)); // формула для передачи коинов
    awardCoins3 += coinsGive3 - Math.round(((4* takeCoins3)/100)); // формула для передачи коинов
    awardCoins4 += coinsGive4 - Math.round(((4* takeCoins4)/100)); // формула для передачи коинов
    awardCoins5 += coinsGive5 - Math.round(((4* takeCoins5)/100)); // формула для передачи коинов
    awardCoins6 += coinsGive6 - Math.round(((4* takeCoins6)/100)); // формула для передачи коинов
    awardCoins7 += coinsGive7 - Math.round(((4* takeCoins7)/100)); // формула для передачи коинов
    awardCoins8 += coinsGive8 - Math.round(((4* takeCoins8)/100)); // формула для передачи коинов
    awardCoins9 += coinsGive9 - Math.round(((4* takeCoins9)/100)); // формула для передачи коинов
    awardCoins10 += coinsGive10 - Math.round(((4* takeCoins10)/100)); // формула для передачи коинов
    awardCoins11 += coinsGive11 - Math.round(((4* takeCoins11)/100)); // формула для передачи коинов
    awardCoins12 += coinsGive12 - Math.round(((4* takeCoins12)/100)); // формула для передачи коинов
    coinsMain -= sumTake; // формула которая забирает коины у userMain
    
    
    await db.updateMoney(userMain, coinsMain); // вывод userMain
    await db.updateMoney(userGive, awardCoins); // вывод userGive
    await db.updateMoney(userGive2, awardCoins2); // вывод userGive2
    await db.updateMoney(userGive3, awardCoins3); // вывод userGive3
    await db.updateMoney(userGive4, awardCoins4); // вывод userGive4
    await db.updateMoney(userGive5, awardCoins5); // вывод userGive5
    await db.updateMoney(userGive6, awardCoins6); // вывод userGive6
    await db.updateMoney(userGive7, awardCoins7); // вывод userGive7
    await db.updateMoney(userGive8, awardCoins8); // вывод userGive8
    await db.updateMoney(userGive9, awardCoins9); // вывод userGive9
    await db.updateMoney(userGive10, awardCoins10); // вывод userGive10
    await db.updateMoney(userGive11, awardCoins11); // вывод userGive11
    await db.updateMoney(userGive12, awardCoins12); // вывод userGive12
    
    return interaction.reply ({
        embeds: [
            new EmbedBuilder()
            .setTitle(`Передать коины`)
            .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${Math.round(sumEmbed)} :coin:, включая комиссию **4%.**`)
            .addFields(
                {
                    name: '**Пользователь**',
                    value: `<@${interaction.options.getUser('пользователь').id}>\n<@${interaction.options.getUser('пользователь2').id}>\n<@${interaction.options.getUser('пользователь3').id}>\n<@${interaction.options.getUser('пользователь4').id}>\n<@${interaction.options.getUser('пользователь5').id}>\n<@${interaction.options.getUser('пользователь6').id}>\n<@${interaction.options.getUser('пользователь7').id}>\n<@${interaction.options.getUser('пользователь8').id}>\n<@${interaction.options.getUser('пользователь9').id}>\n<@${interaction.options.getUser('пользователь10').id}>\n<@${interaction.options.getUser('пользователь11').id}>\n<@${interaction.options.getUser('пользователь12').id}>`,
                    inline: true,
                },
                {
                    name: '**Количество**',
                    value: `${Math.round(embedCoins)} :coin:\n${Math.round(embedCoins2)} :coin:\n${Math.round(embedCoins3)} :coin:\n${Math.round(embedCoins4)} :coin:\n${Math.round(embedCoins5)} :coin:\n${Math.round(embedCoins6)} :coin:\n${Math.round(embedCoins7)} :coin:\n${Math.round(embedCoins8)} :coin:\n${Math.round(embedCoins9)} :coin:\n${Math.round(embedCoins10)} :coin:\n${Math.round(embedCoins11)} :coin:\n${Math.round(embedCoins12)} :coin:`,
                    inline: true,
                },
            )
            .setColor('#36393F')
            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
        ],
        ephemeral: false
    })
    }
    }
}
}  
    
}