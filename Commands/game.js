const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "game",
    description: "this is a command to list games",
    execute(message, args) {
        const Embed = new MessageEmbed()
            .setColor(3066993)
            .setTitle("Game Feature: The Simps 4")
            .setDescription(
                "The Simps 4 is the life simulation game that gives you the power to create and control simps. Experience the stalking, fantasizing, and the freedom to play with hot girls in The Simps 4. It's the perfect game for Simps!\nTry the Create A Simp demo to create your own Simp!"
            )
            .setImage("https://i.imgur.com/wjiQXgq.jpeg");
        message.channel.send(Embed);
    },
};
