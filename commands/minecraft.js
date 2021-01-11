const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'minecraft',
	description: 'Generates a Minecraft account',
  aliases: ['mc'],
	usage: '-mc',
  guildOnly: true,
  myServerOnly: true,
  genChannelOnly: true,
	cooldown: 5,
	execute(message) {
   var minecraftAccounts = [
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
   var output = minecraftAccounts[Math.floor(Math.random()*minecraftAccounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Minecraft Account Generated')
      .setDescription(`Here is your Minecraft account!`)
      .addField(`${output}`, `Thank You for generating an account at **${message.guild.name}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.author.send(embed);
    
  }
};