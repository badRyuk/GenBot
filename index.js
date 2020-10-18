const Discord = require('discord.js');

const client = new Discord.Client();

const { MessageEmbed } = require('discord.js');

const { oneLine, stripIndent } = require('common-tags');

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands= new Discord.Collection();

const prefix = ';';
//You can change the prefix if you like. It doesn't have to be !


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));

client.on("error", console.error);

client.on('ready', () => {
    console.log('I am ready');
    client.user.setStatus(`idle`)
});


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase() ||  client.aliases.get(commadName);

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
client.on("message", message => {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if(message.channel.type === 'dm') return;
    if (message.mentions.has('760773438775492610')) { 
     const embed = new MessageEmbed()
        .setTitle('Hi, I\'m GenBot. Need help?')
        .setThumbnail('https://cdn.discordapp.com/avatars/760773438775492610/a696351af5587d56907e85e97ed696cf.webp')
        .setDescription(`You can see everything I can do by using the \`${prefix}help\` command. Remember commands won't work in DM.`)
        .addField('Support', oneLine`
          If you have questions, suggestions, feel free to contact a staff member!
        `)
        .addField('Thank You for using WGOBot!', '<:Heart:764027864991268874>')
        .setColor("RANDOM");
        message.channel.send(embed).then(sentEmbed => {
    sentEmbed.react("765120683428282389")
    })
    };
});
 client.on("message", message => {
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
      if(message.channel.type === 'dm') return;

//    if (message.mentions.has('726452843606966405')) { 
//		message.react('763707505174904843')
//			.catch(() => console.error('One of the emojis failed to react.'));
//   }
 });
client.login(process.env.DISCORD_TOKEN);

