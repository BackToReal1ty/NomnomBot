// Import Magic Home API
const {Control} = require("magic-home");

const ack = {
    power: true, // set to true if the first command was acknowledged, otherwise set it to false
    color: false, // set to true if the second command was acknowledged, otherwise set it to false
    pattern: true, // set to true if the third command was acknowledged, otherwise set it to false
    custom_pattern: true, // set to true if the third command was acknowledged, otherwise set it to false
};

let light = new Control("192.168.1.115", ack);

test = "123,1,623";

accepted = true;

console.log(test.length);

if (test.length > 5 && test.length < 13) {
    test = test.split(",");
    if ((test.length = 3)) {
        for (let i = 0; i < 4; i++) {
            if (parseInt(test[i]) > 255 || parseInt(test[i]) < 0) {
                accepted = false;
            }
        }
    }
} else {
    accepted = false;
}

if (accepted == true) {
    light.setColor(parseInt(test[0]), parseInt(test[1]), parseInt(test[2]));
    console.log("success");
} else {
    console.log("failure");
}
