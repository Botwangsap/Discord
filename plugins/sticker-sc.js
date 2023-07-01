import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, global.API(`https://telegra.ph/file/5659a9267cebda5aa9679.png`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.help = ['.sc']
handler.tags = ['main']
handler.customPrefix = /^(.sc|sc|sourcecode)$/i;
handler.command = new RegExp();

export default handler
