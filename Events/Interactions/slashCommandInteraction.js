/**
 * @Description : This is handler for Slash Commands Only!
 * @Author : CoconutDev13
 * @Date : 4/12/2023
 */

module.exports = {
    name: "interactionCreate",

    execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);
        
        if (!command) 
            return interaction.reply({ content: "Probably that command doesn't exist or it is outdated" });
        console.log(command)
        command.execute(interaction);
    }
};
