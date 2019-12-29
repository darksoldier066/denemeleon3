const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Yetkili Komutları:",`
ᴍ!ᴏᴛᴏᴛᴀɢ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʟᴇʀ ɪᴄɪɴ ᴏᴛᴏ ᴛᴀɢ ᴠᴇʀɪʀ. 
ᴍ!ᴄɪᴋɪs-ᴍᴇsᴀᴊ-ᴀʏᴀʀʟᴀ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴅᴇɢɪsᴛɪʀᴍᴇɴɪᴢɪ sᴀɢʟᴀʀ. 
ᴍ!sᴀ-ᴀs: sᴀ-ᴀs ᴀʏᴀʀʟᴀʀ. 
ᴍ!sᴀʏᴀᴄ: sᴀʏᴀᴄ <sᴀʏɪ> <#ᴋᴀɴᴀʟ> 
ᴍ!ᴏᴛᴏʀᴏʟ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴʟᴇʀᴇ ᴠᴇʀɪʟᴇᴄᴇᴋ ᴏʟᴀɴ ᴏᴛᴏʀᴏʟᴜ ᴀʏᴀʀʟᴀʀ. 
ᴍ!ᴋᴀᴘᴀᴛᴏᴛᴏʀᴏʟ: ᴏᴛᴏʀᴏʟ ᴋᴀᴘᴀᴛᴍᴀ ɪsᴇ ʏᴀʀᴀʀ. 
ᴍ!ᴏʏʟᴀᴍᴀ-ᴋᴀɴᴀʟ: ᴏʏʟᴀᴍᴀ ᴋᴀɴᴀʟɪɴɪ sᴇᴄᴍᴇɴɪᴢᴇ ʏᴀʀᴀʀ. 
ᴍ!ᴅᴜʏᴜʀᴜ-ᴋᴀɴᴀʟ-ᴀʏᴀʀʟᴀ: ᴅᴜʏᴜʀᴜ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ.
ᴍ!ɢɪʀɪsᴍᴇsᴀᴊ: ɢɪʀɪs ᴍᴇsᴀᴊɪɴɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
ᴍ!ᴄɪᴋɪsᴍᴇsᴀᴊ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
ᴍ!ᴏᴢᴇʟ-ɢᴏʀᴜsᴜʀᴜᴢ-ᴀʏᴀʀʟᴀ: sᴜɴᴜᴄᴜᴅᴀɴ ᴀʏʀɪʟᴀɴ ᴋɪsɪʏᴇ ᴏᴢᴇʟᴅᴇɴ ɢᴏɴᴅᴇʀɪʟᴇᴄᴇᴋ ᴍᴇsᴀᴊɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
ᴍ!ᴏᴢᴇʟ-ʜᴏsɢᴇʟᴅɪɴ-ᴀʏᴀʀʟᴀ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʏᴇ ᴏᴢᴇʟᴅᴇɴ ɢᴏɴᴅᴇʀɪʟᴇᴄᴇᴋ ᴍᴇsᴀᴊɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
ᴍ!ᴍᴏᴅ-ʟᴏɢ-ᴀʏᴀʀʟᴀ: ᴍᴏᴅᴇʀᴀsʏᴏɴ ᴋᴀʏɪᴛʟᴀʀɪ ᴋᴀɴᴀʟɪɴɪ ᴀʏᴀʀʟᴀʀ. 
ᴍ!gç: ʀᴇsɪᴍʟɪ ʜɢ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ. 
ᴍ!ʙᴀɴ: ɪsᴛᴇᴅɪɢɪɴɪᴢ ᴋɪsɪʏɪ ʙᴀɴʟᴀʀ. 
ᴍ!ᴅᴜʏᴜʀᴜ: ᴅᴜʏᴜʀᴜ sɪsᴛᴇᴍɪ. 
ᴍ!ʟɪɴᴋ-ᴇɴɢᴇʟʟᴇ: ʟɪɴᴋ ᴇɴɢᴇʟʟᴇᴍᴇ sɪsᴛᴇᴍɪɴɪ ᴀᴄɪᴘ ᴋᴀᴘᴀᴛᴍᴀɴɪᴢɪ sᴀɢʟᴀʀ. 
ᴍ!sᴜɴᴜᴄᴜ-ᴋᴜʀ: ʙᴜʟᴜɴᴜʟᴀɴ sᴜɴᴜᴄᴜ ɪᴄɪɴ ɢᴇʀᴇᴋʟɪ ᴋᴀɴᴀʟʟᴀʀɪ ᴏʟᴜsᴛᴜʀᴜʀ. 
ᴍ!ʟᴏɢ-ᴀʏᴀʀʟᴀ: ʟᴏɢ ᴋᴀɴᴀʟɪ ᴀʏᴀʀʟᴀsɪɴɪᴢ. 
ᴍ!ʀᴇᴋʟᴀᴍ-ᴛᴀʀᴀᴍᴀsɪ: ᴋᴜʟʟᴀɴɪᴄɪʟᴀʀɪɴ ᴏʏɴᴜʏᴏʀ ᴍᴇsᴀᴊɪɴᴅᴀᴋɪ ᴠᴇ ᴋᴜʟʟᴀɴɪᴄɪ ᴀᴅʟᴀʀɪɴᴅᴀᴋɪ ʀᴇᴋʟᴀᴍʟᴀʀɪ ᴛᴀʀᴀʀ. 

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili','yetkilis'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};
