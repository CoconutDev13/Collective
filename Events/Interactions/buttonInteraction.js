/**
 * @Description : This is handler for Button Interactions Only!
 * @Author : CoconutDev13
 * @Date : 4/12/2023
 */

module.exports = {
    name: "interactionCreate",

    execute(interaction) {
        if (!interaction.isButton()) return;

        const role = interaction.guild.role.cache.get("1095635925511442462");
        return interaction.member.roles
            .add(role)
            .then((member) =>
                interaction.reply({
                    content: `${role} has been assigned to you.`,
                    ephemeral: true,
                }),
            );
    },
};
