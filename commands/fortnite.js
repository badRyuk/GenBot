const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'fortnite',
	description: 'Generates a fortnite account',
	aliases: ['fr'],
	usage: '-fr',
  guildOnly: true,
  myServerOnly: true,
  genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var fortniteAccounts = [
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
   var output = fortniteAccounts[Math.floor(Math.random()*fortniteAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Fortnite Account Generated')
      .setDescription(`Here is your Fortnite account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
    
  }
};