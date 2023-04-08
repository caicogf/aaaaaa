let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] MANDA UM TEXTO PARA A INTELIGÊNCIA INTERPRETAR E TRANSFORMAR EM IMAGEM*\n\n*◉ EXEMPLO DE USO*\n*◉ ${usedPrefix + command} melanie martinez fumando*\n*◉ ${usedPrefix + command} macaco jogando bananas*`
try {
m.reply('*[❗] ESPERE UM MOMENTO, QUERIDE*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[❗] HOUVE UM ERRO, FOI MAL*`
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'img', 'openai3']
export default handler
