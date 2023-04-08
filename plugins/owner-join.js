let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '*[ ⚠️ MORR?? ] 𝙻𝙸𝙽𝙺 ERRADO, BURRICO*\n*👉🏻 PARA EU ENTRAR EM UM GRUPO, UTILIZE*\n*#join https://chat.whatsapp.com/xxxxxxxxxxxxxxxxx*\n\n*[❗𝐈𝐍𝐅𝐎❗] PODE LEVAR UM TEMPO*'
if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*O bot entrou no grupo, agora ele está amaldiçoado com a mesma praga jogada no electra heart que tem 5.9 na pitchfork. ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗ 𝐈𝐍𝐅𝐎 ❗] 𝙽OVA SOLICITAÇÃO DE GRUPO [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ NÚMERO DO SOLICITANTE:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*— LINK DO GRUPO:* ' + link, jid)
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] O LINK DO GRUPO VAI PASSAR POR UMA BREVE ANÁLISE*\n\n*👉🏻  O DONO DO BOT VAI DECIDIR SE O BOT ENTRA OU NÃO*\n\n*[❗𝐈𝐍𝐅𝐎❗]ALGUM DOS MOTIVOS QUE POSSA FAZER COM QUE EU NÃO ENTRE :*\n*1.- O GRUPO SÓ TEM TONHÃO (de chacota já basta a Anitta)*\n*2.- Você tirou o bot antes, ai a burrice é sua mesmo.*\n*3.- O link foi redefinido*\n*4. O bot é um lixo e tá travando, por isso não entra em grupo*\n\n*👉🏻 TENHA PACIÊNCIA, UMA HORA O BOT ENTRA NO SEU GRUPO*')
}
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] Ai mor, estamos em manutenção! Foi mmal*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|entrar|nuevogrupo$/i
handler.private = true 
export default handler
