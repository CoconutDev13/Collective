function loadCommands(client) {
    const ascii = require('ascii-table');
    const fs = require("fs");
    const table = new ascii().setHeading("Commands","Status");

    let CommandsArray = [];

    const commandsFolder = fs.readdirSync("./Commands");
    for (const folder of commandsFolder) {
        const commandsFile = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith(".js"));

        for (const file of  commandsFile) {
            const commandsFile = require(`../Commands/${folder}/${file}`);

            client.commands.set(commandsFile.data.name, commandsFile);

            CommandsArray.push(commandsFile.data.toJSON());

            table.addRow(file, "loaded");
            continue;
        }
    }

    client.application.commands.set(CommandsArray);

    return console.log(table.toString(), "\n Loaded Commands");
}

module.exports = {loadCommands};