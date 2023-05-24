const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)
    let hapus = m.key.participant
    let pesan = m.key.id

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await m.reply(`*「 ANTI LINK 」*\n\nDetected *${await conn.getName(m.sender)}* Kamu mengirim linkgrup🤬!\n\nmaaf akan saya kick karena anda telah melanggar peraturan Group ini!`)
        if (isBotAdmin && bot.restrict) {
           await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: pesan, participant: hapus }})
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Owner & Admin Not Removed!')
    }
    return !0
}
