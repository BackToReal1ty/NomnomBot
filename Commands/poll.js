module.exports = {
    name: "poll",
    description: "this is a command to list start a poll",
    execute(message, args) {
        switch (args[0]) {
            case "poll":
                const Embed = new Discord.MessageEmbed()
                    .setColor(0xffc300)
                    .setTitle("Initiate Poll")
                    .setDescription("!poll to initiate new poll");

                if (!args[1]) {
                    message.channel.send(Embed);
                }
                break;
        }
    },
};
