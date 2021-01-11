const { prefix } = require('../config.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
  guildOnly: true,
   myServerOnly: true,
	aliases: ['commands', 'cmds', 'h'],
	usage: `${prefix}help [Optional Command Name]`,
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
        	const helpEmbed = new MessageEmbed();
			helpEmbed.setTitle('Help Command');
			helpEmbed.setDescription('Here are my commands');
			helpEmbed.addField(`${prefix}help`, `This same command. Use ${prefix}help [command] for more info on a command`)
		helpEmbed.addField(`${prefix}crunchyroll`, `Generates a CrunchyRoll Account`)
		helpEmbed.addField(`${prefix}fortnite`, `Generates a Fortnite Account`)
		helpEmbed.addField(`${prefix}hulu`, `Generates a Hulu Account`)
		helpEmbed.addField(`${prefix}minecraft`, `Generates a Minecraft Account`)
		helpEmbed.addField(`${prefix}nordvpn`, `Generates a NordVPN Account`)
		helpEmbed.addField(`${prefix}origin`, `Generates a Origin Account`)
		helpEmbed.addField(`${prefix}roblox`, `Generates a Roblox Account`)
		helpEmbed.addField(`${prefix}spotify`, `Generates a Spotify Account`)
		helpEmbed.addField(`${prefix}steam`, `Generates a Steam Account`)
		helpEmbed.addField(`${prefix}uplay`, `Generates a Uplay Account`)
    helpEmbed.setColor("RANDOM")
    message.channel.send(helpEmbed)
		}
if(!args[0]){
  return false;
} 
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name}, ${command.usage}`);
    if(command.ownerOnly) {
      data.push(`**Usable by Everyone:** No | Bot Owner(s) Only`) }
    else {
data.push(`**Usable by Everyone:** Yes`)
    }
    if(command.myServerOnly){ 
    data.push(`**Specific Server Restricted Command**: Yes. Can be used in specific servers only`)
} else {
  data.push(`**Specific Server Restricted Command**: No`)
}
if (command.guildOnly){
  data.push(`**Guild Only**: Yes. Cannot be used in DM's`)
} else {
  data.push(`**Guild Only**: No`)
}
 		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};