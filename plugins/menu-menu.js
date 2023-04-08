import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = await(await fetch('https://i.ibb.co/5R4XzKn/Menu.png')).buffer()
let img = await(await fetch('https://i.scdn.co/image/ab67616d0000b273934a734586b2a0a7fbddb81e')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'pt'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
♡ *ARTPOP BOT* ♡
━━━━━━━━━━━━━━━
➤ *Oi, ${taguser}*
➤ *Dono:* Caico scrobbles pinheiro
➤ last.fm/user/caico_
➤ *Data:* ${date}
➤ *Tempo ativo:* ${uptime}
➤ *Usuários:* ${rtotalreg}
━━━━━━━━━━━━━━━
< INFORMAÇÕES ✩ >
➤ *🎖️ NÍVEL:* ${level}
➤ *🧪 EXP:* ${exp}
➤ *🧑‍💼 CARGO:* ${role}
➤💎 *DIAMANTES* ${limit}
➤ *👾 MOEDINHAS:* ${money}
➤ *🪙 TOKENS:* ${joincount}
➤ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
━━━━━━━━━━━━━━━
${readMore}
< LAST FM CHART (teste) ✩ />
<3 - 💃 _${usedPrefix}semaninha <nick>_
<3 - 💃 _${usedPrefix}chartmensal <nick>_
<3 - 💃 _${usedPrefix}alltime <nick>_
━━━━━━━━━━━━━━━
< INFORMAÇÕES DO BOT ✩ />
 <3 -💟 _${usedPrefix}status_
 <3 -💟 _${usedPrefix}ping_
 <3 -💟 _${usedPrefix}dono_
 <3 -💟 _${usedPrefix}listavip_
 <3 -💟 _Bot_ (sem prefixo.)
 ━━━━━━━━━━━━━━━
*< TENHA O BOT NO SEU GRUPO />*
 <3 -👽 _${usedPrefix}entrar *<link>*_
 ━━━━━━━━━━━━━━━ 
*< JOGOS ✩ />*
 <3 -🎖️ _${usedPrefix}math *<noob/easy/medium/hard/extreme/impossible>*_
 <3 -🎖️ _${usedPrefix}ppt *<papel/ tijera /piedra>*_
 <3 -🎖️ _${usedPrefix}pvp *<@tag>*_
 <3 -🎖️ _${usedPrefix}slot *<aposta>*_
 <3 -🎖️ _${usedPrefix}velha *<número da sala>*_
 <3 -🎖️ _${usedPrefix}delvelha_
 <3 -🎖️ _${usedPrefix}simi *<texto>*_
 <3 -🎖️ _${usedPrefix}verdade_
 <3 -🎖️ _${usedPrefix}qualmusica_
 <3 -🎖️ _${usedPrefix}pista_
 <3 -🎖️ _${usedPrefix}akinator_
━━━━━━━━━━━━━━━
*< ATIVAR/DESATIVAR FUNÇÕES ✩ />*
 <3 -☑️ _${usedPrefix}enable *welcome*_
 <3 -☑️ _${usedPrefix}disable *welcome*_
 <3 -☑️ _${usedPrefix}enable *modohorny*_
 <3 -☑️ _${usedPrefix}disable *modohorny*_
 <3 -☑️ _${usedPrefix}enable *antilink*_
 <3 -☑️ _${usedPrefix}disable *antilink*_
 <3 -☑️ _${usedPrefix}enable *antilink2*_
 <3 -☑️ _${usedPrefix}disable *antilink2*_
 <3 -☑️ _${usedPrefix}enable *detect*_
 <3 -☑️ _${usedPrefix}disable *detect*_
 <3 -☑️ _${usedPrefix}enable *autosticker*_
 <3 -☑️ _${usedPrefix}disable *autosticker*_
 <3 -☑️ _${usedPrefix}enable *antiviewonce*_
 <3 -☑️ _${usedPrefix}disable *antiviewonce*_
 <3 -☑️ _${usedPrefix}enable *antitoxic*_
 <3 -☑️ _${usedPrefix}disable *antitoxic*_
 <3 -☑️ _${usedPrefix}enable *antitraba*_
 <3 -☑️ _${usedPrefix}disable *antitraba*_
 <3 -☑️ _${usedPrefix}enable *antiarabes*_
 <3 -☑️ _${usedPrefix}disable *antiarabes*_
 <3 -☑️ _${usedPrefix}enable *modoadmin*_
 <3 -☑️ _${usedPrefix}disable *modoadmin*_
━━━━━━━━━━━━━━━
 *< INFORMAR ERROS />*
 <3 -🔰 _${usedPrefix}reporte *<texto>*_
━━━━━━━━━━━━━━━
*< DOWNLOADER ✩ />*
 <3 -📥 _${usedPrefix}gdrive *<url>*_
 <3 -📥 _${usedPrefix}tiktok *<url>*_
 <3 -📥 _${usedPrefix}twitter *<url>*_
 <3 -📥 _${usedPrefix}play *<texto>*_
 <3 -📥 _${usedPrefix}spotify *<texto>*_
 <3 -📥 _${usedPrefix}soundcloud *<texto>*_
 <3 -📥 _${usedPrefix}imagem *<texto>*_
 <3 -📥 _${usedPrefix}pinterest *<texto>*_
 <3 -📥 _${usedPrefix}igstalk *<username>*_
 <3 -📥 _${usedPrefix}igstory *<username>*_
 <3 -📥 _${usedPrefix}tiktokstalk *<username>*_
━━━━━━━━━━━━━━━
*< GRUPOS ✩ />*
 <3 -💎 _${usedPrefix}add *<numero>*_
 <3 -💎 _${usedPrefix}kick *<@tag>*_
 <3 -💎 _admins *<texto>*_ (sem prefixo)
 <3 -💎 _${usedPrefix}demote *<@tag>*_
 <3 -💎 _${usedPrefix}promote *<@tag>*_
 <3 -💎 _${usedPrefix}infogroup_
 <3 -💎 _${usedPrefix}link_
 <3 -💎 _${usedPrefix}acordar *<texto>*_
 <3 -💎 _${usedPrefix}setwelcome *<texto>*_
 <3 -💎 _${usedPrefix}setbye *<texto>*_
 <3 -💎 _${usedPrefix}setpp *<imagem>*_
━━━━━━━━━━━━━━━
*< CONVERTER ✩ />*
 <3 -🧧 _${usedPrefix}toanime *<imagem>*_
 <3 -🧧 _${usedPrefix}toimg *<sticker>*_
 <3 -🧧 _${usedPrefix}tovideo *<figurinha>*_
 <3 -🧧 _${usedPrefix}tourl *<video/imagem/audio>*_
 <3 -🧧 _${usedPrefix}tts <língua> *<texto>*_
━━━━━━━━━━━━━━━
*< EFEITOS E LOGOS ✩ />*
 <3 -🖍️ _${usedPrefix}logos *<efeito> <texto>*_
 <3 -🖍️ _${usedPrefix}ytcomment *<texto>*_
 <3 -🖍️ _${usedPrefix}hornycard *<@tag>*_
 <3 -🖍️ _${usedPrefix}itssostupid_
 <3 -🖍️ _${usedPrefix}pixelar_
 <3 -🖍️ _${usedPrefix}blur_
━━━━━━━━━━━━━━━
*< ALEATÓRIO ✩/>*
 <3 -👾 _${usedPrefix}cat_
 <3 -👾 _${usedPrefix}dog_
 <3 -👾 _${usedPrefix}metadinha_
━━━━━━━━━━━━━━━
*< COMANDOS +18 ✩/>*
 <3 -🔞 _${usedPrefix}pack_
 <3 -🔞 _${usedPrefix}pack2_
 <3 -🔞 _${usedPrefix}pack3_
 <3 -🔞 _${usedPrefix}videoxxx_
 <3 -🔞 _${usedPrefix}videolesbixxx_
 <3 -🔞 _${usedPrefix}tetas_
 <3 -🔞 _${usedPrefix}booty_
 <3 -🔞 _${usedPrefix}ecchi_
 <3 -🔞 _${usedPrefix}panties_
 <3 -🔞 _${usedPrefix}pene_
 <3 -🔞 _${usedPrefix}porno_
 <3 -🔞 _${usedPrefix}yaoi_
 <3 -🔞 _${usedPrefix}yuri_
 <3 -🔞 _${usedPrefix}hentai_
 <3 -🔞 _${usedPrefix}nsfworgy_
 <3 -🔞 _${usedPrefix}nsfwass_
 <3 -🔞 _${usedPrefix}nsfwbdsm_
 <3 -🔞 _${usedPrefix}nsfwcum_
 <3 -🔞 _${usedPrefix}nsfwero_
 <3 -🔞 _${usedPrefix}nsfwfemdom_
━━━━━━━━━━━━━━━
*< EFEITOS DE ÁUDIO ✩ />*
 *- responda à um áudio.*
 <3 -🎤 _${usedPrefix}bass_
 <3 -🎤 _${usedPrefix}blown_
 <3 -🎤 _${usedPrefix}deep_
 <3 -🎤 _${usedPrefix}earrape_
 <3 -🎤 _${usedPrefix}fast_
 <3 -🎤 _${usedPrefix}fat_
 <3 -🎤 _${usedPrefix}nightcore_
 <3 -🎤 _${usedPrefix}reverse_
 <3 -🎤 _${usedPrefix}robot_
 <3 -🎤 _${usedPrefix}slow_
 <3 -🎤 _${usedPrefix}smooth_
 <3 -🎤 _${usedPrefix}tupai_
━━━━━━━━━━━━━━━
*< CHAT ANÔNIMO (EM BREVE) />*
 <3 -📳 _${usedPrefix}start_
 <3 -📳 _${usedPrefix}next_
 <3 -📳 _${usedPrefix}leave_
━━━━━━━━━━━━━━━
*< PESQUISA ✩ />*
 <3 -🔍 _${usedPrefix}animeinfo *<texto>*_
 <3 -🔍 _${usedPrefix}google *<texto>*_
 <3 -🔍 _${usedPrefix}letra *<texto>*_
 <3 -🔍 _${usedPrefix}wikipedia *<texto>*_
 <3 -🔍 _${usedPrefix}ytsearch *<texto>*_
━━━━━━━━━━━━━━━
*< FERRAMENTAS ✩ />*
 <3 -🛠️ _${usedPrefix}chatgpt *<texto>*_
 <3 -🛠️ _${usedPrefix}dall-e *<texto>*_
 <3 -🛠️ _${usedPrefix}spamwa *<numero|texto|quantidade>*_
 <3 -🛠️ _${usedPrefix}calculadora *<operação>*_
 <3 -🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
 <3 -🛠️ _${usedPrefix}qrcode *<texto>*_
 <3 -🛠️ _${usedPrefix}traduzir *<texto>*_
━━━━━━━━━━━━━━━
*< RPG E ETC ✩ />*
 <3 -💵 _${usedPrefix}adventure_
 <3 -💵 _${usedPrefix}caçar_
 <3 -💵 _${usedPrefix}cofre_
 <3 -💵 _${usedPrefix}banco_
 <3 -💵 _${usedPrefix}claim_
 <3 -💵 _${usedPrefix}heal_
 <3 -💵 _${usedPrefix}lb_
 <3 -💵 _${usedPrefix}levelup_
 <3 -💵 _${usedPrefix}meusn_
 <3 -💵 _${usedPrefix}perfil_
 <3 -💵 _${usedPrefix}trabalhar_
 <3 -💵 _${usedPrefix}minerar_
 <3 -💵 _${usedPrefix}minerar2_
 <3 -💵 _${usedPrefix}buy_
 <3 -💵 _${usedPrefix}buyall_
 <3 -💵 _${usedPrefix}registrar_
 <3 -💵 _${usedPrefix}roubar *<quantidade> <@tag>*_
 <3 -💵 _${usedPrefix}transfer *<tipo> <quantidade> <@tag>*_
 <3 -💵 _${usedPrefix}unreg *<numero de serie>*_
━━━━━━━━━━━━━━━
*< FIGURINHAS ✩ />*
 <3 -👽 _${usedPrefix}sticker *<imagem o video>*_
 <3 -👽 _${usedPrefix}sticker *<url>*_
 <3 -👽 _${usedPrefix}sticker2 *<imagem ou video>*_
 <3 -👽 _${usedPrefix}sticker2 *<url>*_
 <3 -👽 _${usedPrefix}s *<imagem ou video>*_
 <3 -👽 _${usedPrefix}s *<url>*_
 <3 -👽 _${usedPrefix}s2 *<imagem ou video>*_
 <3 -👽 _${usedPrefix}s2 *<url>*_
 <3 -👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
 <3 -👽 _${usedPrefix}semoji *<tipo> <emoji>*_
 <3 -👽 _${usedPrefix}attp *<texto>*_
 <3 -👽 _${usedPrefix}attp2 *<texto>*_
 <3 -👽 _${usedPrefix}attp3 *<texto>*_
 <3 -👽 _${usedPrefix}ttp *<texto>*_
 <3 -👽 _${usedPrefix}ttp2 *<texto>*_
 <3 -👽 _${usedPrefix}ttp3 *<texto>*_
 <3 -👽 _${usedPrefix}ttp4 *<texto>*_
 <3 -👽 _${usedPrefix}ttp5 *<texto>*_
 <3 -👽 _${usedPrefix}dado_
━━━━━━━━━━━━━━━
`.trim()
let buttons = [
{ buttonId: '#verificar', buttonText: { displayText: '📮 CADASTRO 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 INFORMAÇÕES' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈ERRO❗] Mona, parece que o menu está com problema. Relaxa que já avisei o incompetente do caico.*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
