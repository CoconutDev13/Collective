require('dotenv').config();

const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');

console.log("Kuriakos update for testing git")

const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember } = Partials;

const {loadEvents} = require('./Handlers/eventHandler');
const {loadCommands} = require('./Handlers/commandHandler');

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember,ThreadMember],
});

client.commands = new Collection();

console.log(process.env.TOKEN)
client.login(process.env.TOKEN).then(() =>{
    loadEvents(client);
    loadCommands(client);
})  