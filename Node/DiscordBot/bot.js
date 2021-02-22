import Discord from 'discord.js';
import Chance from 'chance';
import {higgsNetStatus,
        higgsNetLatestReleases,
        higgsNetHelp,
        higgsNetWOL} from './services/reply-service.js';

const client = new Discord.Client();
const chance = new Chance();

client.once('ready', () => {
	console.log('Ready!');
});

client.once('ready', async () => {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    const Channel = client.channels.cache.get("266990405463344948")
    const messages = await Channel.messages.fetch()
    messages.forEach(message => {
      if (message.createdTimestamp < weekAgo) {
          message.delete()
      }
    });
})

client.on('message', async (msg) => {
    if (msg.content === '/higgsnet help') {
      const help = await higgsNetHelp();
      msg.reply(help)
    }

    if (msg.content === '/higgsnet status') {
      const status = await higgsNetStatus();
      msg.reply(status);
    }

    if (msg.content === '/higgsnet releases') {
      const releases = await higgsNetLatestReleases();
      msg.reply(releases)
    }

    if (msg.content === '/higgsnet start') {
      const wake = await higgsNetWOL();
      msg.reply(wake)
    }
})

client.login('LiQwNzQ1NTUxMTg2ODQ4NTQz.YytnDg.2qMhz8SPuBTPT1w-qiRMZXLEHLE');