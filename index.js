//imports discord.js
const Discord = require("discord.js");
const client = new Discord.Client();

//logs a message in the console when logged in
//sets status for bot
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: "Need for Speed: Discord Nitro" } });
});

//Prefix for command
const prefix = "!";

//Imports FS
const fs = require("fs");
client.commands = new Discord.Collection();

//filters other filetypes than .js out
const commandFiles = fs
  .readdirSync("./Commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./Commands/${file}`);

  client.commands.set(command.name, command);
}

//say commands with prefix
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "start") {
    client.commands.get("simp").execute(message, args);
  } 
});

//PUT THIS AT THE END OF THE CODE
//Function to log bot into discord
client.login("Nzc1MzMwMDE2NDA1NzQ5Nzcx.X6kwWA.qj5NrBgLfB5sb9G4a1_um7UmT8I");

