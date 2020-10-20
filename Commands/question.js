module.exports = {
    name: "question",
    description: "this is a command to ask a random question",
    execute(message, args) {
        switch (Math.floor(Math.random() * 6)) {
            case 0:
                message.channel.send("**Question:** \nWhy Elton never buy clothes for KayXuan?");
                break;
            case 1:
                message.channel.send("**Question:** \nWhy is 40 such a wholesome number?");
                break;
            case 2:
                message.channel.send("**Question:** \nWhy Prem so grassy?");
                break;
            case 3:
                message.channel.send("**Question:** \nWhy Elton's leg so big?");
                break;
            case 4:
                message.channel.send("**Question:** \nWhat took Elton so long?");
                break;
            case 5: 
                message.channel.send("**Question:** \nWhy Elton lie to Ahma?");
        }
    },
};
