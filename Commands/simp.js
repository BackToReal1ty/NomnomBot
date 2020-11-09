module.exports = {
    name: "simp",
    description: "this is a command to list simps",
    execute(message, args) {
        let count = 0
        while(count <= args){
            let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let code = ""
            for(var i = 0; i < 16; i++){
                code += dict.charAt(Math.floor(Math.random() * dict.length));
            }
            console.log(code)
            message.channel.send("https://discord.gift/" + code);
            count++;
        }       
    },
};
