/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;B2xD1K7L#xAZpZIIPBbXAU1aF_F6tizN9x95odamSwiPXJM9w6NI' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = ''



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94715349194'

global.OWNER_NAME = 'charii_X'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝘀- 𝘁𝗲𝗳𝗮𝗻 𝗘𝗩𝗢𝗡𝗭  +𝗰 𝗵𝗮 𝗿𝗶𝘁 𝗵𝘇'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Janiya 🤹‍♂️' //sticker

global.FOOTER = '𝘀- 𝘁𝗲𝗳𝗮𝗻 𝗘𝗩𝗢𝗡𝗭  +𝗰 𝗵𝗮 𝗿𝗶𝘁 𝗵𝘇2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '𝘀- 𝘁𝗲𝗳𝗮𝗻 𝗘𝗩𝗢𝗡𝗭  +𝗰 𝗵𝗮 𝗿𝗶𝘁 𝗵𝘇  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '{type:alive}

{text:```💃🏻𝙷𝙴𝚈 QUEEN AMDI 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴 𝙽𝙾𝚆 💃🏻⚖️```
▬▬▬▬▬▬▬▬▬▬▬▬

*🔨.𝙳𝙴𝙿𝙻𝙾𝚈𝙴𝙳 𝙱𝚈: ᴄʜᴀʀɪᴛʜᴀ ᴄʜɪʀᴀᴛʜ*

*🔨.𝚃𝚈𝙿𝙴 : .panel 𝚃𝙾 𝙶𝙴𝚃 𝙲𝙸𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃*

*🔨𝚃𝚈𝙿𝙴: .invite 𝚃𝙾 𝙶𝙴𝚃 𝙸𝙽𝚅𝙸𝚃𝙴 𝙻𝙸𝙽𝙺*

*⚖️𝙱𝙾𝚃 𝙽𝙴𝙼𝙴*:𝚀𝚄𝙴𝙴𝙽 𝙰𝙼𝙳𝙸

*⚙️𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁: 𝙲𝙷𝙰𝚁𝙸𝚃𝙷𝙰 𝙲𝙷𝙸𝚁𝙰𝚃𝙷*

*📱𝙽𝚄𝙼𝙱𝙴𝚁: 94751239272*

*⚖️𝙸𝙽𝚂𝚃𝙰𝙻𝙻 𝙱𝙾𝚃:https://amdaniwasa.com*

*🧑🏻‍💻𝚀𝚄𝙴𝙴𝙽 𝙰𝙼𝙳𝙸 𝙱𝙾𝚃 𝙸𝚂 𝙽𝙾𝚆 𝙾𝙽*:𝙷𝙴𝚁𝙾𝙺𝚄

*🛠️𝙸𝙽𝚂𝚃𝙰𝙻𝙻𝙴𝙳 𝚅𝙴𝚁𝚂𝙸𝙾𝙽*:4.0.6

*🗃️𝙿𝚄𝙱𝙻𝙸𝙲 𝙶𝚁𝙾𝚄𝙿: https://chat.whatsapp.com/DRJlODr5Y1hEXcvENgKBnu*

```💃🏻𝚃𝙷𝙰𝙽𝙺 𝚈𝙾𝚄 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚀𝚄𝙴𝙴𝙽 𝙰𝙼𝙳𝙸⚖️```}

{url:💃🏻 Github|https://github.com/BlackAmda/QueenAmdi/}
{url:🎞️ AN Tech YouTube Channel|https://youtube.com/channel/UCZx8U1EU95-Wn9mH4dn15vQ}

{button:*✷𝚂𝚈𝚂𝚃𝙴𝙼 𝚂𝚃𝙰𝚃𝚄𝚂___🤍🫧🍁*|system}
{button:*✷𝚅𝙴𝚁𝚂𝙸𝙾𝙽___ 🦋🌍*|qaversion}
{button:*✷𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂___📖🔨*|panel}' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

