let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗] TERMINA ESSA PARTIDA PARA DEPOIS COMEÇAR OUTRA, TONHO!*'
let textquien = `*QUEM TU QUER DESAFIAR?*\n\n*—◉ EXEMPLO:*\n${usedPrefix}velha @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗] A PESSOA QUE TU DESAFIOU ESTÁ EM UMA PARTIDA, ESPERE TERMINAR`
let id = 'suit_' + new Date() * 1
let caption = `🎮 PEDRA PAPEL TESOURA, VADIAS 🎮\n\n◉ @${m.sender.split`@`[0]} DESAFIOU @${m.mentionedJid[0].split`@`[0]} para jogar pedra, papel ou tesoura.`.trim()
let footer = `◉ ESCREVA "aceitar" para começar\n◉ ESCREVA "rejeitar" para flopar, medroso!`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`aceitar`], [`rejeitar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] TEMPO DE ESPERA FINALIZADO, NINGUÉM RESPONDEU PORRA NENHUMA, ENTÃO VÃO SE FODER!`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|suit(pvp)?$/i
handler.group = true
handler.game = true
export default handler
