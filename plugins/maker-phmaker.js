import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗] RESPONDA OU MARQUE UMA IMAGEM*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*[❗] 𝙴𝙻 𝚃𝙸𝙿𝙾 𝙳𝙴 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 ${mime} 𝙽𝙾 𝙴𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾, 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙴 𝚀𝚄𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙸𝙼𝙰𝙶𝙴𝙽, 𝙹𝙿𝙶, 𝙹𝙿𝙴𝙶 𝙾 𝙿𝙽𝙶*`
if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ¿𝙲𝙾𝙼𝙾 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾?*
—◉ #phmaker (opcion) <responder /marque uma imagem

*EXEMPLO:*
◉ ${usedPrefix + command} artist_in_the_dark <responder/marque uma imagem>`)
m.reply('*[❗] aguarde...*')
let img = await q.download?.()
let url = await uploadImage(img)
let images = `https://violetics.pw/api/photomaker/${encodeURIComponent(text)}?apikey=beta&image=${encodeURIComponent(url)}`
let caption = `*⎔┉━「 𝐏𝐇𝐌𝐀𝐊𝐄𝐑 」━┉⎔*
*💟 𝙴𝙵𝙴𝙲𝚃𝙾:* ${text}`
conn.sendButton(m.chat, caption, wm, images, [['💫 𝙼𝙰𝚂 𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 💫', `${usedPrefix}phmakerlist`]], m)
}
handler.command = /^(phmaker|phmarker|phmarke|phmake)$/i
export default handler
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
