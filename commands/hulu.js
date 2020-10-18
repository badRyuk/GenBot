const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "hulu",
  description: "Sends a hulu account",
 run: async(client,message,args,guild) => {
   var accounts = [
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
   var output = accounts[Math.floor(Math.random()*accounts.length)];
    const embed = new MessageEmbed()
      .setTitle('Hulu Account Generated')
      .setDescription(`Here is your hulu account!`)
      .addField(`${output}`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.author.send(embed);
  }
};