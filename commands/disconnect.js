module.exports = {
  name: "disconnect",
  aliases: ["dc"],
  description:"Stop the bot and leave the channel",
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if(!voiceChannel) return message.channel.send("U need to be in a voice channel to stop the music!");
    await voiceChannel.leave();
    await message.channel.send("> 👋 **Reset the player and leaving voice channel...**")
    
  }
}
