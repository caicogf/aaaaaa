import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
 <INFORMAÇÕES DO BOT />
➥ [🤴🏻] CRIADOR: Melhor nem saber
➥ [🎳] 𝙿𝚁𝙴𝙵𝙸XO: *${usedPrefix}*
➥ [🔐] 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂: *${chats.length - groups.length}*
➥ [🦜] 𝙲𝙷𝙰𝚃𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂: *${groups.length}* 
➥ [💡] TOTAL: *${chats.length}* 
➥ [🚀] 𝙰TIVIDADE: *${uptime}*
➥ [🎩] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: *${totalreg}*
➥ [☑️] 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳: ${autoread ? '*ATIVADO*' : '*DESATIVADO*'}
➥ [❗] 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃: ${restrict ? '*ATIVADO*' : '*DESATIVADO*'} 
➥ [💬] 𝙿𝙲𝙾𝙽𝙻𝚈: ${pconly ? '*ATIVADO*' : '*DESATIVADO*'}
➥ [🏢] 𝙶𝙲𝙾𝙽𝙻𝚈: ${gconly ? '*ATIVADO*' : '*DESATIVADO*'}
➥ [🌎] 𝙼𝙾𝙳𝙾: ${self ? '*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*' : '*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*'}
➥ [💬] 𝙰𝙽𝚃𝙸𝙿𝚁𝙸𝚅𝙰𝙳𝙾: ${antiprivado ? '*ATIVADO*' : '*DESATIVADO*'}
➥ [📵] 𝙰𝙽𝚃𝙸-CHAMADA: ${antiCall ? '*ATIVADO*' : '*DESATIVADO*'}
➥ [👨‍🦯] VEOLOCIDADE: 
  *${speed} ms* 

- ARTPOP BOT, A FALCATRUA
`.trim() 
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: info, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
