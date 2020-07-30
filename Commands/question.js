module.exports = {
    name: "question",
    description: "this is a command to ask a random question",
    execute(message, args) {
        switch (Math.floor(Math.random()) * 10 - 5) {
            case 0:
                message.channel.send("**Question:** \nWhy Elton never buy clothes for KayXuan?");
                break;
            case 1:
                message.channel.send("**Question:** \nWhen is Elton gonna ask her out?");
                break;
            case 2:
                message.channel.send("**Question:** \nWhat is Elton going to do on the first date?");
                break;
            case 3:
                message.channel.send("**Question:** \nWhy Elton's leg so big");
                break;
            case 4:
                message.channel.send("**Question:** \nWhy Elton never confess?");
        }
    },
};
