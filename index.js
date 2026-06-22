const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`Logged in as: ${client.user.tag}`);
  
  const setStatus = () => {
    client.user.setPresence({
      activities: [{
        name: 'Mzmar is here ?',
        type: 'STREAMING',
        url: 'https://twitch.tv/LAST',
        details: 'https://discord.gg/group901',
        state: 'هلوه',
        assets: {
          largeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbzhEBVf2q8UsG_w-dMZdg8G_q8hG3ukIvlB9_dEMjw&s=10'
        }
      }],
      status: 'online'
    });
  };

  setStatus();
  setInterval(setStatus, 60000);
});

client.login(process.env.DISCORD_TOKEN);
