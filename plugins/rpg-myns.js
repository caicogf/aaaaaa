import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`┏┅ ━━━━━━━━━━━━ ┅ ━
┃ *NÚMERO DE SÉRIE:* 
┃ ${sn}
┗┅ ━━━━━━━━━━━━ ┅ ━`.trim())}
handler.help = ['meusn']
handler.tags = ['xp']
handler.command = /^(meusn|ceksn)$/i
handler.register = true
export default handler
