import fetch from 'node-fetch'

const handler = async (m, { conn, args }) => {
  try {
    if (!args[0]) throw 'Input URL' 
    if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Invalid URL' 
    
    const res = await fetch(`https://saipulanuar.ga/api/download/mediafire?url=${args[0]}`)
    const data = await res.json()
    const json = data.result
    
    const message = `
Nama File: ${json.title}
Ukuran: ${json.filesize}
Tipe: ${json.mime}
Sedang Diproses...
`
    conn.sendFile(m.chat, json.link, json.title, '', m, null, { mimetype: json.mime, asDocument: true })
    m.reply(message)
  } catch (err) {
    m.reply(err)
  }
}

handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mf|mediafire)$/i
handler.limit = true

export default handler
