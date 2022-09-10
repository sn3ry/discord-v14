const {Client, ChatInputCommandInteraction, EmbedBuilder} = require('discord.js')
const db = require('../../database/user.controller')


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
                    let coins = await db.getMoney(`${interaction.options.getUser('пользователь').id}`);
                    interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setTitle(`Текущий баланс — ${interaction.options.getUser('пользователь').tag}`)
                            .setColor('#36393F')
                            .addFields(
                                {name: '> **Коины:**', value: `\`\`\`${coins}\`\`\`` ,inline: true},
                                {name: '> **Монеты:**', value: `\`\`\`${coins}\`\`\`` ,inline: true},
                                )
                            .setThumbnail(interaction.options.getUser('пользователь').displayAvatarURL({dinamic: true}))    
                        ],
                        ephemeral: false
                    })
                }
            }
    }