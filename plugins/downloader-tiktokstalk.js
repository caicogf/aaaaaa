import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] MANDE O NOME DO USUARIO, QUERIDA*', m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let Mystic = `
*𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${json.result.username}
*𝙽𝙾𝙼E:* ${json.result.nickname}
*𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚁𝙴𝚂:* ${json.result.followers}
*𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚂:* ${json.result.followings}
*𝙻𝙸𝙺𝙴𝚂:* ${json.result.likes}
*𝚅𝙸𝙳𝙴𝙾𝚂:* ${json.result.video}
*BIO:* ${json.result.bio}
`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false)
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] VISH, NÃO ENCONTREI O USER*'
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
export default handler
