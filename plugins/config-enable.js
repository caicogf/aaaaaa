let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | 𝚆𝙴𝙻𝙲𝙾𝙼𝙴", description: "ATIVA OU DESATIVA AS MENSAGENS DE BOAS-VINDAS", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾", description: "O BOT SE TORNA DE USO PÚBLICO OU PRIVADO", rowId: `${usedPrefix + command} public`},
{title: "🥵 | 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈", description: "𝙰TIVA OU DESATIVA OS COMANDOS +𝟷𝟾", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺", description: "ATIVA OU DESATIA LINKS DE OUTROS GRUPOS", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝟸", description: "𝙰TIVA OU DESATIVA LINKS NO GERAL, QUE COMEÇAM COM HTTP", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | 𝙳𝙴𝚃𝙴𝙲𝚃AR", description: "ATIVA OU DESATIVA A DETECÇÃO DE MENSAGENS", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | RESTRIÇÕES", description: "ATIVA OU DESATIVA AS RESTRIÇÕES", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳", description: "𝙼ARCA AUTOMATICAMENTE AS MENSAGENS COMO LIDAS", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | 𝙰𝚄𝙳𝙸𝙾𝚂", description: "ATIVA OU DESATIVA A FUNÇÃO DE AUDIOS COM OU SEM PREFIXO", rowId: `${usedPrefix + command} audios`},
{title: "👾 | 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁", description: "TODAS AS IMAGENS, VÍDEOS E ETC VIRAM FIGURINHAS AUTOMATICAMENTE", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | 𝙿𝙲𝙾𝙽𝙻𝚈", description: "O BOT APENAS RESPONDERÁ CHATS PRIVADOS", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | 𝙶𝙲𝙾𝙽𝙻𝚈", description: "BOT APENAS RESPONDERÁ GRUPOS", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | 𝙰𝙽𝚃𝙸𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴", description: "ATIVA OU DESATIVA A FUNÇÃO DE VER APENAS UMA VEZ", rowId: `${usedPrefix + command} antiviewonce`},
{title: "📵 | 𝙰𝙽𝚃𝙸CHAMADA", description: "ATIVA OU DESATIVA ANTI-CHAMADA", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | 𝙰𝙽𝚃𝙸𝙿𝚁𝙸𝚅𝙰𝙳𝙾", description: "DESATIVA CONVERSA NO PRIVADO", rowId: `${usedPrefix + command} antiprivado`},
{title: "🕸️ | 𝙰𝙽𝚃𝙸𝚃𝚁𝙰V𝙰𝚂", description: "DESATIVA OU ATIVA O ANTI TRAVAS", rowId: `${usedPrefix + command} antitraba`},
{title: "👎🏻 | 𝙰𝙽𝚃𝙸𝙰𝚁𝙰𝙱𝙴𝚂", description: "ANTI ÁRABES TONHÕES", rowId: `${usedPrefix + command} antiarabes`}, 
{title: "👑 | 𝙼𝙾𝙳𝙾𝙰𝙳𝙼𝙸𝙽", description: "O BOT SÓ RESPONDERÁ ADMINS DO GRUPO", rowId: `${usedPrefix + command} modoadmin`}, 
{title: "😃 | 𝚂𝙸𝙼𝚂𝙸𝙼𝙸", description: "ATIVA OU DESATIVA QUE O BOT FALE OUTRAS COISAS DURANTE O USO DE IA OU SIMSIMI", rowId: `${usedPrefix + command} simsimi`},
]}, ]
//{title: "🔞 | 𝙰𝙽𝚃𝙸𝙿𝙾𝚁𝙽𝙾", description: "𝚂𝙸 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝚃𝙸𝙴𝙽𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙳𝙾 𝙿𝙾𝚁𝙽𝙾 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙻𝙸𝙼𝙸𝙽𝙰 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾", rowId: `${usedPrefix + command} antiporno`},
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modejadibot*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modejadibot*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modoadmin*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *simsimi*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *simsimi*_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "SELECIONE AQUI",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break        
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰TIVADO' : '𝙳𝙴𝚂𝙰TIVADO'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, wm2, null, [[`${isEnable ? '✖️ DESATIVAR ✖️' : '✔️ 𝙰TIVAR ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`]], m)}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(des)ativar|(tru|fals)e|(turn)?[01])$/i
export default handler
