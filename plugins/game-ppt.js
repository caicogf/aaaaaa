let handler = async (m, { conn, text, command, usedPrefix, args }) => {
//let pp = 'https://www.bighero6challenge.com/images/thumbs/PEDRA,-PAPEL-o-TESOURA-0003318_1584.jpeg'
let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'

// 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
let time = global.db.data.users[m.sender].wait + 10000
if (new Date - global.db.data.users[m.sender].wait < 10000) throw `*🕓 Vai ter que esperar ${Math.floor((time - new Date()) / 1000)} segundos antes de jogar de novor, bb*`

if (!args[0]) return conn.sendHydrated(m.chat, `*PEDRA 🗿, PAPEL 📄 𝐨 TESOURA ✂️*\n\n*—◉ Você pode usar os botões ou os comandos:*\n*◉ ${usedPrefix + command} PEDRA*\n*◉ ${usedPrefix + command} PAPEL*\n*◉ ${usedPrefix + command} TESOURA*`, wm, pp, null, null, null, null, [
['PEDRA 🗿', `${usedPrefix + command} PEDRA`],
['PAPEL 📄', `${usedPrefix + command} PAPEL`],
['TESOURA ✂️', `${usedPrefix + command} TESOURA`]
], m)    
var astro = Math.random()
if (astro < 0.34) {
astro = 'PEDRA' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'TESOURA' 
} else {
astro = 'PAPEL'
}
let textm = text.toLowerCase()  
if (textm == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*🔰 Empate!*\n\n*👉🏻 Você: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*🎁 PRÊMIO +500 XP*`)
} else if (text == 'PAPEL') {
if (astro == 'PEDRA') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou, tenho certeza que roubou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*🎁 PRÊMIO +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu, ai como eu amo! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*❌ PRÊMIO -300 XP*`)
}
} else if (text == 'TESOURA') {
if (astro == 'PAPEL') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou, tenho certeza que roubou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*🎁 PRÊMIO +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu, ai como eu amo! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*❌ PRÊMIO -300 XP*`)
}
} else if (textm == 'TESOURA') {
if (astro == 'PAPEL') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou, tenho certeza que roubou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*🎁 PRÊMIO +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu, ai como eu amo! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*❌ PRÊMIO -300 XP*`)
}
} else if (textm == 'PAPEL') {
if (astro == 'PEDRA') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou, tenho certeza que roubou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*🎁 PRÊMIO +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu, ai como eu amo! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*❌ PRÊMIO -300 XP*`)
}
} else if (textm == 'PEDRA') {
if (astro == 'TESOURA') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou, tenho certeza que roubou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*🎁 PRÊMIO +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu, ai como eu amo! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 ARTPOP BOT: ${astro}*\n*❌ PRÊMIO -300 XP*`)
}}
global.db.data.users[m.sender].wait = new Date * 1
}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
