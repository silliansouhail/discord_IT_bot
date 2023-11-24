const express = require('express');
const discord = require('discord.js');
const dotenv = require('dotenv')

dotenv.config()
const app = express();
app.listen(3000,() => console.log('Server started'));
app.get('/',(req,res) => {
  res.send('Hello World');
});


const client = new discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
});
client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }

})
client.login(process.env.token);