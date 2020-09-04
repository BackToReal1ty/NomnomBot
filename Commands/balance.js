const {MessageEmbed} = require("discord.js");
const fs = require("fs");
const money = require("../money.json");

module.exports = {
    name: "balance",
    description: "this is a command to show player's balance",
    execute(message, args) {
        //creates a variable user according to if an argument is passed
        //user variable is to identify which balance to show
        if (!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.users.first() || bot.users.get(args[0]);
        }

        //if user does not exist in the money.json file, creates an entry for the user.
        if (!money[user.id]) {
            money[user.id] = {
                name: bot.users.get(user.id).tag,
                money: 0,
            };
            fs.writeFile("./money.json", JSON.stringify(money), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }

        //sends a message for user's balance
        return message.channel.send(`${bot.users.get(user.id).username} has ${money[user.id].money} simpcoins`);
    },
};
