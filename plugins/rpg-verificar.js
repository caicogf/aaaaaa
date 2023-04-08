import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `[❗ ACORDA] Queride, você já está cadastrado!!\n\nQuer tirar o cadastro?\n\n 📌𝚄𝚂𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `*[❗CALMA AI❗]Para se cadastrar você deve seguir os passos assim:\n*USO DO COMANDO: ${usedPrefix + command} nome.idade*\n*✩ EXEMPLO: ${usedPrefix + command} polachek.40*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*[❗BURRO] Você precisa colocar um nome, capeta*'
  if (!age) throw '*[❗𝐈] A idade não pode estar vazia, vai mentir idade pra que? Eu hein, palhaçada.*'
  if (name.length >= 30) throw '[❗] Nome grande demais, diminui esse bagulho ai' 
  age = parseInt(age)
  if (age > 100) throw '*[❗] Que idade é essa? O diabo já devia ter te carregado faz tempo, pode abaixar essa idade ai. 👴🏻*'
  if (age < 5) throw '*[❗] Criança aqui não, pode sumir, não gosto de criança*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 INFORMAÇÕES 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *NOME:* ${name}
┃ *IDADE:* ${age} anos
┃ *NÚMERO DE SÉRIE:* 
┃ ${sn}
┗┅ ━━━━━━━━━━━━ ┅ ━`
let author = global.author
conn.sendButton(m.chat, caption, `SEU NUMERO DE SÉRIE SERVE PARA VOCÊ APAGAR SEU REGISTRO, NÃO SOME COM ESSE CARAI DE NÚMERO!\n${author}`, [['Enfim, tomou vergonha na cara e está verificado!!', 'veja seu perfil dando: /profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
