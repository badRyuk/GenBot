module.exports = {
	name: 'test', // Command Name. This command will run when the prefix and command name will be called. Here -test
	description: 'test', // This appears in the help command. Remove this and it won't appear in help command. A short description of a command
	aliases: ['testcommand'], // An aliasis is not necessary for all commands so if you don't have one remove the aliasis line. If a person calls -testcommand the bot will still reply. More than one aliasis is allowed. Add it using commas like in help.js file
	usage: '-testcommand', // A small note on how to use the bot
  guildOnly: true, // This restricts the command to be only be used in a server and not the Direct messages
  myServerOnly: true, // This restricts the command to your own server only. Add your serverId in config.json
  ownerOnly: true, // Such a command can only be used by a bot dev whose id are entered in config.json. 
  genChannelOnly: true, // The gen commands are to be only used in gen channels. Enter the channel Id of your gen channel in config.json
	cooldown: 5, // Adds cooldown to your command in seconds. If none is enterd cooldown is automatically set to 1 seconds
	execute(message, args) {
  message.author.send('test command working....')

  // Hey a few things on more setup.
  // - In case your command has genChannelOnly as true, you will further also set the values of guildOnly and myServerOnly as true too. If you can't understand why read all the comments again.

  // - If you want default cooldown to be something else set else head over to this line 
  // const cooldownAmount = (command.cooldown || 1) * 1000;
  // AND CHANGE 1 TO ANYTHING ELSE. IF 1 is entered means one second if you did'nt find it out

  // - Feel free to open isusses if you need help!
  }
};