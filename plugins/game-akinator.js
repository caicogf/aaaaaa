import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (m.isGroup) return
let aki = global.db.data.users[m.sender].akinator
if (text == 'end') {
if (!aki.sesi) return m.reply('*[❗] Você não está em uma partida, eu hein*')
aki.sesi = false
aki.soal = null
m.reply('*[❗] OPA, saiu com sucesso da última partida do akinator. Fique à vontade para começar outra.*')
} else {
if (aki.sesi) return conn.reply(m.chat, '*[❗] Ai mor, você ainda está na partida...*', aki.soal)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`)
let anu = await res.json()
if (anu.status !== 200) throw '*[❗] EPA, HOUVE UM ERRO. DEPOIS TU TENTAAA*'
let { server, frontaddr, session, signature, question, progression, step } = anu.result
aki.sesi = true
aki.server = server
aki.frontaddr = frontaddr
aki.session = session
aki.signature = signature
aki.question = question
aki.progression = progression
aki.step = step
let resultes2 = await translate(question, { to: 'pt', autoCorrect: false })
let txt = `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*JOGADOR: @${m.sender.split('@')[0]}*\n*PERGUNTA: ${resultes2.text}*\n\n`
txt += '*0 - Sim*\n'
txt += '*1 - Não*\n'
txt += '*2 - Não sei*\n'
txt += '*3 - Provavelmente sim*\n'
txt += '*4 - Provavelmente não*\n\n'
txt += `*USE O COMANDO ${usedPrefix + command} end para sair dessa sessão com o akinator.*`
let soal = await conn.sendMessage(m.chat, { text: txt, mentions: [m.sender] }, { quoted: m })
aki.soal = soal
} catch {
m.reply('*[❗] Erro, depois tu tenta querida*')
}}}
handler.menu = ['akinator']
handler.tags  = ['game']
handler.command = /^(akinator)$/i
export default handler
