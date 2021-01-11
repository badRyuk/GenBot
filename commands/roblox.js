const { MessageEmbed } = require('discord.js');
module.exports = {
	  name: 'roblox',
	  description: 'Generates a Roblox account',
    aliases: ['ROBLOX'],
	  usage: '-ROBLOX',
  	guildOnly: true,
  	myServerOnly: true,
  	genChannelOnly: true,
	  cooldown: 5,
	execute(message) {
   var robloxAccounts = [
     "MAIL_ADDRESS | PASSWORD",
     "MAIL_ADDRESS | PASSWORD",
     "MAIL_ADDRESS | PASSWORD",
     "MAIL_ADDRESS | PASSWORD",
     "MAIL_ADDRESS | PASSWORD",
     "MAIL_ADDRESS | PASSWORD", 
     "MAIL_ADDRESS | PASSWORD", 
     "MAIL_ADDRESS | PASSWORD"
   ];
   // Use that format so output sent will be MAIL_ADDRESS | PASSWORD. If out of stock change each of them with out of stock
   var output = robloxAccounts[Math.floor(Math.random()*robloxAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Roblox Account Generated')
      .setDescription(`Here is your Roblox account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
    
  }
};