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
                "\n4. !expose - expose Elton" +
                "\n5. !poll - create a random stream" +
                "\n6. !game - what game is Elton currently playing?" +
                "\n7. !stream - what game is Elton currently streaming?" +
                "\n4. !question - let me ask you a random question"
        );
    },
};
