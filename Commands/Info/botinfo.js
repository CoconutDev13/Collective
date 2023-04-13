const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits, Partials, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const { stripIndent } = require("common-tags"); //npm i common-tags
const os = require('os'); //awa

const client = new Client({
    intents: Object.keys(GatewayIntentBits),
    partials: Object.keys(Partials),
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info-bot")
        .setDescription('bot info'),

    async execute(interaction) {

        const guilds = interaction.client.guilds.cache.size;
        const channels = interaction.client.channels.cache.size;
        const users = interaction.client.guilds.cache.reduce((size, g) => size + g.memberCount, 0);
        const platform = process.platform.replace(/win32/g, "Windows");
        const architecture = os.arch();
        const cores = os.cpus().length;
        const cpuUsage = `${(process.cpuUsage().user / 1024 / 1024).toFixed(2)} MB`;
        const botUsed = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`;
        const botAvailable = `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`;
        const botUsage = `${((process.memoryUsage().heapUsed / os.totalmem()) * 100).toFixed(1)}%`;
        const overallUsed = `${((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2)} GB`;
        const overallAvailable = `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`;
        const overallUsage = `${Math.floor(((os.totalmem() - os.freemem()) / os.totalmem()) * 100)}%`;
        const invite = ""; //your bot invite link
        const server = ""; //guild invite link

        let desc = "";
        desc += `Made by:<@591874140625960960 and @1024263842932469861->\n`;
        desc += `Server: ${guilds}\n`;
        desc += `Total member: ${users}\n`;
        desc += `Total channels: ${channels}\n`;
        desc += `Websocket Ping: ${Date.now() - interaction.createdTimestamp} ms\n`;
        desc += "\n";

        const infobotEmbed = new EmbedBuilder()
            .setTitle("Bot Info")
            .setColor("Green")
            .setDescription(desc)
            .addFields(
                {
                    name: "CPU",
                    value: stripIndent`
                    > **OS：** ${platform} [${architecture}]
                    > **Cores：** ${cores}
                    > **Usage：** ${cpuUsage}
                    `,
                    inline: true,
                },
                {
                    name: "Bot's RAM",
                    value: stripIndent`
                    > **Used：** ${botUsed}
                    > **Available：** ${botAvailable}
                    > **Usage：** ${botUsage}
                    `,
                    inline: true,
                },
                {
                    name: "Total RAM",
                    value: stripIndent`
                    > **Used：** ${overallUsed}
                    > **Available：** ${overallAvailable}
                    > **Usage：** ${overallUsage}
                    `,
                    inline: true,
                },
                {
                    name: "Node Js Version",
                    value: process.versions.node,
                    inline: false,
                }
            )
            .setTimestamp()

            let components = [];
            components.push(new ButtonBuilder().setLabel("Invite Me").setURL(invite).setStyle(ButtonStyle.Link));
          
            if (server) {
              components.push(new ButtonBuilder().setLabel("Guild").setURL(server).setStyle(ButtonStyle.Link));
            }
          
            let buttonsRow = new ActionRowBuilder().addComponents(components);

        await interaction.reply({ embeds: [infobotEmbed], components: [buttonsRow] });
    }
}