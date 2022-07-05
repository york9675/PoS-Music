const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  cooldown: 5,
  description: "Show the bot's average ping",
  execute(message) {
    let commands = message.client.commands.array();

    let pingEmbed = new MessageEmbed()
      .setAuthor(`| Ping |`)
      .setTitle(`📈 Average ping to API`)
      .setDescription(`${Math.round(message.client.ws.ping)} ms`)
      .setColor("BLUE");

      pingEmbed.setTimestamp();
    
    return message.channel.send(pingEmbed).catch(console.error);
  }
};
