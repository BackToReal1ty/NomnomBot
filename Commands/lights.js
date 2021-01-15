// Import Magic Home API
const {Control} = require("magic-home");

module.exports = {
    name: "lights",
    description: "this is a command to turn on room lights",
    execute(message, args) {
        // set device
        let light = new Control("192.168.1.115");

        if (args.length < 1 || args === " " || args === "help") {
            message.channel.send(
                "1. !lights on => Turn on lights" +
                    "\n2. !lights off => Turn off lights" +
                    "\n3. !lights status => Check power status of the light" +
                    "\n4. !lights blue => Set light colour to blue" +
                    "\n5. !lights pink => Set light colour to pink" +
                    "\n6. !lights red => Set light colour to red" +
                    "\n7. !lights pruple => Set light colour to pruple" +
                    "\n8. !lights green => Set light colour to green" +
                    "\n9. !lights fade => Set light to fading effect" +
                    "\n10. !lights R G B => Set light colour to custom RGB values (separate with a space)"
            );
        } else {
            // convert arguments to lower case
            args = args.toString().toLowerCase();
            // block for different arguments
            if (args === "on") {
                // turning on
                light.queryState().then((state) => {
                    if (state.on === true) {
                        message.channel.send("They're already on you donut.");
                    } else {
                        light.turnOn();
                        message.channel.send("Lights successfully turned on");
                    }
                });
            } else if (args === "off") {
                // turrning off
                light.queryState().then((state) => {
                    if (state.on === false) {
                        message.channel.send("They're already off you donut.");
                    } else {
                        light.turnOff();
                        message.channel.send("Lights successfully turned off");
                    }
                });
            } else if (args === "status") {
                // check light status
                light.queryState().then((state) => {
                    if (state.on == true) {
                        message.channel.send("Lights are currently on.");
                    } else {
                        message.channel.send("Lights are currently off.");
                    }
                });
            } else if (args === "blue") {
                // preset blue
                light.setColor(0, 191, 64).catch((err) => process.stdout.write(""));
                message.channel.send("Lights set to blue");
            } else if (args === "pink") {
                // preset pink
                light.setColor(255, 40, 46).catch((err) => process.stdout.write(""));
                message.channel.send("Lights set to pink");
            } else if (args === "purple") {
                // preset purple
                light.setColor(159, 0, 96).catch((err) => process.stdout.write(""));
                message.channel.send("Lights set to purple");
            } else if (args === "red") {
                // preset red
                light.setColor(255, 0, 0).catch((err) => process.stdout.write(""));
                message.channel.send("Lights set to red");
            } else if (args === "green") {
                // preset green
                light.setColor(0, 255, 0).catch((err) => process.stdout.write(""));
                message.channel.send("Lights set to green");
            } else if (args === "fade") {
                // for fade effect
                light.setPattern("seven_color_cross_fade", 50).catch((err) => process.stdout.write(""));
                message.channel.send("Lights set to fade");
            } else if (args.length > 5 && args.length < 13) {
                // for custom rgb values
                // initialize accepted variable
                accepted = true;

                // split args into array
                args = args.split(",");
                //check if argument is a valid rgb code
                if (args.length == 3) {
                    for (let i = 0; i < 3; i++) {
                        if (parseInt(args[i]) > 255 || parseInt(args[i]) < 0) {
                            accepted = false;
                        }
                    }
                } else {
                    accepted = false;
                }
                if (accepted == true) {
                    light
                        .setColor(parseInt(args[0]), parseInt(args[1]), parseInt(args[2]))
                        .catch((err) => process.stdout.write(""));
                    message.channel.send("Lights colour set.");
                } else {
                    // default error if argument is invalid
                    message.channel.send("Invalid argument! Use !lights for a list of commands.");
                }
            } else {
                // default error if argument is invalid
                message.channel.send("Invalid argument! Use !lights for a list of commands.");
            }
        }
    },
};
