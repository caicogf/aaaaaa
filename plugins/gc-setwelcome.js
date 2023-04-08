let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] MENSAGEM DE BOAS VINDAS ATUALIZADA COM SUCESSO*')
} else throw `*[❗] COLOQUE A MENSAGEM QUE TU QUER UTILIZAR, VEJA:*\n*- @user (menção)*\n*- @group (nome do grupo)*\n*- @desc (descrição do grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
