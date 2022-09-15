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
            max_value: 1000000,
            min_value: 1,
            required: true
        },
        {
            name: 'пользователь',
            description: 'У кого вы хотите забрать',
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

        if(interaction.user.id == '288313836589678593' || interaction.user.id == '343086478554824705' || interaction.member.roles.cache.has('1019253016970412095') || interaction.member.roles.cache.has('1019253443157839892')) // проверка на айди, чтобы использовать команды или роль
        {
            try {
                a = await interaction.guild.members.fetch(interaction.options.getUser('пользователь').id);
                a = a.user;
            } catch(err)
            { 
               return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Передать коины`)
                        .setDescription(`<@${interaction.user.id}>, пользователь **не найден**, поэтому передать :coin: **не получится**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                    ],
                    ephemeral: false
                    
                })
            };
    
            let firstCoins = await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // данные с бд, сколько у юзера коинов
            let lastCoins = interaction.options.getNumber('количество'); // данные сколько у юзера заберут
                if(firstCoins >= lastCoins) // проверка если у юзера меньше коинов, чем хотят забрать, то else
                {   let user = interaction.options.getUser('пользователь').id; // информация юзера с бд - айди
                    let coins = await db.getMoney(`${interaction.options.getUser('пользователь').id}`); // информация юзера с бд - коины
    
                    let embedCoins = interaction.options.getNumber('количество'); // количество сколько забрали у юзера для эмбеда
                    let awardCoins = interaction.options.getNumber('количество'); // количество сколько забрали у юзера для суммы 
    
                    coins -= awardCoins; // формула вычытания коинов
    
                await db.updateMoney(user, coins); // вывод
                interaction.reply ({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Забрать коины`)
                        .setDescription(`<@${interaction.user.id}>, вы успешно **забрали** ${embedCoins} :coin: у <@${interaction.options.getUser('пользователь').id}>. Теперь у пользователя ${coins} :coin:.`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                    ],
                    ephemeral: false
                })
         } else {
            let coins = await db.getMoney(`${interaction.options.getUser('пользователь').id}`);
            let embedCoins = interaction.options.getNumber('количество');
            interaction.reply ({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Забрать коины`)
                    .setDescription(`<@${interaction.user.id}>, вы не можете **забрать** у пользователя ${embedCoins} :coin:, потому что у него сейчас ${coins} :coin:.`)
                    .setColor('#36393F')
                    .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))    
                ],
                ephemeral: true
            })
         }

        } else {
            interaction.reply({
                content: 'У Вас недостаточно прав для выполнения этой команды',
                ephemeral: true });
        }
       
    }
}