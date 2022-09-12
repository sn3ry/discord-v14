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

        if (mainCoins >= sumCoins && interaction.options.getUser('пользователь') == interaction.user.id) // проверка на самого себя
         {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы **не можете** передавать **сами себе** коины`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
        }
         
        else if ((mainCoins >= sumCoins && interaction.options.getUser('пользователь').bot == true)) // проверка на ботов если пользователь им является
         {
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы **не можете** передавать **ботам** коины`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
                ],
                ephemeral: true
            })
        }
        else if(mainCoins >= sumCoins && interaction.options.getUser('пользователь2') == null) // если 2го пользователя нет
        {

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

        return interaction.reply ({
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

 
    } 
    else if (mainCoins >= sumCoins && (interaction.options.getUser('пользователь').bot == true || interaction.options.getUser('пользователь2').bot == true))
    {
        return interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, вы **не можете** передавать **ботам** коины`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))   
            ],
            ephemeral: true
        })
    }
    else if(mainCoins >= sumCoins && interaction.options.getUser('пользователь3') == null) // если 3го пользователь нет
    {
        let userMain = interaction.user.id;
        let coinsMain = +await db.getMoney(`${interaction.user.id}`);

        let takeCoins = interaction.options.getNumber('количество');
        let takeCoins2 = interaction.options.getNumber('количество2');

        let sumTake = takeCoins + takeCoins2;

        let awardCoins = interaction.options.getNumber('количество');
        let awardCoins2 = interaction.options.getNumber('количество2');

 
        let userGive = interaction.options.getUser('пользователь').id;
        let userGive2 = interaction.options.getUser('пользователь2').id;

        let coinsGive = +await db.getMoney(`${interaction.options.getUser('пользователь').id}`);
        let coinsGive2 = +await db.getMoney(`${interaction.options.getUser('пользователь2').id}`);

        let embedCoins = interaction.options.getNumber('количество') - ((4* takeCoins)/100);
        let embedCoins2 = interaction.options.getNumber('количество2') - ((4* takeCoins2)/100);

        let sumEmbed = embedCoins + embedCoins2;

        coinsMain -= sumTake;

        if ( userGive == userGive2 ) {
            
            awardCoins +=  awardCoins2 + coinsGive - ((4* sumTake)/100);

            await db.updateMoney(userMain, coinsMain);
            await db.updateMoney(userGive, awardCoins);

            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin: <@${interaction.options.getUser('пользователь').id}>, включая комиссию **4%.**`)
                    .addFields(
                        {
                            name: '**Пользователь**',
                            value: `<@${interaction.options.getUser('пользователь').id}>`,
                            inline: true,
                        },
                        {
                            name: '**Количество**',
                            value: `${sumEmbed} :coin:`,
                            inline: true,
                        },
                    )
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: false
            })

        } else {
            awardCoins += coinsGive - ((4* takeCoins)/100);
            awardCoins2 += coinsGive2 - ((4* takeCoins2)/100);

            await db.updateMoney(userMain, coinsMain);
            await db.updateMoney(userGive, awardCoins);
            await db.updateMoney(userGive2, awardCoins2);
           
            return interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Передать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы успешно **передали** ${sumEmbed} :coin:, включая комиссию **4%.**`)
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


    }
    else // если у вас нет коинов
    {
        let coinsMain = +await db.getMoney(`${interaction.user.id}`);
        let embedCoins = interaction.options.getNumber('количество') - coinsMain;
        interaction.reply ({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Передать коины`)
                .setDescription(`<@${interaction.user.id}>, у **Вас** не хватает ${sumCoins} :coin:.`)
                .setColor('#36393F')
                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
            ],
            ephemeral: true
        })
    }
     }
}