const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`تم تسجيل الدخول بنجاح باسم: ${client.user.tag}`);
  
  const updateStatus = () => {
    try {
      client.user.setPresence({
        activities: [{
          name: 'Mzmar ?',
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
    } catch (err) {
      console.error('خطأ في تحديث الحالة:', err);
    }
  };

  updateStatus();
  setInterval(updateStatus, 60000);
});

// تأكد من وجود التوكن، وإلا سيتوقف البوت فوراً
if (!process.env.DISCORD_TOKEN) {
  console.error("خطأ: لم يتم العثور على التوكن في إعدادات البيئة!");
  process.exit(1);
}

client.login(process.env.DISCORD_TOKEN).catch(err => {
  console.error("فشل تسجيل الدخول:", err);
});
