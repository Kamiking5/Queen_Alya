//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kamibroken5@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Kamiking5/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaWnznVKbYMT3YKacj0J";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWnznVKbYMT3YKacj0J";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "923086679730";
global.owner = process.env.OWNER_NUMBER || "923086679730";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0d0NlVkdFB1cWZTcGtqcXdGN2xKNkxEUFpmbmR5TlI4aDdVRVhaaG1uUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWZQWUtMZUxKTWFPbkNGRHJDWWRFbm1uZTVXNVFRaFdPQmZ2elF5ekgxZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRVV2T3BnTDVnTm9jZjlSclJudW05UytUNnpIN0VOaVE0U3dVQ1ZOM0djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMVd4L3pnTGZSaEJpa3FEK09aMFEwcEdQRnZNZjY3ckpRcllEbjhUendrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdMMVJjM3ErREZ5VEprS2VMK0pTSXQrdDBhTmU5WXJnRVI3NXJSRU11V0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE5ZFJrak96ZkhCTTZoT1BaVjZoSnR6Ui9LZkNINlVlNXlWMWUyT1RpME09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE15bVl3TG56UElicjMycXR0ck01TkcwaVg0NXFmWnBrb3REaGU1N0hIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidCs3LytrTjJBY0N1blV6NGVZSkpzSHNnck1zSVYwbTFIeXBQNHc2VG1Baz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1zUVA4S1hDdVFYbDRGYlVVck9uNWtVb1hpVDR2MlhpbVAwd1lMRlhuMkdMOEUwUXRXZGhieTlmT3hRbk56dDUrMm1uYUdpZFNnVDkrZ3M3VE91OUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6ImRqS1ozbnpuZEEwSVI1dTJlcDBKNUJiTFZ6WFJUbGl1UkpBU2hobHNtZHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpMX2F3bC0zUmwtVVVzNmNxZDd4bGciLCJwaG9uZUlkIjoiNWZiY2ZkNzctNzU3Zi00MDMxLTg5NzItNjhiYjE1MTFhMGJiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhJZDB4VzdIV0JmbDgybWtLWGpndnlVbXdaUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrWnRrMDRNV05iSllUVTRpL2k2SlY5eE8vMDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlc0RlJNTTciLCJtZSI6eyJpZCI6IjkyMzA4NjY3OTczMDo4MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTERXek1rSEVJTEp3YllHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYy83SnNLcWV2N0ZLSDU0TjFOQmtlWldVMW1RaW1Jb0djaDZUMVI3Uy8wYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNm15d1NqOFQ2a1g1VWR1MFBiWFRzTFZNbUo0TVhsRjdwc3cyNEZjMDFmK0Q5OUZxZEZvKzhMNTk4R3pobU1pTGZmbDlLWHVheGEvU3RUY0JjdWNTQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImtJb2JMZFIyS2xJdnllT0hQUXJmbitSZUtKSGZlem15TEMvRHRRLzFCbHZ5cHVyQ1FabCtWenZEeTc0UGtNdWV1Sm9iQzRicFdDbEwxV3AxVDI2S0JnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDg2Njc5NzMwOjgyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhQK3liQ3Fucit4U2grZURkVFFaSG1WbE5aa0lwaUtCbkllazlVZTB2OUgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQ5MzMyNjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmJRIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "✵♡♤KAMI 💔♤♡✵",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
