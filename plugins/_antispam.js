export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 1) {
                //global.db.data.users[m.sender].banned = true
                m.reply('*Jangan Spam,jeda 5 detik sayang😋🥰😍!!*')
            }
            this.spam[m.sender].count = 1
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 1,
            lastspam: 5
        }
}
