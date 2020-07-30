module.exports = {
    name: "help",
    description: "this is a command to list commands",
    execute(message, args) {
        message.channel.send(
            "==========================" +
                "          \n**List of available Commands**" +
                "\n==========================" +
                "\n1. !help - list all available commands" +
                "\n2. !simps - list  simps" +
                "\n3. !sorry - say sorry" +
                "\n4. !expose - expose Elton"
        );
    },
};
