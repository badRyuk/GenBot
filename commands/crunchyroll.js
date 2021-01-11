const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'crunchyroll',
	description: 'Generates a crunchyroll account',
	aliases: ['cr'],
	usage: '-cr',
  guildOnly: true,
  myServerOnly: true,
  genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var crunchyrollAccounts = [
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
   var output = crunchyrollAccounts[Math.floor(Math.random()*crunchyrollAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('CrunchyRoll Account Generated')
      .setDescription(`Here is your CrunchyRoll account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
  }
};