const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "stream",
    description: "this is a command to list stream",
    execute(message, args) {
        const Embed = new MessageEmbed()
            .setColor(12320855)
            .setTitle("ElmoAngster03")
            .setDescription("**Watch me Play my Favourite Game!**")
            .addFields({name: "Game: ", value: "The Simps 4", inline: true}, {name: "Viewers: ", value: "69", inline: true})
            .addField("Uptime:", "Since Since 27 July 2020")
            .setImage("https://i.imgur.com/3upo5vX.jpeg");
        message.channel.send("Elton is Currently Streaming on Twitch!\n");
        message.channel.send(Embed);
    },
};
