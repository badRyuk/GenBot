const { MessageEmbed } = require('discord.js');
module.exports = {
	  name: 'origin',
	  description: 'Generates a Origin account',
    aliases: ['ORIGIN'],
	  usage: '-ORIGIN',
  	guildOnly: true,
  	myServerOnly: true,
  	genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var originAccounts = [
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
   var output = originAccounts[Math.floor(Math.random()*originAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Origin Account Generated')
      .setDescription(`Here is your Origin account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
    
  }
};