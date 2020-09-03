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
        "\n6. !game - check out our channel's sponsor!?" +
        "\n7. !stream - what game is Elton currently streaming?" +
        "\n8. !question - let me ask you a random question" +
        "\n9. !photos - see Elton and KayXuan's unreleased photos!" +
        "\n10. !stonks - show a stonky thing"
    );
  },
};
