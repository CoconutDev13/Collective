//Unused import, μπορείς απλά να το σβήσεις
const { CommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",

  //Το client υπάρχει στο interaction και δεν πρέπει να περνάει σαν δεύτερη παράμετρος.
  //Δηλαδή interaction.client
  execute(interaction, client) {
    //Εδώ ήταν και το μεγάλο σου bug που δεν επέτρεπε να τρέχουν τα commands.
    //Σου ξέφυγε το ! νομίζω.
    //Γράφεις αν ΔΕΝ είναι command. 
    //Επομένως όταν τρέχει κάποιος command δεν πηγαίνει ποτέ στον κώδικα execute
    if (!interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);

      if (!command) {
        interaction.reply({ content: "outdated command" });
      }

      command.execute(interaction, client);
    } else if (interaction.isButton()) {
      const role = interaction.guild.role.cache.get("1095635925511442462");
      return interaction.member.roles
        .add(role)
        .then((member) =>
          interaction.reply({
            content: `${role} has been assigned to you.`,
            ephemeral: true,
          }),
        );
    } 
    //Αυτό επειδή είναι στο τέλος του function απλά το σβήνεις άφοβα, δεν κάνει τίποτα
    else {
        return;
    }
  },
};
