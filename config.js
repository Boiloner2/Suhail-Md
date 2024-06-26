const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348076531150";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_52_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQjluMitsQklrZi9OR1V0QlJnT1BHWFBkRXJmRUNNd2x5cXdDUEVyNGhrdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc2NTMxMTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwM0U0NzQ0NDVDNTNCNjVFQTY0RjlBRjE1OUJCOTMwQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk0MjA3NjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjlTdDVfU3FUcHk5QXpJVGg4LXU0Z1wiLFxuICBcInBob25lSWRcIjogXCIwZTRkNjFiOC04ZTYwLTQ3YzAtYmFmYS04MzRmZWJkZmFiZjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMTgwLFxuICAgICAgMjMzLFxuICAgICAgNzQsXG4gICAgICA4NyxcbiAgICAgIDcxLFxuICAgICAgMjMwLFxuICAgICAgMjAzLFxuICAgICAgMTc1LFxuICAgICAgMjI4LFxuICAgICAgNDEsXG4gICAgICAxNDksXG4gICAgICA2OSxcbiAgICAgIDE1OSxcbiAgICAgIDIwMyxcbiAgICAgIDIwOSxcbiAgICAgIDYxLFxuICAgICAgMjA0LFxuICAgICAgODcsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICAxOTAsXG4gICAgICA5NSxcbiAgICAgIDEyOSxcbiAgICAgIDYyLFxuICAgICAgMTIyLFxuICAgICAgMjA4LFxuICAgICAgMjIyLFxuICAgICAgODYsXG4gICAgICAyNDUsXG4gICAgICAxODcsXG4gICAgICAzNCxcbiAgICAgIDIwMSxcbiAgICAgIDI2LFxuICAgICAgMTMwLFxuICAgICAgMjI0LFxuICAgICAgNTEsXG4gICAgICAxNDEsXG4gICAgICAxODksXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1A1UzU1UlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzY1MzExNTA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNTI5MTE2NTU4MTU0MDoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdjc2dU1ERU5TTzhiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1oSCtMTFRhZDh0d1oyQ2p0ZHZwTzkrWEd4N2ZrcktPTE5vMTVGejNsU0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibXc1OVIyZm52YjZzbG9rc0pSWWl2c2Q1TTRiUzJuRU5KelppZHcxdDFLWjc5U3Y2bUNTd2F0dlVDYUZUVS9iZ3ZFMHJ1QXk2NDNhMVd0VEtXcFRHQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTG1aaXBEak00b005SEptbzdOd05MNWJtNE9XSk5ydkF4NTdCMkVLdTY1dlQ4Zng2QjJ4djVtaGxZVUZkMnEyaXhLbi9WaFg2RkVtMmpuZ0w3TU51aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NjUzMTE1MDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk0MjA3NjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLdlNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt2Uy5qc29uIjogIntcImtleURhdGFcIjpcIlN0MFBBOStiWm9Yb29ySkdITjluMXdCV0l4SmJRWUh5OFgvRXdiWTVydkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNDY3Njk1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTQyMDc0OTQ0MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
