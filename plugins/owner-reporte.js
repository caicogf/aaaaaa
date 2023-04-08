let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ENVIE SEU REPORT*\n\n*𝙴XEMPLO:*\n*${usedPrefix + command} o comando ${usedPrefix}play não está funcionando*`
if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] SEU REPORT DEVE TER NO MÍNIMO 10 CARACTERES!*`
if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] SEU REPORT DEVE TER NO MÁXIMO 1000 CARACTERES!*`
let teks = `*═════[BUG]═════*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝙼𝙴𝙽𝚂𝙰G𝙴M:* ${text}\n*┴*`
conn.reply('5219992095479@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('584125778026@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*[ ✔️ ] REPORT ENVIADO PARA O CRIADOR, YASSSSS*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <texto>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
