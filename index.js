//import discord.js
const Discord = require("discord.js");
const client = new Discord.Client();

// import Magic Home API 
const MagicHome = require("magic-home"); 

//logs a message in the console when logged in
//sets status for bot
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: "The Simps 4" } });
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

//say commands without prefix or arguments
client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }

  const command = message.content.toLowerCase();

  if (command === "who is a simp") {
    client.commands.get("whoIsASimp").execute(message);
  }
});

//say commands with prefix
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "simps" || command === "simp" || command === "elton") {
    client.commands.get("simp").execute(message, args);
  } else if (command === "sorry") {
    client.commands.get("sorry").execute(message, args);
  } else if (command === "expose") {
    client.commands.get("expose").execute(message, args);
  } else if (command === "help") {
    client.commands.get("help").execute(message, args);
  } else if (command === "game") {
    client.commands.get("game").execute(message, args);
  } else if (command === "stream") {
    client.commands.get("stream").execute(message, args);
  } else if (command === "question") {
    client.commands.get("question").execute(message, args);
  } else if (command === "photos" || command === "photo") {
    client.commands.get("photos").execute(message, args);
  } else if (command === "stonks") {
    client.commands.get("stonks").execute(message, args);
  } else if (command === "lights") {
    client.commands.get("lights").execute(message, args);
  } 
});

//greeting command
client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "general"
  );

  if (!channel) {
    return;
  }

  channel.send(
    `Welcome to Nomnom, ${member}, do !help for a list of commands, and please **don't be a simp!**`
  );
});

//poll command
client.on("message", (message) => {
  let args = message.content.slice(prefix.length).split(/ +/);

  switch (args[0]) {
    case "poll":
      const Embed = new Discord.MessageEmbed()
        .setColor(0xffc300)
        .setTitle("Initiate Poll")
        .setDescription("!poll to initiate new poll");

      if (!args[1]) {
        message.channel.send(Embed);
        break;
      }

      let msgArgs = args.slice(1).join(" ");

      message.channel
        .send("📋 " + "**" + msgArgs + "**")
        .then((messageReaction) => {
          messageReaction.react("🙌🏻");
          messageReaction.react("🖕🏻");
        });

      break;
  }
});

//PUT THIS AT THE END OF THE CODE
//Function to log bot into discord
client.login("NzM4MzYzNjk4NDAxNTA5Mzg4.XyK0xw.L-MppRtskE_HjPdf0qfkSbE4S2E");
