import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'FÊMEA TONHONA', wm, json.result.female, [['🔄 PRÓXIMO 🔄', `/${command}`]], m)
conn.sendButton(m.chat, 'MACHO TONHÃO', wm, json.result.male, [['🔄 PRÓXIMO 🔄', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(metadinha)$/i
export default handler
