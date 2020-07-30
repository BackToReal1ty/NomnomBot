module.exports = {
    name: "game",
    description: "this is a command to list games",
    execute(message, args) {
        message.channel.send("Elton is currently playing - \nThe Simps 4: KayXuan Edition");
    },
};
