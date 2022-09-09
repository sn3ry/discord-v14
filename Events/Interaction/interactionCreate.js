const {Client, CommandInteraction, InteractionType} = require('discord.js')
const {ApplicationCommand} = InteractionType

module.exports = {
    name: 'interactionCreate',

    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client     
     * */

    async execute(interaction, client) {
        const { user, guild, commandName, member, type } = interaction

        if(!guild || user.bot) return
        if(type !== ApplicationCommand) return
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
