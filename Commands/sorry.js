module.exports = {
    name: "sorry",
    description: "this is a command to say sorry",
    execute(message, args) {
        if (args.length < 1) {
            message.channel.send("sorry i not brother enough...;-;");
        } else message.channel.send("sorry " + args + " i not brother enough...;-;");
    },
};
