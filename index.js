const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});



client.on('ready', (client) => {
	console.log('Ready!');
  
  client.user.setActivity( {type: "PLAYING",name:'MINECRAFT 😎!',url:"https://discord.gg/dkGszzn3A2"});
  
    
});


client.on("messageCreate", message =>{
  if(message.content=== "hi") message.reply("Hello there!");
});

client.login(process.env.TOKEN);