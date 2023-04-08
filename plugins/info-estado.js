let handler = async (m, { conn }) => {
try {
let pp = await(await fetch('https://i.ibb.co/5R4XzKn/Menu.png')).buffer()
let img = await(await fetch('https://upload.wikimedia.org/wikipedia/en/a/ad/Beyonc%C3%A9_-_Renaissance.png')).buffer()
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = ` ARTPOP BOT, O MAIS LIXO DE TODES
➤ Oi, ${taguser}
*=> 🤖 Tempo ativo:* ${uptime}
*=> ✅ Bot de uso público*
*=> 👑 Criador: um viadinho porpeta*
`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: '💫 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💫' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'LAST FM GANG PASSA NADA', body: '50 MIL SCROBBLES', thumbnail: img, sourceUrl: `https://last.fm/user/caico_`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*🤖 TEMPO ATIVO (passivas out): ${uptime} ┃ 🔗 last.fm/user/caico_*`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n*=> 💥 ` + d, ' Dia(s)* ', `\n*=> 💫 ` + h, ' Hora(s)* ', `\n*=> 💠 ` + m, ' Minuto(s)* ', `\n*=> ♦ ` + s, ' Segundo(s)* '].map(v => v.toString().padStart(2, 0)).join('')}
