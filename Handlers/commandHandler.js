const {readdirSync} = require("fs");
const ascii = require('ascii-table');

const commandFileExtension = '.js';

const filterCommandFiles = (file) => file.endsWith(commandFileExtension);

function loadCommands(client) {
    const table = new ascii().setHeading("Commands","Status");
    
    const commandsFolder = readdirSync('./Commands');

    for (const folder of commandsFolder) {
        const commandsFile = readdirSync(`./Commands/${folder}`).filter(filterCommandFiles);

        for (const file of commandsFile) {
            const command = require(`../Commands/${folder}/${file}`);

            client.commands.set(command.data.name, command);
            table.addRow(file, "loaded");
        }
    }

    console.log(table.toString(), "\n Loaded Commands");
}

module.exports = {loadCommands};