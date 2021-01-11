const { MessageEmbed } = require('discord.js');
module.exports = {
	  name: 'steam',
	  description: 'Generates a Steam account',
    aliases: ['STEAM'],
	  usage: '-STEAM',
  	guildOnly: true,
  	myServerOnly: true,
  	genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var steamAccounts = [
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
   var output = steamAccounts[Math.floor(Math.random()*steamAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Steam Account Generated')
      .setDescription(`Here is your Steam account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
    
  }
};