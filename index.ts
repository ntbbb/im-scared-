import DiscordJS, { CommandInteractionOptionResolver, Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
  })

  
client.on('ready', () => {
    console.log('The bot is ready!')

client.on('ready', () => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: true
  })
})
    
})
 
  client.login(process.env.TOKEN) 