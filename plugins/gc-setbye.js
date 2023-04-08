let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] MENSAGEM DE DESPEDIDAS ATUALIZADA COM SUCESSO𝙾*')
} else throw `*[❗] COLOQUE A MENSAGEM DE DESPEDIDAS, UTILIZE:*\n*- @user (menção)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
