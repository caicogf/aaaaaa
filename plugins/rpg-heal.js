import { join } from 'path' 
import { promises } from 'fs'
let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
if (user.health >= 100) return conn.sendButton(m.chat, `SUA SAÚDE ESTÁ CHEIA ❤️`, wm, imgr + `SAÚDE: ${user.health}`, [
[`🏕️ 𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁`, `${usedPrefix}adventure`]], m)
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
if (user.potion < count) return conn.sendButton(m.chat,`${htki} SEM POÇÕES ${htka}`, 
`PRECISA DE ${count - user.potion} POÇÕES 🥤 PARA SE CURAR
SAÚDE » ${user.health} ❤️
POÇÃO » ${user.potion} 🥤
COMPRE POÇÕES OU PEÇA QUE ALGUEM LHE DÊ`.trim(), imgr + 'POBRETA', [
[`CIMPRAR 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],
[`PEDIR AJUDA 📣`, `${usedPrefix}pedirayuda *GENTE EU SOU POBRE, POBRETA, MORO DE ALUGUEL PERDI TUDO, ALGUÉM DÁ ${count - user.potion} POÇÃO(ÕES)*  
*» AJUDE TRANSFERINDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)
user.potion -= count * 1 //1 potion = count (1) 
user.health += heal * count 
conn.sendButton(m.chat, `*━┈━《 ✅ SAÚDE COMPLETA 》━┈━*`, `USO DE ${count} POÇÕES 🥤 PARA RECUPERAR SUA SAÚDE\n\𝚗SAÚDE » ${user.health} ❤️`, imgr + 'SALUD COMPLETADA', [
[`𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁 🏕️`, `${usedPrefix}adventure`]], m)}
handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
export default handler
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)}
