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
                
                let a;
                if(interaction.options.getUser('пользователь') == null){
                    let authorCoins = await db.getMoney(`${interaction.user.id}`);
                    return interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Текущий баланс — ${interaction.user.tag}`)
                            .setColor('#36393F')
                            .addFields(
                                {name: '> **Коины:**', value: `\`\`\`${authorCoins}\`\`\`` ,inline: true},
                                {name: '> **Монеты:**', value: `\`\`\`0\`\`\`` ,inline: true},
                                )
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                        ],
                        ephemeral: false
                    })
                } else {
                        try {
                                a = await interaction.guild.members.fetch(interaction.options.getUser('пользователь').id);
                                a = a.user;
                            } catch(err)
                            { 
                                a = interaction.user;
                            };
                        }  
                            
                    let coins = await db.getMoney(`${a.id}`);
                    interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Текущий баланс — ${a.username + "#" + a.discriminator}`)
                            .setColor('#36393F')
                            .addFields(
                                {name: '> **Коины:**', value: `\`\`\`${coins}\`\`\`` ,inline: true},
                                {name: '> **Монеты:**', value: `\`\`\`0\`\`\`` ,inline: true},
                                )
                            .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                        ],
                        ephemeral: false
                    })
                }
            }
    