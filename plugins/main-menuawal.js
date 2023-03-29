// Script Ori By BochilGaming
// Ditulis Ulang Oleh ImYanXiao

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default

const defaultMenu = {
  before: `
╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
┴│☂︎ *Name:* %name
⬡│☂︎ *Tag:* %tag
⬡│☂︎ *Premium:* %prems
⬡│☂︎ *Limit:* %limit
⬡│☂︎ *Money:* %money
⬡│☂︎ *Role:* %role
⬡│☂︎ *Level:* %level
┬│☂︎ *Total Xp:* %totalexp
│╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
┴│    *${ucapan()} %name!*
⬡│☂︎ *Tanggal:* %week %weton
⬡│☂︎ *Date:* %date
⬡│☂︎ *Tanggal Islam:* %dateIslamic
┬│☂︎ *Waktu:* %time
│╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *Nama Bot:* %me
⬡│☂︎ *Mode:* %mode
⬡│☂︎ *Prefix:* [ *%_p* ]
⬡│☂︎ *Baileys:* Multi Device
⬡│☂︎ *Platform:* %platform
⬡│☂︎ *Type:* Node.Js
⬡│☂︎ *Uptime:* %muptime
┬│☂︎ *Database:* %rtotalreg dari %totalreg
│╰────────────────···
╰──────────═┅═──────────
⃝▣──「 *INFO CMD* 」───⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣
%readmore
`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: '│○ %cmd %isPremium %islimit',
  footer: '▣───────────⬣\n',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
let tags = {
'main': 'Main',
'ai': 'Ai feature',
'stress': 'Stress',
'menfess': 'Menfess',
'game': 'Game',
'rpg': 'RPG Games',
'textpro': 'Make text logo',
'xp': 'Exp & Limit',
'sticker': 'Sticker',
'kerang': 'Kerang Ajaib',
'quotes': 'Quotes',
'fun': 'Fun',
'anime': 'Anime',
'admin': 'Admin',
'group': 'Group',
'vote': 'Voting',
'absen': 'Absen',
'premium': 'Premium',
'stalk': 'Stalk',
'internet': 'Internet',
'downloader': 'Downloader',
'tools': 'Tools',
'nulis': 'MagerNulis & Logo',
'audio': 'Audio',
'maker': 'Maker',
'berita': 'Berita',
'database': 'Database',
'quran': 'Al Qur\'an',
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced',
'info': 'Info',
  '': 'No Category',
}
 
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
   
   const sections = [
   {
	title: `${htki} ᴍᴀɪɴ ${htka}`,
	rows: [
    {title: `⚡ ${pmenus} SPEED BOT`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
    {title: `💌 ${pmenus} OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
	]
    },{
	title: `${htki} sᴜᴘᴘᴏʀᴛ ${htka}`,
	rows: [
    {title: `🔖 ${pmenus} SEWA`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
    {title: `🌟 ${pmenus} BUY PREMIUM`, rowId: ".premium", description: "Menampilkan list harga premium"},
    {title: `💹 ${pmenus} DONASI`, rowId: ".owner kontak", description: 'Support BOT agar lebih fast respon'},
	]
	},{
	title: `${htki} ᴍᴇɴᴜ ${htka}`,
	rows: [
    {title: `${pmenus} All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
    {title: `${pmenus} Ai`, rowId: ".? ai", description: "All AI features"},
    {title: `${pmenus} Stress`, rowId: ".? Stress", description: "Kali aja kamu halu"},
    {title: `${pmenus} Menfess`, rowId: ".? menfess", description: "Mengirim pesan secara anonim"},
    {title: `${pmenus} Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
    {title: `${pmenus} Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
    {title: `${pmenus} Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
    {title: `${pmenus} Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
    {title: `${pmenus} Text Pro`, rowId: ".? textpro", description: "Buat text dari logo"},
    {title: `${pmenus} Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
    {title: `${pmenus} Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},
    {title: `${pmenus} Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
    {title: `${pmenus} Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
    {title: `${pmenus} Premium`, rowId: ".? premium", description: "Only premium Users"},
    {title: `${pmenus} Stalk`, rowId: ".? stalk", description: "Kepoin akun seseorang"},
    {title: `${pmenus} Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
    {title: `${pmenus} Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
    {title: `${pmenus} Berita`, rowId: ".? berita", description: "Cari berita terupdate"},
    {title: `${pmenus} Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
    {title: `${pmenus} Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
    {title: `${pmenus} Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
    {title: `${pmenus} Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
    {title: `${pmenus} Group`, rowId: ".? group", description: "Only Groups"},
    {title: `${pmenus} Admin`, rowId: ".? admin", description: "Only Admin Group"},
    {title: `${pmenus} Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
    {title: `${pmenus} Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
    {title: `${pmenus} Info`, rowId: ".? info", description: "Info info BOT"},
    {title: `${pmenus} Owner`, rowId: ".? owner", description: "Owner Only!"},
    ] },
]

 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./7732bfe51150b0ad497e6e7460c36c56.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  
    let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg'])
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fotonya2 + 'Menu')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    
    const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: '[❗] Memuat Menu ' + '...\n Sabar Ya Kak ^ω^', 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fotonya2 + 'Loading')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    await conn.reply(m.chat, '*Tunggu Sebentar Kak. . .*', ftrol) 
   
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`

//-------DOC TEMPLATE
    const message = { 
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(urls)).buffer(),
            fileName: wm,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot,
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://instagram.com/anggatzi123'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Instagram',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner🎐',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed⚡',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi💵',
                        id: '.donasi'
                    }
                },
            ]
        }
     //---Made By @ImYanXiao
    // Mampus Di Enc 🧢
    // Gausah Dihapus, Thx
    //------------------ DOCUMENT WITH EXTERNALADS WITHOUT BUTTON
    function _0x2daf(){const _0x4c1076=['namedoc','social','1017dFLzIP','11680bWFOeX','sendMessage','1FnTozH','6qNtNxK','445374chjKag','2096504ySppGm','627669MaFyqj','readFileSync','ʜᴏᴡ\x20ᴀʀᴇ\x20ʏᴏᴜ\x20ᴛᴏᴅᴀʏ?','374160lMCurS','356228pujvOS','./thumbnail.jpg','1019845zOpQQK','pdf','chat'];_0x2daf=function(){return _0x4c1076;};return _0x2daf();}const _0x110137=_0x13bb;(function(_0x14d3d7,_0x67b65e){const _0x3a56bf={_0x2e964c:0x1b0,_0x4fc539:0x1bd,_0x2a1845:0x1b1,_0x2b6724:0x1b3,_0x4293cc:0x1b8,_0x59080a:0x1b9},_0x30692c=_0x13bb,_0x119b1c=_0x14d3d7();while(!![]){try{const _0x181128=parseInt(_0x30692c(0x1bb))/0x1*(parseInt(_0x30692c(_0x3a56bf._0x2e964c))/0x2)+parseInt(_0x30692c(_0x3a56bf._0x4fc539))/0x3+parseInt(_0x30692c(_0x3a56bf._0x2a1845))/0x4+parseInt(_0x30692c(_0x3a56bf._0x2b6724))/0x5*(parseInt(_0x30692c(0x1bc))/0x6)+-parseInt(_0x30692c(0x1ad))/0x7+-parseInt(_0x30692c(0x1be))/0x8+parseInt(_0x30692c(_0x3a56bf._0x4293cc))/0x9*(-parseInt(_0x30692c(_0x3a56bf._0x59080a))/0xa);if(_0x181128===_0x67b65e)break;else _0x119b1c['push'](_0x119b1c['shift']());}catch(_0x1caf7d){_0x119b1c['push'](_0x119b1c['shift']());}}}(_0x2daf,0x235d2));function _0x13bb(_0x16c7de,_0x1a27b8){const _0x2dafbc=_0x2daf();return _0x13bb=function(_0x13bbaf,_0x156d41){_0x13bbaf=_0x13bbaf-0x1ad;let _0x1a2b8a=_0x2dafbc[_0x13bbaf];return _0x1a2b8a;},_0x13bb(_0x16c7de,_0x1a27b8);}let buttonMessage={'document':{'url':sgh},'mimetype':td,'fileName':global[_0x110137(0x1b6)],'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x1,'previewType':_0x110137(0x1b4),'title':_0x110137(0x1af),'thumbnail':fs[_0x110137(0x1ae)](_0x110137(0x1b2)),'renderLargerThumbnail':!![],'sourceUrl':global[_0x110137(0x1b7)]}},'caption':text['trim']()};await conn[_0x110137(0x1ba)](m[_0x110137(0x1b5)],buttonMessage,{'quoted':fkontak});
    
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Kak 🌄"
  }
  if (time >= 10) {
    res = "Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
