let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw 'Eai mor, dropa seu nome na last pra eu gerar seu chart 5x5'
    try {
        m.reply('*[❗] SÓ UM MINUTO, ESTOU VENDO OS MICOS DO SEU CHART*')
        let tiores = await conn.getFile(`https://tapmusic.net/collage.php?user=${text}&type=7day&size=5x5&caption=true`)
        await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
    throw `*[❗] ESSE COMANDO AINDA ESTÁ EM FASE DE TESTE, FOI MALLL*`
}}
handler.command = ['semaninha']
export default handler