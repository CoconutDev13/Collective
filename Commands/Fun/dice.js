const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dice')
    .setDescription('Rolls a dice.')
    .addIntegerOption(option => option.setName('sides').setDescription('The number of sides on the dice.')),
  async execute(interaction) {
    const sides = interaction.options.getInteger('sides') || 6;
    const result = Math.floor(Math.random() * sides) + 1;
    await interaction.reply(`You rolled a ${result} on a ${sides}-sided dice! 🎲`);
  },
};