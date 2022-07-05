const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Open Help Center",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/1200px-Blue_question_mark_icon.svg.png`)
      .setAuthor(`Welcome to ${message.client.user.username} Help Center!`)
      .setTitle(`Any problems while using the command?`)
      .setDescription("Below is the list of all commands & description!")
      .setFooter(`Have a nice day with music! | Ver Beta 1750 | By York`)
      .setImage(`https://cdn.discordapp.com/attachments/947773974954262588/993404300749451356/SIX_4B5FA71E-DDD6-4F8A-98F5-139DEEDAAC17.jpg?size=4096`)
      .setColor("#7ED321");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
