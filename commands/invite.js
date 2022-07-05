const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  cooldown: 5,
  description: "Send bot invite link",
  execute(message) {
    let commands = message.client.commands.array();

    let inviteEmbed = new MessageEmbed()
      .setAuthor(`| Invite |`)
      .setTitle(`❌Not yet!`)
      .setDescription(`I'm still in beta, please wait for the stable version before inviting...`)
      .setColor("RED");

      inviteEmbed.setFooter(`Have a nice day with music!`);
    
    return message.channel.send(inviteEmbed).catch(console.error);
  }
};
