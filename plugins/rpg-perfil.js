import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants, isPrems }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `O usuário indicado não está na nossa base de dados...`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age, premiumTime } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*NOME:* ${username} ${registered ? '(' + name + ') ': ''}
*NÚMERO:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*LINK:* wa.me/${who.split`@`[0]}${registered ? '\n*IDADE:* ' + age + 'anos' : ''}
*LIMITE:* ${limit} 𝚄𝚂𝙾𝚂
*REGISTRADO:* ${registered ? 'Sim': 'Não'}
*VIP:* ${premiumTime > 0 ? 'Si' : (isPrems ? 'Si' : 'No') || ''}
*NÚMERO DE SÉRIE:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
