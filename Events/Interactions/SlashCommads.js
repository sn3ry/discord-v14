const {ChatInputCommandInteraction} = require('discord.js')

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;
        
        const command = client.commands.get(interaction.commandName);
        if(!command) 
        return interaction.reply({
            content: "This command is outdated.",
            ephemeral: false
        });

        if(command.developer && interaction.user.id !== "288313836589678593" && interaction.user.id !== "343086478554824705")
        return interaction.reply({
            content: "This command is only available to the developer.",
            ephemeral: false
        });

        command.execute(interaction, client);
    }
}