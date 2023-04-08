import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
const teks = '*0 - Sim*\n*1 - Não*\n*2 - Não sei*\n*3 - Provavelmente sim*\n*4 - Provavelmente não*\n*5 - Voltar a pergunta anterior*'
export async function before(m) {
if (global.db.data.users[m.sender].banned) return
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0
let aki = global.db.data.users[m.sender].akinator
if (!aki.sesi || m.quoted.id != aki.soal.key.id) return
if (!somematch(['0','1','2','3','4','5'], m.text)) return this.sendMessage(m.chat, { text: `*[❗] RESPONDA A MENSAGEM COM OS NÚMEROS INDICADOS, 1, 2, 3, 4, OU 5*\n\n${teks}` }, { quoted: aki.soal })
let { server, frontaddr, session, signature, question, progression, step } = aki
if (step == '0' && m.text == '5') return m.reply('*[❗] NÃO TEM PERGUNTAS ANTES DESTA, SEU BURRO. ESSA É A PRIMEIRA PERGUNTA, FAZ AS COISAS DIREITO PFV.*')
let res, anu, soal
try {
if (m.text == '5') res = await fetch(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkeysapi}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
else res = await fetch(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkeysapi}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${m.text}`)
anu = await res.json()
if (anu.status != '200') {
aki.sesi = false
aki.soal = null
return m.reply('*[❗] o akinator enlouqueceu, cansou dessa praga de personagem impossível. Depois tu tenta de novo, e seja mais claro da próxima.*')}
anu = anu.result
if (anu.name) {
await this.sendMessage(m.chat, { image: { url: anu.image }, caption: `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*AKINATOR ACHA QUE SEU PERSONAGEM SEJA ${anu.name}*\n_${anu.description}_`, mentions: [m.sender] }, { quoted: m })
aki.sesi = false
aki.soal = null
} else {
let resultes = await translate(`${anu.question}`, { to: 'pt', autoCorrect: true })   
soal = await this.sendMessage(m.chat, { text: `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n*PROGRESSO: ${anu.step} (${anu.progression.toFixed(2)} %)*\n\n*JOGADOR: @${m.sender.split('@')[0]}*\n*PERGUNTA: ${resultes.text}*\n\n${teks}`, mentions: [m.sender] }, { quoted: m })
aki.soal = soal
aki.step = anu.step
aki.progression = anu.progression
}} catch (e) {
aki.sesi = false
aki.soal = null
m.reply('*[❗] ESTE COMANDO ESTÁ EM MANUTENÇÃO, FOI MALLLL*')}
return !0 }
function somematch( data, id ){
let res = data.find(el => el === id )
return res ? true : false; }
