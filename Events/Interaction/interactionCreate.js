const {Client, CommandInteraction, InteractionType, EmbedBuilder, ModalBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, TextInputBuilder, showModal, TextInputStyle} = require('discord.js')
const {ApplicationCommand} = InteractionType

module.exports = {
    name: 'interactionCreate',

    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client     
     * */

    async execute(interaction, client) {

        
        
        const staffRow = new ActionRowBuilder(); // кнопка 'Подать заявку'
        staffRow.addComponents(
            new ButtonBuilder()
            .setCustomId('staff-answer')
            .setStyle(ButtonStyle.Secondary)
            .setLabel('Подать заявку')
        );
        const staffModerator = new ModalBuilder()
            .setCustomId('staff-moderator')
			.setTitle('Заявка на должность модератора');
            const moderatorName = new TextInputBuilder()
            .setCustomId('moderatorName')
            .setLabel("ВАШЕ ИМЯ И ВОЗРАСТ")
            .setStyle(TextInputStyle.Short);
            const name = new ActionRowBuilder().addComponents(moderatorName);
            staffModerator.addComponents(name);

        const { user, guild, commandName, member, type } = interaction

        if(!guild || user.bot) return;
        //if (!interaction.isSelectMenu()) return;
        if (interaction.customId === 'staff') // Стафф селект, ну чтобы они работали
        {
            if(interaction.values[0] == 'page_1') return interaction.reply({embeds: [
                new EmbedBuilder()
                .setTitle('Набор на должность Модератора!')
                .setDescription(`Модераторы — следят за соблюдением **правил сервера** в текстовых и голосовых каналах, а также разбирают **жалобы от пользователей**.\n\n**Что от вас требуется:**\n16 полных лет\nЗнание правил сервера и 1 месяц без нарушений\nАдекватность, Стрессоустойчивость и Грамотность\n4 часа свободного времени в день\n\n**Что вы получите от нас:**\nОчень дружный коллектив и команду\nВозможность отлично провести время\nЛичные роли, донатные привилегии и многое другое\nЦенный опыт и знания работы в данной сфере\nОплату в виде серверной валюты\n\nПо всем вопросам обращаться к:`)
                .setImage('https://i.pinimg.com/originals/00/57/d9/0057d92e1a5fbee22727db9997fd09d1.gif')
                .setColor('#5EDEDC')
                .setFooter({text:`Если ты нам подойдёшь - мы обязательно свяжемся с тобой`})
            ], ephemeral: true, components: [staffRow]})
            else if(interaction.values[0] == 'page_2') return interaction.reply({embeds: [
                new EmbedBuilder()
                .setTitle('Набор на должность Саппорта!')
                .setDescription(`Саппорты — встречают новичков на сервере и **проводят им экскурсию**, а также отвечают на все **вопросы пользователей по серверу**.\n\n**Что от вас требуется:**\n16 полных лет\nЗнание правил сервера и 1 месяц без нарушений\nАдекватность, Стрессоустойчивость и Грамотность\n4 часа свободного времени в день\n\n**Что вы получите от нас:**\nОчень дружный коллектив и команду\nВозможность отлично провести время\nЛичные роли, донатные привилегии и многое другое\nЦенный опыт и знания работы в данной сфере\nОплату в виде серверной валюты\n\nПо всем вопросам обращаться к:`)
                .setImage('https://i.pinimg.com/originals/a8/98/c3/a898c3211645a31f746ac864361860e1.gif')
                .setColor('#5B3F98')
                .setFooter({text:`Если ты нам подойдёшь - мы обязательно свяжемся с тобой`})
            ], ephemeral: true, components: [staffRow]})
            else if(interaction.values[0] == 'page_3') return interaction.reply({embeds: [
                new EmbedBuilder()
                .setTitle('Набор на должность Ивентера!')
                .setDescription(`Ивентеры — проводят **мероприятия** для сервера в категории "ивенты". В их числе развлекательные игры на большое количество людей, настольные игры для уютной атмосферы и самые разные игры, чтобы пользователи точно не заскучали.\n\n**Что от вас требуется:**\n16 полных лет\nЗнание правил сервера и 1 месяц без нарушений\nАдекватность, Стрессоустойчивость и Грамотность\n4 часа свободного времени в день\n\n**Что вы получите от нас:**\nОчень дружный коллектив и команду\nВозможность отлично провести время\nЛичные роли, донатные привилегии и многое другое\nЦенный опыт и знания работы в данной сфере\nОплату в виде серверной валюты\n\nПо всем вопросам обращаться к:`)
                .setImage('https://images-ext-2.discordapp.net/external/jSWH-ldZBy8z0-1NjYeheourizMletoTIZyjS7K-8xU/https/i.pinimg.com/originals/ac/f3/0e/acf30ee54206580bca0cb291eab559f4.gif')
                .setColor('#EE785D')
                .setFooter({text:`Если ты нам подойдёшь - мы обязательно свяжемся с тобой`})
            ], ephemeral: true, components: [staffRow]})
            else if(interaction.values[0] == 'page_4') return interaction.reply({embeds: [
                new EmbedBuilder()
                .setTitle('Набор на должность Клозера!')
                .setDescription(`Клозеры — проводят **игровые клозы** по Доте, Валоранту и прочим играм в разделе ивентов..\n\n**Что от вас требуется:**\n16 полных лет\nАдекватность, Стрессоустойчивость и Грамотность\nЧас свободного времени в день\n\n**Что вы получите от нас:**\nОчень дружный коллектив и команду\nВозможность отлично провести время\nЛичные роли, донатные привилегии и многое другое\nЦенный опыт и знания работы в данной сфере\nОплату в виде серверной валюты\n\nПо всем вопросам обращаться к:`)
                .setImage('https://i.pinimg.com/originals/81/f4/a4/81f4a429035e1c8faec2078257a2eb7f.gif')
                .setColor('#91222D')
                .setFooter({text:`Если ты нам подойдёшь - мы обязательно свяжемся с тобой`})
            ], ephemeral: true, components: [staffRow]})
        
        
        
        
        
        } else if (interaction.customId === 'avatar_null') // селект аватар, без указания пользователя
         {
            if(interaction.values[0] == 'page_1') {
                await interaction.deferUpdate();
                return interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`Ваша аватарка`)
                        .setDescription(`<@${interaction.user.id}>, это Ваша **аватарка**`)
                        .setColor('#36393F')
                        .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                        .setImage(interaction.user.displayAvatarURL({dinamic: true, size: 512}))
                    ],
                })
            } else if (interaction.values[0] == 'page_2') {
                    if (interaction.member.avatar == undefined) {
                        await interaction.deferUpdate();
                        return interaction.editReply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle(`Ваша аватарка на сервере`)
                                .setDescription(`<@${interaction.user.id}>, у Вас **нет** аватарки **на сервере**`)
                                .setColor('#36393F')
                                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                            ],
                        })

                    } else if (interaction.member.avatar !== undefined) {
                        await interaction.deferUpdate();
                        return  interaction.editReply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle(`Ваша аватарка на сервере`)
                                .setDescription(`<@${interaction.user.id}>, это Ваша **аватарка** на сервере`)
                                .setColor('#36393F')
                                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                                .setImage(interaction.member.displayAvatarURL({ dynamic: true, size: 4096 }))
                            ],
                        })
                    }
            } else if (interaction.values[0] == 'page_3') {
                await interaction.deferUpdate();
                        return  interaction.editReply({
                            embeds: [
                                new EmbedBuilder()
                                .setDescription(`Я ХЗ КАК БРАТЬ ИНФУ О БАННЕРЕ`)
                                .setColor('#36393F')
                                .setThumbnail(interaction.user.displayAvatarURL({dinamic: true}))
                            ],
                        })
         
            }
        
        
        
        
        } else if (interaction.customId === 'memory') {
            if (interaction.values[0] == 'page_1') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀ ⠀⠀ ⠀  Серверные роли\`\`\`\n・<:boost:1019805352910389249>  — выдается за буст сервера\n\n・<:love:1019805354068029481> — выдается при создании любовной комнаты\n\n・<:curator:1019805357662552095> — проявление активности ночью\n\n・<:lounge:1019777505336512684> — доступ отправлять изображения в чат\n\n・<:eventor:1019777505336512684> — роль для получения уведомлений об ивентах\n\n・<:closer:1019777504136925224> — роль для получения уведомлений о клозах\n\n・<:moderator:1019777508427702313> — девушка\n・<:support:1019777507064557639> — парень\n・<:tarakan:1019805356181966858> — скрытый гендер`)
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_2') return
            else if (interaction.values[0] == 'page_3') return
            else if (interaction.values[0] == 'page_4') return
        }


        if(type !== ApplicationCommand) return;
        const command = client.commands.get(commandName)

        if(!command) return interaction.reply(interaction, 'X', 'Error command!', true) && client.
        command.delete(commandName)
        if(command.UserPerms && command.UserPerms.length !== 0) if (!member.permissions.has(command.UserPerms)) return Reply
        (interaction, 'X', `You need \`${command.UserPerms.join(', ')}\` permission(s) to execute this command!`, true)
        if(command.BotPerms && command.BotPerms.length !== 0) if (!member.permissions.has(command.BotPerms)) return Reply
        (interaction, 'X', `I need \`${command.BotPerms.join(', ')}\` permission(s) to execute this command!`, true)
        
        command.execute(interaction, client)
    }
}
