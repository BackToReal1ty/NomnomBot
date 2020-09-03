module.exports = {
  name: "stonks",
  description: "this is a command to list stonky things",
  execute(message, args) {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        message.channel.send("**Stonky Thing:** \nIsaac's Aim");
        break;
      case 1:
        message.channel.send("**Stonky Thing:** \n40 Minutes");
        break;
      case 2:
        message.channel.send("**Stonky Thing:** \nValorant's Shorty");
        break;
      case 3:
        message.channel.send(
          "**Stonky Thing:** \nPre 1.0.7 Sage #RipSage #IsaacSGFlights"
        );
    }
  },
};
