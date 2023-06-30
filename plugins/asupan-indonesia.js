import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.xyroinee.xyz/api/asupan/image/indonesia?apikey=${global.xyro}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(indonesia)$/i
handler.tags = ['main']
handler.help = ['indonesia']
handler.premium = true
handler.limit = true
 
export default handler
