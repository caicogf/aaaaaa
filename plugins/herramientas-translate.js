import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[❗𝐈𝐍𝐅𝐎❗] USO INCORRETO DO COMANDO, UTILIZE ASSIM: ${usedPrefix + command} (idioma) (texto)*\n*EXEMPLO:*\n*${usedPrefix + command} pt lady gaga has a big nose*\n\n*VEJA OS IDIOMAS SUPORTADOS:*\n*- https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {      
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
await m.reply('*TRADUÇÃO:* ' + result.text)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await m.reply('*TRADUÇÃO:* ' + result2)
} catch { 
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] Nada funciona nesse carai de bot, deu erro*')    
}}}
handler.command = /^(translate|traducir|trad)$/i
export default handler
