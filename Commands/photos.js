const {DiscordAPIError, MessageEmbed} = require("discord.js");

module.exports = {
    name: "photos",
    description: "this is a command to list commands",
    execute(message, args) {
        const Embed = new MessageEmbed()
            .setColor(0xffc300)
            .setTitle("Secret Unreleased Photos of Elton and KayXuan")
            .setDescription("**Click the link below now!**\nhttps://bit.ly/3gixK7F");
        message.channel.send(Embed);
    },
};
