let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa* 」
│ • *1 Minggu:* 15K
│ • *1 Bulan:* 25K
│ • *Permanen:* 30K
┠──「 *Pembayaran* 」
│ • *Ovo:* [081998425782]
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(donasi|sewa|prem|premium)$/i

export default handler
