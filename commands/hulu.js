const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'hulu',
	description: 'Generates a Hulu account',
	aliases: ['-HULU'], 
	usage: '-HULU', 
  guildOnly: true,
  myServerOnly: true,
  genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var huluAccounts = [
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
   var output = huluAccounts[Math.floor(Math.random()*huluAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Hulu Account Generated')
      .setDescription(`Here is your Hulu account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);    
  }
};