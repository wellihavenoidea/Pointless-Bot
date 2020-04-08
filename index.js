const Discord = require("discord.js")
const config = require('./config.json');
const Client = new Discord.Client();

const token = "Njk3MDQwNjA5OTUyOTIzNjQ4.Xo0elQ.G9paHshxHdmpZ08Quxc5DjfjF9k";

Client.on("ready", () =>{
    Console.log("This bot is online");
})

Client.on('message', message => {

    if (message.content === '?ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    
});


Client.login(config.token);