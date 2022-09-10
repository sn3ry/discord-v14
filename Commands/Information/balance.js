const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')
const db = require('../../database/user.controller');
const { user } = require('../../Structures/main');


module.exports = {
    name: 'balance',
    description: 'Посмотреть свой баланс',
    options: [
        {
            name: 'пользователь',
            description: 'Или чужой',
            type: 6,
            required: false
        }
    ],
    category: 'Information',
    /** 
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

            async execute (interaction, client) {
                
                //let user = interaction.options.getUser('пользователь').id;
                if(interaction.options.getUser('пользователь') == null){
                    let authorCoins = await db.getMoney(`${interaction.user.id}`);
                    interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Текущий баланс — ${interaction.user.tag}`)
                            .setColor('#36393F')
                            .addFields(
                                {name: '> **Коины:**', value: `\`\`\`${authorCoins}\`\`\`` ,inline: true},
                                {name: '> **Монеты:**', value: `\`\`\`${authorCoins}\`\`\`` ,inline: true},
                                )
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                        ],
                        ephemeral: false
                    })
                } else {
                    let user;
                        try {
                                interaction.guild.members.fetch(interaction.options.getUser('пользователь').id)
                                user = interaction.options.getUser('пользователь').id;
                                console.log(user)
                            } catch(err){
                                interaction.guild.members.fetch(interaction.options.getUser('пользователь').id)
                                console.log(err)
                                user = interaction.user.id;
                                console.log(user);
                            };
                        }  
                            
                    let coins = await db.getMoney(`${user}`);
                    console.log(user.tag)
                    interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Текущий баланс — ${user.tag}`)
                            .setColor('#36393F')
                            .addFields(
                                {name: '> **Коины:**', value: `\`\`\`${coins}\`\`\`` ,inline: true},
                                {name: '> **Монеты:**', value: `\`\`\`${coins}\`\`\`` ,inline: true},
                                )
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                        ],
                        ephemeral: false
                    })
                }
            }
    