const {Client, CommandInteraction, InteractionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, TextInputBuilder, showModal, TextInputStyle, ModalBuilder,} = require('discord.js')
const {ApplicationCommand} = InteractionType

module.exports = {
    name: 'interactionCreate',

    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client     
     * */

    async execute(interaction, client) {

        // ..............................................КНОПКИ..............................................
        
        const moderRow = new ActionRowBuilder(); // кнопка 'Подать заявку на модера'
        moderRow.addComponents(
            new ButtonBuilder()
            .setCustomId('moderator-answer')
            .setStyle(ButtonStyle.Secondary)
            .setLabel('Подать заявку')
        );
        const supRow = new ActionRowBuilder(); // кнопка 'Подать заявку на модера'
        supRow.addComponents(
            new ButtonBuilder()
            .setCustomId('support-answer')
            .setStyle(ButtonStyle.Secondary)
            .setLabel('Подать заявку')
        );
        const eventRow = new ActionRowBuilder(); // кнопка 'Подать заявку на ивентера'
        eventRow.addComponents(
            new ButtonBuilder()
            .setCustomId('event-answer')
            .setStyle(ButtonStyle.Secondary)
            .setLabel('Подать заявку')
        );
        const closeRow = new ActionRowBuilder(); // кнопка 'Подать заявку на клозера'
        closeRow.addComponents(
            new ButtonBuilder()
            .setCustomId('close-answer')
            .setStyle(ButtonStyle.Secondary)
            .setLabel('Подать заявку')
        );

        const linkRow = new ActionRowBuilder() // кнопки 'Уведомления в памятке'
        .setComponents(
            new ButtonBuilder()
            .setCustomId('link-event')
            .setStyle(ButtonStyle.Secondary)
            .setEmoji('1019867769849794612'),
            new ButtonBuilder()
            .setCustomId('link-close')
            .setStyle(ButtonStyle.Secondary)
            .setEmoji('1019867771225526312'),
            new ButtonBuilder()
            .setCustomId('link-delete')
            .setStyle(ButtonStyle.Danger)
            .setLabel('Убрать уведомления'),
            );

        const { user, guild, commandName, member, type } = interaction

        if(!guild || user.bot) return;
        //if (!interaction.isSelectMenu()) return;



        // ..............................................СЕЛЕКТЫ..............................................


        if (interaction.customId === 'staff') // стафф селект, ну чтобы они работали
        {
            if(interaction.values[0] == 'page_1') return interaction.reply({embeds: [
                new EmbedBuilder()
                .setTitle('Набор на должность Модератора!')
                .setDescription(`<@&848876544536608768> — следят за соблюдением **правил сервера** в текстовых и голосовых каналах, а также разбирают **жалобы от пользователей**.\n\n<:point:1019891764192088095>**Что от вас требуется:**\n<:invis:1019891765693657118>16 полных лет\n<:invis:1019891765693657118>Знание правил сервера и 1 месяц без нарушений\n<:invis:1019891765693657118>Адекватность, Стрессоустойчивость и Грамотность\n<:invis:1019891765693657118>4 часа свободного времени в день\n\n<:point:1019891764192088095>**Что вы получите от нас:**\n<:invis:1019891765693657118>Очень дружный коллектив и команду\n<:invis:1019891765693657118>Возможность отлично провести время\n<:invis:1019891765693657118>Личные роли, донатные привилегии и многое другое\n<:invis:1019891765693657118>Ценный опыт и знания работы в данной сфере\n<:invis:1019891765693657118>Оплату в виде серверной валюты\n\n<:point:1019891764192088095>По всем вопросам обращаться к:`)
                .setImage('https://i.pinimg.com/originals/00/57/d9/0057d92e1a5fbee22727db9997fd09d1.gif')
                .setColor('#5EDEDC')
                .setFooter({text:`Если ты нам подойдёшь - мы обязательно свяжемся с тобой`, iconURL: 'https://cdn.discordapp.com/attachments/1012035499688464494/1019897572225204225/879795509596934158.gif?size=4096'})
            ], ephemeral: true, components: [moderRow]})
            else if(interaction.values[0] == 'page_2') return interaction.reply({embeds: [
                new EmbedBuilder()
                .setTitle('Набор на должность Саппорта!')
                .setDescription(`<@&848876547792306217> — встречают новичков на сервере и **проводят им экскурсию**, а также отвечают на все **вопросы пользователей по серверу**.\n\n<:point:1019891764192088095>**Что от вас требуется:**\n<:invis:1019891765693657118>16 полных лет\n<:invis:1019891765693657118>Знание правил и систем сервера\n<:invis:1019891765693657118>Адекватность, Стрессоустойчивость и Грамотность\n<:invis:1019891765693657118>4 часа свободного времени в день\n\n<:point:1019891764192088095>**Что вы получите от нас:**\n<:invis:1019891765693657118>Очень дружный коллектив и команду\n<:invis:1019891765693657118>Возможность отлично провести время\n<:invis:1019891765693657118>Личные роли, донатные привилегии и многие другие плюшки\n<:invis:1019891765693657118>Ценный опыт и знания работы в данной сфере\n<:invis:1019891765693657118>Оплату в виде серверной валюты\n\n<:point:1019891764192088095>По всем вопросам обращаться к:`)
                .setImage('https://i.pinimg.com/originals/a8/98/c3/a898c3211645a31f746ac864361860e1.gif')
                .setColor('#5B3F98')
                .setFooter({text:`Если ты нам подойдёшь - мы обязательно свяжемся с тобой`, iconURL: 'https://cdn.discordapp.com/attachments/1012035499688464494/1019897572225204225/879795509596934158.gif?size=4096'})
            ], ephemeral: true, components: [supRow]})
            else if(interaction.values[0] == 'page_3') return interaction.reply({embeds: [
                new EmbedBuilder()
                .setTitle('Набор на должность Ивентера!')
                .setDescription(`<@&848876547096313896> — проводят **мероприятия** для сервера в категории "ивенты". В их числе развлекательные игры на большое количество людей, настольные игры для уютной атмосферы и самые разные игры, чтобы пользователи точно не заскучали.\n\n<:point:1019891764192088095>**Что от вас требуется:**\n<:invis:1019891765693657118>16 полных лет\n<:invis:1019891765693657118>Знание правил ивентов и иметь опыт участия в них\n<:invis:1019891765693657118>Адекватность, Стрессоустойчивость и Энтузиазм\n<:invis:1019891765693657118>4 часа свободного времени в день\n\n<:point:1019891764192088095>**Что вы получите от нас:**\n<:invis:1019891765693657118>Очень дружный коллектив и команду\n<:invis:1019891765693657118>Отличное времяпровождение в нашем ивент-комьюнити\n<:invis:1019891765693657118>Личные роли, донатные привилегии и многие другие плюшки\n<:invis:1019891765693657118>Ценный опыт и знания работы в данной сфере\n<:invis:1019891765693657118>Оплату в виде серверной валюты\n\n<:point:1019891764192088095>По всем вопросам обращаться к:`)
                .setImage('https://i.pinimg.com/originals/ac/f3/0e/acf30ee54206580bca0cb291eab559f4.gif')
                .setColor('#EE785D')
                .setFooter({text:`Если ты нам подойдёшь - мы обязательно свяжемся с тобой`, iconURL: 'https://cdn.discordapp.com/attachments/1012035499688464494/1019897572225204225/879795509596934158.gif?size=4096'})
            ], ephemeral: true, components: [eventRow]})
            else if(interaction.values[0] == 'page_4') return interaction.reply({embeds: [
                new EmbedBuilder()
                .setTitle('Набор на должность Клозера!')
                .setDescription(`<@&987281849673994260> — проводят **игровые клозы** по Доте, Валоранту и прочим играм в разделе ивентов..\n\n<:point:1019891764192088095>**Что от вас требуется:**\n<:invis:1019891765693657118>16 полных лет\n<:invis:1019891765693657118>Адекватность, Стрессоустойчивость и Грамотность\n<:invis:1019891765693657118>Час свободного времени в день\n\n<:point:1019891764192088095>**Что вы получите от нас:**\n<:invis:1019891765693657118>Очень дружный коллектив и команду\n<:invis:1019891765693657118>Интересное времяпровождение в любимых играх\n<:invis:1019891765693657118>Личные роли, донатные привилегии и многие другие плюшки\n<:invis:1019891765693657118>Ценный опыт и знания работы в данной сфере\n<:invis:1019891765693657118>Оплату в виде серверной валюты\n\n<:point:1019891764192088095>По всем вопросам обращаться к:`)
                .setImage('https://i.pinimg.com/originals/81/f4/a4/81f4a429035e1c8faec2078257a2eb7f.gif')
                .setColor('#91222D')
                .setFooter({text:`Если ты нам подойдёшь - мы обязательно свяжемся с тобой`, iconURL: 'https://cdn.discordapp.com/attachments/1012035499688464494/1019897572225204225/879795509596934158.gif?size=4096'})
            ], ephemeral: true, components: [closeRow]})
        
        
        
        
        
        } else if (interaction.customId === 'avatar_null') // селект аватар, без указания пользователя
         {
            let author = interaction.message.interaction.user.id;
            let user = interaction.user.id;
            if (author == user) {
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
         
            }}
        } else if (interaction.customId === 'avatar')  // селект аватар, c указанием пользователя
        {
            if(interaction.values[0] == 'page_1') {
                console.log(/*interaction.guild.members.cache*/interaction)
            }







        } else if (interaction.customId === 'memory') // селекты информации (эмбеды и уведомления)
        {
            if (interaction.values[0] == 'page_1') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀Серверные роли\`\`\`\n<:point:1019891764192088095><:boost:1019805352910389249>  — выдается за буст сервера\n\n<:point:1019891764192088095><:love:1019805354068029481> — выдается при создании любовной комнаты\n\n<:point:1019891764192088095><:moon:1019867766779543623> — проявление активности ночью\n\n<:point:1019891764192088095><:photo:1019867768440487976> — доступ отправлять изображения в чат\n\n<:point:1019891764192088095><:eventpink:1019867769849794612> — роль для получения уведомлений об ивентах\n\n<:point:1019891764192088095><:closepink:1019867771225526312> — роль для получения уведомлений о клозах\n\n<:point:1019891764192088095><:woman:1019867772504784936> — девушка\n<:point:1019891764192088095><:male:1019867773595308053> — парень\n<:point:1019891764192088095><:trans:1019867775289802782> — скрытый гендер`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_2') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀Основные команды\`\`\`\n> \`\`/profile\`\` — посмотреть профиль\n> \`\`/avatar\`\` — посмотреть аватар пользователя\n> \`\`/inrole\`\` — список участников с ролью⠀ ⠀⠀⠀\n> \`\`/online\`\` — голосовой онлайн\n> \`\`/top\`\` — топы по серверной валюте/голосовому онлайну\n> \`\`/report\`\` — жалоба на пользователя\n> \`\`/help\`\` — задать свой серверный вопрос`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_3') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀Экономика\`\`\`\n> \`\`/balance\`\` — проверить баланс\n> \`\`/give\`\` — передать коины\n> \`\`/timely\`\` — получить временную награду ⁣  ⁣  ⁣⠀ ⠀⠀⠀\n> \`\`/transactions\`\` — посмотреть транзакции`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_4') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀ ⠀⠀⠀Магазин\`\`\`\n> \`\`/shop\`\` — посмотреть аукцион ролей\n> \`\`/role key\`\` — купить ключ для создания роли\n> \`\`/role create\`\` — создать кастомную роль\n> \`\`/role manage\`\` — управление личной ролью\n> \`\`/role info\`\` — информация о личной роли\n> \`\`/role list\`\` — ваш список личных ролей`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_5') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀Личные комнаты\`\`\`\n> \`\`/room manage\`\` — управление личной комнатой\n> \`\`/room info\`\` — посмотреть профиль команты\n> \`\`/room top\`\` — проверить топ личных комнат\n> \`\`/room list\`\` — посмотреть список личных комнат`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_6') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀Отношения\`\`\`\n> \`\`/marry @\`\` — сделать предложение руки и сердца⠀⠀⠀\n> \`\`/profile\`\` — посмотреть профиль пары`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_7') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀Инвентарь\`\`\`\n> \`\`/inventory\`\` — посмотреть инвентарь ролей\n> \`\`/hide\`\` — положить роль в инвентарь`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_8') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀Дуэли\`\`\`\n> \`\`/duel\`\` — вызвать всех/участника на дуэль\n> \`\`/zxc\`\` — сыграть в \"Камень, ножницы, бумага\"\n> \`\`/dice\`\` — сыграть в \"Кости\"`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_9') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Команды музыкальных ботов\`\`\`\n> \`\`/play\`\` — включить песню\n> \`\`/stop\`\` — остановить воспроизведение и очистить плейлист\n> \`\`/nowplaying\`\` — посмотреть, что сейчас играет\n> \`\`/pause\`\` — поставить на паузу\n> \`\`/queue\`\` — посмотреть список песен⠀⠀\n> \`\`/repeat\`\` — включить или выключить режим повтора\n> \`\`/resume\`\` — убрать паузу\n> \`\`/rewind время\`\` — перемотать трек назад\n> \`\`/search песня\`\` — найти и выбрать песню из списка\n> \`\`/seek время\`\` — перемотать трек на определенное время\n> \`\`/skip\`\` — пропустить трек\n> \`\`/volume\`\` — установить громкость`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_10') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀ ⠀⠀ ⠀⠀⠀ ⠀ Команда сервера\`\`\`\n<:point:1019891764192088095>Ответственные за <@&848876541009592341>:\n<:invis:1019891765693657118><@410453535516524544>, <@520253275128332288>\n\n<:point:1019891764192088095>Ответственные за <@&848876544536608768>:\n<:invis:1019891765693657118><@189509434932723712>, <@329969127777239041>\n\n<:point:1019891764192088095>Ответственные за <@&848876547792306217>:\n<:invis:1019891765693657118><@288313836589678593>, <@343086478554824705>\n\n<:point:1019891764192088095>Ответственные за <@&848876547096313896>:\n<:invis:1019891765693657118><@518892467328778251>, <@314703593611591682>\n\n<:point:1019891764192088095>Ответственный за <@&987281849673994260>:\n<:invis:1019891765693657118><@267867334662684674>\n\n<:point:1019891764192088095>Ответственный за личные комнаты и роли:\n<:invis:1019891765693657118><@520253275128332288>\n\n<:point:1019891764192088095>Ответственный за донатные привилегии:\n<:invis:1019891765693657118><@229309700729077761>\n\n>>> **Если кто-то из представителей сервера по отношению к вам повёл себя некорректно, вы можете подать на него жалобу у ответственного за его должность.**`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true
            })
            else if (interaction.values[0] == 'page_11') return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`\`\`\`⠀⠀⠀⠀⠀⠀⠀Роль для уведомлений об ивентах \`\`\`\n\n>>> У нас на сервере часто проводятся игровые мероприятия. \nНа них можно приятно провести время и получить коины!\n \nЧтобы получать уведомления, тебе нужна соответствующая **роль**. Получи её, нажав на **кнопку**!\n\n<:eventpink:1019867769849794612> — уведомления об ивентах.\n\n<:closepink:1019867771225526312> — уведомления о клозах.`)
                    .setImage('https://cdn.discordapp.com/attachments/866401821429334036/958754654597025872/1111_1.png?size=4096')
                    .setColor('#36393F')
                ],
                ephemeral: true , components: [linkRow]
            })
        } 
        
        
        
        // ..............................................КНОПКИ ДЕЙСТВИЯ ПРИ НАЖАТИЕ..............................................
        
        if (interaction.customId === 'link-event') // памятка уведомления через кнопку и удаление ролей
        {   
            const role = interaction.guild.roles.cache.get('1019098648610607214') // роль линка ивентов
            
            await interaction.reply({content: `Уведомления об ивентах включены.` ,ephemeral:true})
            return interaction.member.roles
            .add(role)
            .catch((err) => interaction.reply({ephemeral:true}) )
        } else if (interaction.customId === 'link-close') {
            const role = interaction.guild.roles.cache.get('1019098678797025351') // роль линка клозов
            if(!role) console.log('Роль не найдена')
            await interaction.reply({content: `Уведомления об клозах включены.` ,ephemeral:true})
            return interaction.member.roles
            .add(role)
            .catch((err) => interaction.reply({ephemeral:true}) )
        } else if (interaction.customId === 'link-delete') {

            const roleEvent = interaction.guild.roles.cache.get('1019098648610607214') // роль линка ивентов
            const rolecClose = interaction.guild.roles.cache.get('1019098678797025351') // роль линка клозов
            await interaction.reply({content: `Уведомления отключены.` ,ephemeral:true})
            await interaction.member.roles.remove(roleEvent)
            .catch((err) => interaction.reply({ephemeral:true}))
            await interaction.member.roles.remove(rolecClose)
            .catch((err) => interaction.reply({ephemeral:true}))
        }

        // ..............................................КНОПКИ ДЕЙСТВИЯ ПРИ НАЖАТИЕ МОДАЛЬНОМ МЕНЮ..............................................
        
        else if ( interaction.customId === 'moderator-answer') // Модальное окно для заявки модеров
        {
            const modal = new ModalBuilder()
			.setCustomId('moderModal')
			.setTitle('Заявка на должность модератора');

		const nameModer = new TextInputBuilder()
			.setCustomId('nameModer')
			.setLabel("ВАШЕ ИМЯ И ВОЗРАСТ")
            .setMaxLength(20)
	        .setMinLength(10)
            .setPlaceholder('Например: Максим, 20 лет')
            .setStyle(TextInputStyle.Short);

		const timeModer = new TextInputBuilder()
			.setCustomId('timeModer')
			.setLabel("ВАШ ЧАСОВОЙ ПОЯС И ПРАЙМ-ТАЙМ")
            .setMaxLength(40)
	        .setMinLength(10)
            .setPlaceholder('Например: GMT+3, 4:00-8:00 и 8:00-10:00')
            .setStyle(TextInputStyle.Short);

        const aboutModer = new TextInputBuilder()
			.setCustomId('aboutModer')
			.setLabel("РАССКАЖИТЕ О СЕБЕ И ПОЧЕМУ ИМЕННО ВЫ?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Расскажите о себе здесь')
            .setMaxLength(512)
            .setMinLength(20);

        const anotherModer = new TextInputBuilder()
            .setCustomId('anotherModer')
            .setLabel("РАБОТАЛ(А) ЛИ ТЫ НА КАКОМ-ТО ДРУГОМ СЕРВЕРЕ?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Был ли у Вас опыт в этой сфере и если да, то расскажите о нем подробнее')
            .setMaxLength(512)
            .setMinLength(5);

		const nameModerRow = new ActionRowBuilder().addComponents(nameModer);
		const timeModerionRow = new ActionRowBuilder().addComponents(timeModer);
        const aboutModerRow = new ActionRowBuilder().addComponents(aboutModer);
        const anotherModerRow = new ActionRowBuilder().addComponents(anotherModer);

		modal.addComponents(nameModerRow,timeModerionRow,aboutModerRow,anotherModerRow);

        await interaction.showModal(modal);
        } else if ( interaction.customId === 'support-answer') // Модальное окно для заявки саппортов
        {
            const modal = new ModalBuilder()
			.setCustomId('supModal')
			.setTitle('Заявка на должность саппорта');

		const nameSup = new TextInputBuilder()
			.setCustomId('nameSup')
			.setLabel("ВАШЕ ИМЯ И ВОЗРАСТ")
            .setMaxLength(20)
	        .setMinLength(10)
            .setPlaceholder('Например: Максим, 20 лет')
            .setStyle(TextInputStyle.Short);

		const timeSup = new TextInputBuilder()
			.setCustomId('timeSup')
			.setLabel("ВАШ ЧАСОВОЙ ПОЯС И ПРАЙМ-ТАЙМ")
            .setMaxLength(40)
	        .setMinLength(10)
            .setPlaceholder('Например: GMT+3, 4:00-8:00 и 8:00-10:00')
            .setStyle(TextInputStyle.Short);

        const aboutSup = new TextInputBuilder()
			.setCustomId('aboutSup')
			.setLabel("РАССКАЖИТЕ О СЕБЕ И ПОЧЕМУ ИМЕННО ВЫ?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Расскажите о себе здесь')
            .setMaxLength(512)
            .setMinLength(20);

        const anotherSup = new TextInputBuilder()
            .setCustomId('anotherSup')
            .setLabel("РАБОТАЛ(А) ЛИ ТЫ НА КАКОМ-ТО ДРУГОМ СЕРВЕРЕ?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Был ли у Вас опыт в этой сфере и если да, то расскажите о нем подробнее')
            .setMaxLength(512)
            .setMinLength(5);

		const nameSupRow = new ActionRowBuilder().addComponents(nameSup);
		const timeSupRow = new ActionRowBuilder().addComponents(timeSup);
        const aboutSupRow = new ActionRowBuilder().addComponents(aboutSup);
        const anotherSupRow = new ActionRowBuilder().addComponents(anotherSup);

		modal.addComponents(nameSupRow,timeSupRow,aboutSupRow,anotherSupRow);

        await interaction.showModal(modal);
        } else if ( interaction.customId === 'event-answer') // Модальное окно для заявки ивентера
        {
            const modal = new ModalBuilder()
			.setCustomId('eventModal')
			.setTitle('Заявка на должность ивентера');

		const nameEvent = new TextInputBuilder()
			.setCustomId('nameEvent')
			.setLabel("ВАШЕ ИМЯ И ВОЗРАСТ")
            .setMaxLength(20)
	        .setMinLength(10)
            .setPlaceholder('Например: Максим, 20 лет')
            .setStyle(TextInputStyle.Short);

		const timeEvent = new TextInputBuilder()
			.setCustomId('timeEvent')
			.setLabel("ВАШ ЧАСОВОЙ ПОЯС И ПРАЙМ-ТАЙМ")
            .setMaxLength(40)
	        .setMinLength(10)
            .setPlaceholder('Например: GMT+3, 4:00-8:00 и 8:00-10:00')
            .setStyle(TextInputStyle.Short);

        const aboutEvent = new TextInputBuilder()
			.setCustomId('aboutEvent')
			.setLabel("РАССКАЖИТЕ О СЕБЕ И ПОЧЕМУ ИМЕННО ВЫ?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Расскажите о себе здесь')
            .setMaxLength(512)
            .setMinLength(20);

        const anotherEvent = new TextInputBuilder()
            .setCustomId('anotherEvent')
            .setLabel("РАБОТАЛ(А) ЛИ ТЫ НА КАКОМ-ТО ДРУГОМ СЕРВЕРЕ?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Был ли у Вас опыт в этой сфере и если да, то расскажите о нем подробнее')
            .setMaxLength(512)
            .setMinLength(5);

            const gameEvent = new TextInputBuilder()
            .setCustomId('gameEvent')
            .setLabel("КАКИЕ ИВЕНТЫ ВЫ ХОТИТЕ/ГОТОВЫ ПРОВОДИТЬ?")
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Пример: Брейнвейв, Сыщики, Счастливые числа, Токайдо, Соло')
            .setMaxLength(64)
            .setMinLength(5);    

		const nameEventRow = new ActionRowBuilder().addComponents(nameEvent);
		const timeEventRow = new ActionRowBuilder().addComponents(timeEvent);
        const aboutEventRow = new ActionRowBuilder().addComponents(aboutEvent);
        const anotherEventRow = new ActionRowBuilder().addComponents(anotherEvent);
        const gameEventRow = new ActionRowBuilder().addComponents(gameEvent);

		modal.addComponents(nameEventRow,timeEventRow,aboutEventRow,anotherEventRow,gameEventRow);

        await interaction.showModal(modal);
        } else if ( interaction.customId === 'close-answer') // Модальное окно для заявки клозеров
        {
            const modal = new ModalBuilder()
			.setCustomId('closeModal')
			.setTitle('Заявка на должность клозера');

		const nameClose = new TextInputBuilder()
			.setCustomId('nameClose')
			.setLabel("ВАШЕ ИМЯ И ВОЗРАСТ")
            .setMaxLength(20)
	        .setMinLength(10)
            .setPlaceholder('Например: Максим, 20 лет')
            .setStyle(TextInputStyle.Short);

		const timeClose = new TextInputBuilder()
			.setCustomId('timeClose')
			.setLabel("ВАШ ЧАСОВОЙ ПОЯС И ПРАЙМ-ТАЙМ")
            .setMaxLength(40)
	        .setMinLength(10)
            .setPlaceholder('Например: GMT+3, 4:00-8:00 и 8:00-10:00')
            .setStyle(TextInputStyle.Short);

        const aboutClose = new TextInputBuilder()
			.setCustomId('aboutClose')
			.setLabel("РАССКАЖИТЕ О СЕБЕ И ПОЧЕМУ ИМЕННО ВЫ?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Расскажите о себе здесь')
            .setMaxLength(512)
            .setMinLength(20);

        const anotherClose = new TextInputBuilder()
            .setCustomId('anotherClose')
            .setLabel("РАБОТАЛ(А) ЛИ ТЫ НА КАКОМ-ТО ДРУГОМ СЕРВЕРЕ?")
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Был ли у Вас опыт в этой сфере и если да, то расскажите о нем подробнее')
            .setMaxLength(512)
            .setMinLength(5);

            const gameClose = new TextInputBuilder()
            .setCustomId('gameClose')
            .setLabel("КАКИЕ КЛОЗЫ ВЫ ХОТИТЕ/ГОТОВЫ ПРОВОДИТЬ?")
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Пример: Dota 2, Valorant')
            .setMaxLength(64)
            .setMinLength(5);    

		const nameCloseRow = new ActionRowBuilder().addComponents(nameClose);
		const timeCloseRow = new ActionRowBuilder().addComponents(timeClose);
        const aboutCloseRow = new ActionRowBuilder().addComponents(aboutClose);
        const anotherCloseRow = new ActionRowBuilder().addComponents(anotherClose);
        const gameCloseRow = new ActionRowBuilder().addComponents(gameClose);

		modal.addComponents(nameCloseRow,timeCloseRow,aboutCloseRow,anotherCloseRow,gameCloseRow);

        await interaction.showModal(modal);
        } 

        // ..............................................МОДАЛЬНОМ МЕНЮ (ОТВЕТЫ)..............................................

        if(interaction.customId === `moderModal`) // ответ на заявку модера
        {
            const nameModer = interaction.fields.getTextInputValue(`nameModer`)
            const timeModer = interaction.fields.getTextInputValue(`timeModer`)
            const aboutModer = interaction.fields.getTextInputValue(`aboutModer`)
            const anotherModer = interaction.fields.getTextInputValue(`anotherModer`)
            let idChannel = `1020322492155433051` // айди на канал набор модеров

            let user = interaction.user // юзер, который кинул заявку


            await interaction.reply({content:`Вы успешно отправили заявку`, ephemeral:true})


            return interaction.guild.channels.cache.get(idChannel).send({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Новая заявка на модератора`)
                    .setDescription(`**Пользователь**\n<@${user.id}> [${user.tag} / ${user.id}]\n\n**Имя и возраст**\n${nameModer}\n\n**Часовой пояс и прайм-тайм**\n${timeModer}\n\n**Голосовой онлайн**\n\n\n**Нарушения**\n\n\n**О себе и почему именно он**\n${aboutModer}\n\n**Работал ли на каком-то другом сервере?**\n${anotherModer}`)
                    .setThumbnail(`https://cdn.discordapp.com/attachments/1012035499688464494/1020345996108103680/910243491911716904.gif`)
                    .setColor(`#FFC2E2`)
                
                ]
            })

        } 
        if(interaction.customId === `supModal`) // ответ на заявку саппорта
        {
            const nameSup = interaction.fields.getTextInputValue(`nameSup`)
            const timeSup = interaction.fields.getTextInputValue(`timeSup`)
            const aboutSup = interaction.fields.getTextInputValue(`aboutSup`)
            const anotherSup = interaction.fields.getTextInputValue(`anotherSup`)
            let idChannel = `1020322514792095745` // айди на канал набор саппортов
            
            let user = interaction.user // юзер, который кинул заявку

            await interaction.reply({content:`Вы успешно отправили заявку`, ephemeral:true})


            return interaction.guild.channels.cache.get(idChannel).send({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Новая заявка на саппорта`)
                    .setDescription(`**Пользователь**\n<@${user.id}> [${user.tag} / ${user.id}]\n\n**Имя и возраст**\n${nameSup}\n\n**Часовой пояс и прайм-тайм**\n${timeSup}\n\n**Голосовой онлайн**\n\n\n**Нарушения**\n\n\n**О себе и почему именно он**\n${aboutSup}\n\n**Работал ли на каком-то другом сервере?**\n${anotherSup}`)
                    .setThumbnail(`https://cdn.discordapp.com/attachments/1012035499688464494/1020345996108103680/910243491911716904.gif`)
                    .setColor(`#FFC2E2`)
                
                ]
            })

        } 
        if(interaction.customId === `eventModal`) // ответ на заявку ивентера
        {
            const nameEvent = interaction.fields.getTextInputValue(`nameEvent`)
            const timeEvent = interaction.fields.getTextInputValue(`timeEvent`)
            const aboutEvent = interaction.fields.getTextInputValue(`aboutEvent`)
            const anotherEvent = interaction.fields.getTextInputValue(`anotherEvent`)
            const gameEvent = interaction.fields.getTextInputValue(`gameEvent`)
            let idChannel = `1020322537319694377` // айди на канал набор ивентеров

            let user = interaction.user // юзер, который кинул заявку

            await interaction.reply({content:`Вы успешно отправили заявку`, ephemeral:true})


            return interaction.guild.channels.cache.get(idChannel).send({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Новая заявка на ивентера`)
                    .setDescription(`**Пользователь**\n<@${user.id}> [${user.tag} / ${user.id}]\n\n**Имя и возраст**\n${nameEvent}\n\n**Часовой пояс и прайм-тайм**\n${timeEvent}\n\n**Голосовой онлайн**\n\n\n**Нарушения**\n\n\n**О себе и почему именно он**\n${aboutEvent}\n\n**Работал ли на каком-то другом сервере?**\n${anotherEvent}\n\n**Ивенты, которые хочет/готов проводить**\n${gameEvent}`)
                    .setThumbnail(`https://cdn.discordapp.com/attachments/1012035499688464494/1020345996108103680/910243491911716904.gif`)
                    .setColor(`#FFC2E2`)
                
                ]
            })

        } 
        if(interaction.customId === `closeModal`) // ответ на заявку клозера
        {
            const nameClose = interaction.fields.getTextInputValue(`nameClose`)
            const timeClose = interaction.fields.getTextInputValue(`timeClose`)
            const aboutClose = interaction.fields.getTextInputValue(`aboutClose`)
            const anotherClose = interaction.fields.getTextInputValue(`anotherClose`)
            const gameClose = interaction.fields.getTextInputValue(`gameClose`)
            let idChannel = `1020322569720705174` // айди на канал набор ивентеров

            let user = interaction.user // юзер, который кинул заявку

            await interaction.reply({content:`Вы успешно отправили заявку`, ephemeral:true})


            return interaction.guild.channels.cache.get(idChannel).send({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Новая заявка на клозера`)
                    .setDescription(`**Пользователь**\n<@${user.id}> [${user.tag} / ${user.id}]\n\n**Имя и возраст**\n${nameClose}\n\n**Часовой пояс и прайм-тайм**\n${timeClose}\n\n**Голосовой онлайн**\n\n\n**Нарушения**\n\n\n**О себе и почему именно он**\n${aboutClose}\n\n**Работал ли на каком-то другом сервере?**\n${anotherClose}\n\n**Клозы, которые хочет/готов проводить**\n${gameClose}`)
                    .setThumbnail(`https://cdn.discordapp.com/attachments/1012035499688464494/1020345996108103680/910243491911716904.gif`)
                    .setColor(`#FFC2E2`)
                
                ]
            })

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
