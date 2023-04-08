let handler = m => m
handler.before = async function (m) {
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|aceitar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|rechazar|rejeitar|ga(k.)?bisa)/i.test(m.text)) {
let textno = `*[❗] @${room.p2.split`@`[0]} FICOU COM MEDO E REJEITOU, UM TONHÃO MESMO. JOGO CANCELADO IGUAL A AZEALIA BANKS.*`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play'
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `🎮 PEDRA, PAPEL OU TESOURA. (VADIAS OUT) 🎮\n\n◉ O JOGO COMEÇOU, OLHEM SEUS RESPECTIVOS PRIVADOS, ENVIEI AS OPÇÕES PARA CADA UM DE VOCÊS.\n @${room.p.split`@`[0]} e @${room.p2.split`@`[0]}\n\n◉ SELECIONEM UMA DAS OÇÕES EM SEUS PRIVADOS, EM: wa.me/${conn.user.jid.split`@`[0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let imgplay = `https://www.merca2.es/wp-content/uploads/2020/05/Pedra-papel-o-tesoura-0003318_1584-825x259.jpeg`    
if (!room.pilih) this.sendButton(room.p, 'POR FAVOR, SELECIONE UMA DAS SEGUINTES OPÇÕES', `O porpeta que ganhar vai receber: +${room.poin}𝚇𝙿\nE o perderdor, as always vai receber: ${room.poin_lose}𝚇𝙿`, imgplay, [['PEDRA 🗿', 'Pedra'], ['PAPEL 📄', 'Papel'], ['TESOURA ✂️', 'Tesoura']], null)  
if (!room.pilih2) this.sendButton(room.p2, 'POR FAVOR, SELECIONE UMA DAS SEGUINTES OPÇÕES', `O porpeta que ganhar vai receber: +${room.poin}𝚇𝙿\nE o perderdor, as always vai receber: ${room.poin_lose}𝚇𝙿`, imgplay, [['PEDRA 🗿', 'Pedra'], ['PAPEL 📄', 'Papel'], ['TESOURA ✂️', 'Tesoura']], null)
room.waktu_milih = setTimeout(() => {
if (!room.pilih && !room.pilih2) this.sendButton(m.chat, `[❗] NINGUÉM TOMOU INICIATIVA, SÃO DUAS PASSIVAS! O JOGO FOI CANCELADO, CRIEM VERGONHA NA PRÓXIMA`, wm, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '#menu']], m)
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p 
let textnull = `*[❗] @${(room.pilih ? room.p2 : room.p).split`@`[0]} LERDEZA DO CARAI, NÃO ESCOLHEU NADA. JOGO CANCELADO*`
this.sendButton(m.chat, textnull, wm, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '#menu']], m, { mentions: this.parseMention(textnull)})
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /tesoura/i
let b = /Pedra/i
let k = /papel/i
let reg = /^(tesoura|Pedra|papel)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`*[ ✔ ] VOCÊ SELECIONOU ${m.text}, volte ao grupo e ${room.pilih2 ? `veja os resultados*` : 'espere pelos resultados.*'}`)
if (!room.pilih2) this.reply(room.p2, '*[❗] O OUTRO JÁ ESCOLHEU, SUA VEZ!! AGILIZA QUE NÃO TEMOS O DIA TODO.*', 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`*[ ✔ ] VOCÊ SELECIONOU ${m.text}, volte ao grupo e ${room.pilih ? `veja os resultados*` : 'espere pelos resultados.*'}`)
if (!room.pilih) this.reply(room.p, '*[❗] O OUTRO JÁ ESCOLHEU, SUA VEZ!! AGILIZA QUE NÃO TEMOS O DIA TODO.*', 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true 
this.reply(room.asal, `
*👑 RESULTADOS DO JOGO 👑*${tie ? '\n*◉ 𝙴𝙼𝙿𝙰𝚃𝙴!!*' : ''}
*@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *GANHOU🥳 +${room.poin}XP*` : ` *PERDEU 🤡 ${room.poin_lose}XP*`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? ` *GANHOU 🥳 +${room.poin}XP*` : ` *PERDEU 🤡 ${room.poin_lose}XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
