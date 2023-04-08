let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw 'Eai mor, dropa seu nome na last pra eu gerar seu chart mensal 10x10'
    try {
        m.reply('*[❗] SÓ UM MINUTO, ESTOU VENDO OS MICOS DO SEU CHART*')
        let tiores = await conn.getFile(`https://tapmusic.net/collage.php?user=${text}&type=1month&size=10x10&caption=true`)
        await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
    throw `*[❗] ESSE COMANDO AINDA ESTÁ EM FASE DE TESTE, FOI MALLL*`
}}
handler.command = ['chartmensal']
export default handler