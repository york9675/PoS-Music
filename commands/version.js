const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  name: "version",
  aliases: ["ver"],
  cooldown: 10,
  description: "Get info about this version",
  execute(message) {
    let commands = message.client.commands.array();

    let versionEmbed = new MessageEmbed()
      .setAuthor(`| Version Information |`)
      .setTitle(`What's new?`)
      .setDescription(`
- *All new "Help Center"*
- *Support Soundcloud songs now*
- *Add "Disconnect" command*
- *Add "Version" command*
- *Add "Stats" command*
- *Improve"Play"*
- *Improve "Ping"*
- *Improve "Search"*
- *Improve "Clap"*
- *Improve "Now Playing"*
- *Improve "Help Center"*
- *Improve "Invite"*
- *Improve "Uptime"*
- *Bug fixes*
`)   
      .setColor("BLUE");

      versionEmbed.addField('Need help?', 'Type `ub!help` to open Help Center!')

      versionEmbed.setFooter(`Beta 1790 | Last Updated: 2022/07/06 | By York`);
    
    return message.channel.send(versionEmbed).catch(console.error);
  }
};
