const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'nordvpn',
	description: 'Generates a NordVpn account',
        aliases: ['vpn'],
	usage: '-vpn',
  	guildOnly: true,
  	myServerOnly: true,
  	genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var nordvpnAccounts = [
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
   var output = nordvpnAccounts[Math.floor(Math.random()*nordvpnAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('NordVpn Account Generated')
      .setDescription(`Here is your NordVpn account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
    
  }
};