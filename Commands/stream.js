const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "stream",
    description: "this is a command to list stream",
    execute(message, args) {
        const Embed = new MessageEmbed()
            .setColor(12320855)
            .setTitle("ElmoAngster03")
            .setDescription("**Watch me Play my Favourite Game!**")
            .addField("Game:          \tViewers:", "The Simps 4\t   69")
            .addField("Uptime:", "Since Since 27 July 2020")
            .setImage("https://i.imgur.com/3upo5vX.jpeg");
        message.channel.send("Elton is Currently Streaming on Twitch!\n");
        message.channel.send(Embed);
    },
};
