import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[❗𝐍𝐅𝐎❗] UTILIZE O SEU NÚMERO DE SÉIRE PARA TIRAR SEU REGISTRO, SE NÃO LEMBRA, UTILIZE #meusn*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[❗𝐍𝐅𝐎❗] NUMÉRO DE SÉIRE INCORRETO!*\n\n*SE NÃO SE LEMBRA, UTILIZE #meusn*'
user.registered = false
m.reply(`*[ ✔ ] FEITO, VOCÊ NÃO ESTÁ MAIS CADASTRADO NO BOT. 1 TONHÃO A MENOS, OBRIGADO MEU DEUS*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
