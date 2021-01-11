const { MessageEmbed } = require('discord.js');
module.exports = {
	  name: 'spotify',
	  description: 'Generates a Spotify account',
    aliases: ['SPOTIFY'],
	  usage: '-SPOTIFY',
  	guildOnly: true,
  	myServerOnly: true,
  	genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var spotifyAccounts = [
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
   var output = spotifyAccounts[Math.floor(Math.random()*spotifyAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Spotify Account Generated')
      .setDescription(`Here is your Spotify account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
    
  }
};