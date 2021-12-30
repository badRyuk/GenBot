# Goodbye...atleast for a while 
As of writing this...it has been almost an year since the previous update was done. A lot of code of the bot may be outdated as well as is missing features that could make it well like better like buttons and slash commands. A few errors have also been reported so i guess the bot doesn't work as intended anymore... Also, I haven't coded for a while. Hence, I'll be leaving this code here for a while until I either return to coding or just want to do this for no reason at all. I'll be still seeing issues and pull requests fell free to contribute as always. Won't be archiving this just yet as well. I've met up with a lot of people since the start of 2021 and want to spend time with them as well for now. mmm yeah thats all i think ive to say here even if noone's gonna read it. <br> <i>Thanks for Everything. Happy New Year
ByeBye! ヾ(＾ ∇ ＾)</i>
- badRyuk (30/12/2021)
<br>psst. also leaving all my private projects i have worked on as public now. well they are also outdated (┬┬﹏┬┬) but at least they are there ig. (*^▽^*)
# GenBot
This is a simple gen-bot made with discord.js. This works with discordjs v12. It uses a command handler making it is easier to edit parts of the bot. This only uses one package which is discord.js!

# Using the bot
Go through the entire bots code before using it. It is  very easy to use it. Just read up all the things given. Here are a few things you should keep in mind while going through the code:

- Change Server ID. You can keep the bot private only the bot owner can invite it or just add your server ID in all the commands. The commands will only be usable in that server
- Change channel ID. The commands can be only used in the given channel
- Change Emojis and Reactions. This may cause errors to you bot and hence I recomend you to change it
- Change thumbnails. Add a picture link in the place of any thing else given inside ``.setThumbnail("HERE ADD YOUR LINK")``.

# Installation > Setting Up > Starting > Using
## Installation
- Dowload this folder and save it to your desktop (Click the green download code button in the top right and click dowload zip)
<br>**OR**
- If you have git installed open command line and type 
``git clone https://github.com/badRyuk/GenBot``. You must have git installed for this step 

[Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

<hr>

## Setting Up
- **YOU NEED A DISCORD TOKEN TO START THE BOT. YOU HAVE TO PLACE THE DISCORD TOKEN IN AN ``.env`` FILE. Rename ``.env.example`` TO ``.env``. PLACE YOUR TOKEN IN THE SPACE PROVIDED WITHOUT ANY QUOTES.**
- **ADD CORRECT DETAILS IN THE ``config.json`` file.**<br>
**NOTE:** ``coownerId`` is optional. If you don't have a co-owner simply leave it blank

#### Set Up Info for ``config.json file``

- ``prefix`` > Fill it with your desired letter/symbol, etc. This is used before command name. Current value is ``-`` however you can change it to anything like ``; or ! or g! or pls``
- ``serverId`` > Certain Commands with ``myServerOnly value as true`` only can be used by members of your server. Add your server id here. Google on how to get the Server ID if you don't know.
- ``ownerId`` > Certain commands such as the reload command have the ``ownerOnly value as true``. This restricts the command to the bot owner only. Add your id here. Google to user ids if you don't know.
- ``coownerId`` > Certain commands such as the reload command have the ``ownerOnly value as true``. This restricts the command to the bot owners and coowners only. Leave it blank if none or add co owners id. Google to get user id's if you don't know.
- ``genchannelOnly`` > Certain commands are restricted to certain channels only. These commands have the ``genChannelOnly value as true``. Google to get channel Id's if you don't know
<hr>

#### Adding More Commands / Editing Commands

> If this is your first time ever making a discord.js bot I highly recomend you to watch a video on how to set up a discord.js. Also view up the [Discord.JS Guide](https://discordjs.guide/) and [Discord.js Docs](https://discord.js.org/#/docs/main/stable/general/welcome). If you don't know Javascript learn it first. Copying randomly won't help you with anything at all.

Refer to the ``test.js`` file. It explains everything you need to do in setting up.
<hr>

## Starting the Bot
- Finally after you're done with everything you wanted to do. Eg. Adding more commands, aliases, features, stock and all the stuff you want to do and feel you're ready to start the bot. Open command line/terminal. Type ``npm init``. You will have a bunch of questions just fill it or click enter without seeing anything (It won't make any difference. If you want you can change them afterwards in ``package-lock.json`` file.). FInally now install  the discord.js package using ``npm i discord.js`` and finally run ``node index.js``. 
<hr>

## Requirements!
- [Discord.js V12](https://www.npmjs.com/package/discord.js)
- [Node.js](https://nodejs.org/en/) 
- [Discord Token](https://discord.com/developers/applications)
> If this is your first time ever making a discord.js bot I highly recomend you to watch a video on how to set up a discord.js. Also view up the [Discord.JS Guide](https://discordjs.guide/) and [Discord.js Docs](https://discord.js.org/#/docs/main/stable/general/welcome).

<br>**DO NOT OVER KEEP YOUR DISCORD TOKEN OR API KEYS PUBLIC!**
If your Discord token is public people may use your bot to do whatever they want. From massbanning members, deleting channels, etc. Your can regenerate your token if you ever think that it has been leaked out in the public. Then change the old token in the ``.env`` file with the new token!

# Contributing and Issues

Feel free to contribute to the repoistry by forking the repoistry and creating a pull request!
If you have any issues open an issue!

# Update Log
 > Update 2.0
 - Updated On 11th January 2021
 > Changes/Fixes
 - [x] Changed Command Handler
 - [x] Added Dynamic Help Command
 - [x] Reload Command Added 
 - [x] Command Usages, Aliases, Cooldowns, Guild Only, Gen Channel Only, Specific Server Only Commands Added
 - [x] Added ``config.json`` file and more info on how to install, run, create commands to ``README.MD`` file.
 - [x] Further bug fixes and minor changes.
 - [x] Added ``test.js`` explaining all features and add mention as secondry prefix.

 **This update basically adds better features to the bot along with a better command handler. Further smaller updates will be passed subsequent to this. Suggestions for new features will be appreciated! As of now [ 11th of January 2021 or the date this update/commit is pushed ] all the features are working just as expected.**
# Other
- For Server ID's, Channel ID's you need to turn on Developer Mode. If you don't know how to turn out Google It
- For Emoji ID's > type ``\:EMOJI:`` which gives you ``<EMOJI_NAME:EMOJI_ID>`` as the result. The animated emoji id's can be obtained in the same way howeve, the result will be ``<a:EMOJI_NAME:EMOJI_ID>``
- If you want to add more accounts to the bot. Copy-past one of the examples and 

If you still find any issues feel fee to open an issue. If you like the repoistry make sure to star the repoistry ⭐
<br> Happy Coding
