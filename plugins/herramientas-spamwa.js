let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] COLOQUE O NÚMERO QUE DESEJA MANDAR O SPAM:*\n*—◉ #spamwa numero|texto|quantidade*\n*EXEMPLO:*\n*—◉ #spamwa 5219999999999|responde :v|25*'
if (!pesan) throw '*[ ⚠️ ] FAVOR COLOCAR A MENSAGEM DO SPAM!*\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙾:*\n*—◉ #spamwa numero|texto|quantidade*\n*EXEMPLO:*\n*—◉ #spamwa 5219999999999|responde :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] ]A QUANTIDADE DEVE SER EM NÚMEROS*\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙾:*\n*—◉ #spamwa numero|texto|quantidade*\n*EXEMPLO:*\n*—◉ #spamwa 5219999999999|responde :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] MUITA MENSAGEM, AVEMARIA. DIMINUI ESSE CARAI QUE AKI NÃO É TRAVA ZAP*️'
await m.reply(`*[❗] O SPAM NO NÚMERO ${nomor} FOI REALIZADO COM SUCESSO*\n*QUANTIDADE 𝙴𝙽𝚅𝙸𝙰𝙳𝙰:*\n*—◉ ${fixedJumlah} 𝚟𝚎z𝚎𝚜!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
//handler.private = true
handler.limit = true
export default handler
