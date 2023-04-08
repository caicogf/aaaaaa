async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] VOCÊ NÃO ESTÁ EM UM CHAT ANONIMO*\n\n*QUER INICIAR UM? CLICLA NESSE CARAI DE BOTÃO AI, CARENTE_', author, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾', `.start`]], m)
m.reply('*[ ✔ ] SAIU COM SUCESSO*')
let other = room.other(m.sender) 
if (other) await this.sendButton(other, '*[❗𝐈𝐍𝐅𝐎❗] O outro coitado não te aguentou e saiu do chat.*\n\n*quer ir outro, seu carente?*\n_CLICA AI_', author, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] QUASE NINGUÉM FICA NA ESPERA DESTE COMANDO, BOA SORTE. VOCÊ ESTÁ NA LISTA DE ESPERA*\n\n*QUER SAIR? EU TAMBÉM QUERO, CLICA AI*', author, null, [['SAIR DO 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, '*[ ✔ ] EITA, UMA PESSOA ENTROU!! PODE COMEÇAR A HABLAÇÃO BB*', author, null, [['𝙸𝚁 𝙰 𝙾𝚃𝚁𝙾 𝙲𝙷𝙰𝚃', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, '*[ ✔ ] EITA, UMA PESSOA ENTROU!! PODE COMEÇAR A HABLAÇÃO BB*', author, null, [['𝙸𝚁 𝙰 𝙾𝚃𝚁𝙾 𝙲𝙷𝙰𝚃', `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] Na espera de uma alma...*\n\n*Quer sair desse inferno? Eu também quero!!*\n_CLICA AI_', author, null, [['SAIR DO 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
