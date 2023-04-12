const {
  ComponentType,
  EmbedBuilder,
  SlashCommandBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get list of all available commands."),
  async execute(interaction) {
    const emojis = {
      information: "❗",
      moderation: "🛠️",
      general: "💬",
    };

    const directories = [
        ...new Set(interaction.client.commands.mpa((cmd) => cmd.folder)),
    ];

    
  },
};
