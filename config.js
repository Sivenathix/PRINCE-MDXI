const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZRaHc0eVBOV1RKaFdFQmtwVFMwdnI3MDljeklMTUJTMk1IcStydjdXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWENFYjQ1cWhuUktlcUNMY3RITTlhZFV5YjJkcU5oaUZIOTZqRGdtd1NsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQVEwaUVSaDh4OXNqUUVCK3dpQVQxalQ4ZkhZZEhQL1FNd240ZDVTdm1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRNEJENXQ0MENCYmE5QnpXdmo2TDk0QzVNMnROMUJoWkNTeXFMc3IxSkVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJcittVDkzemU2cFlmUEZ4RndXc2hKTmlCTjRxVWtXQ0wrblMrZTA4WGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IR2liKy9LZ2FzNzJRL2NTVm9ZeHJqMCtzclNOa2Izd2UrZ1dBVk0rejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1A5S2ZRMzZFbG4vQW9FUllUVlZLL2d5WjZUT1hLQjlZb3hrMnhtanNWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnJJM0dGKzlKTzR1V3lkWi8zMjRybmpnY2E4ZEpPLy84MXJydlk1ekpnUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5rd3hMa3E4NXkrWkE2UDE4OFpRelZaU3A3RnN5UENvZDBRcVJRMHBwR05MUXVQbGY1dHhORTFqTFVIQU9KVXFBSHM2MjJBTEhQc3E3ZzM5YW1NS0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJzbkJqUWk5UXI4bDdMRHR4Yzd1WWhKVkdKQWltMlVDM0ZRNjJVRlRLeTUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfdnJ3Q2ZEd1JiS1VJTERWNkNwOUxBIiwicGhvbmVJZCI6ImQ5YjNhOGQwLTY5YzQtNDNkNC1hYmMwLWJhODQ4ZjUyYmM1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMHFzSWhCdmkxSFpWU0p3T3hub21zVkZLZnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHpzOWJHb2hVTXNWeWVVTlp6KzJyTUtCUkFnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNYQjIzQ1hEIiwibWUiOnsiaWQiOiIyNzc5OTI0ODc5Mzo2OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTldjMjBVUXBKeVZ3QVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibHkzR1oxQ0hWd2tPRHJ5R1BiQjFOREcxYzJyMzFKOW5lMnpVUWxqc2ZTVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicTVoWldVdlRkczlxRVB6akJFZHhCZkhJbzV5R0x6UFp6OUswdFRzRSt3YjQ5UXpLbiswajJaMUtuZGV6Yk1rZjdHKzcrd2NFL05wdERhN3NJbHVkQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii84dE9adWVxU3RXNnZpY1BMTlBVMmIyeG5IUisyclVuNU5nOWxPQ2YyZnN6c3IyUmJLeTg1QWdmUEp1K0NKTzlJdXFJN0FRTHNtclFZTzl1dDJtRkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3OTkyNDg3OTM6NjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmN0eG1kUWgxY0pEZzY4aGoyd2RUUXh0WE5xOTlTZlozdHMxRUpZN0gwbCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTE3ODE2MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGeDAifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "27799248793",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Jayden",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "27799248793",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
