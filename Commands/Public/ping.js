const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping command to measure bot latency'),
  async execute(interaction) {
    const sentTimestamp = new Date();
    await interaction.reply({ content: 'Pinging...', fetchReply: true });
    const ping = new Date() - sentTimestamp;
    await interaction.editReply(`🏓 Latency is ${ping}ms.`);
  },
};