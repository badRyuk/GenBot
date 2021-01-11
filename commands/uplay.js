const { MessageEmbed } = require('discord.js');
module.exports = {
	  name: 'uplay',
	  description: 'Generates a Uplay account',
    aliases: ['UPLAY'],
	  usage: '-UPLAY',
  	guildOnly: true,
  	myServerOnly: true,
  	genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var uplayAccounts = [
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
   var output = uplayAccounts[Math.floor(Math.random()*uplayAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Uplay Account Generated')
      .setDescription(`Here is your Uplay account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
    
  }
};