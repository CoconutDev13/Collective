const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Get information about an user')
    .addUserOption(option => option.setName(`user`).setDescription(`Select a user`).setRequired(false)),
    async execute (interaction) {
        const user = interaction.options.getUser(`user`) || interaction.user;
        const member = await interaction.guild.members.fetch(user.id);
        const icon = user.displayAvatarURL();
        const tag = user.tag;
        const badges = user.flags.toArray().join(", ") || "None"; // join array into a string
        const nick = member.displayName || "None"; // use "None" if nick is falsy (empty string or undefined)
        
        const embed = new EmbedBuilder()
        .setColor("Yellow")
        .setThumbnail(icon)
        .setDescription(`\`❓\`・${user}'s Information`)
        .addFields({ name: `\`💳\`・ID:`, value: `${user.id || "None"}`, inline: false })
        .addFields({ name: `\`📖\`・Nickname:`, value: `${nick}`, inline: false })
        .addFields({ name: `\`🤖\`・Bot:`, value: `${user.bot}`, inline: false })
        .addFields({ name: `\`👋\`・Joined Server:`, value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: false })
        .addFields({ name: `\`👴\`・Joined Discord:`, value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: false })
        .addFields({ name: `\`📛\`・Badges:`, value: `${badges}`, inline: false })
        .setFooter({ text: tag, iconURL: icon })
        

        await interaction.reply({ embeds: [embed] })
    }
}