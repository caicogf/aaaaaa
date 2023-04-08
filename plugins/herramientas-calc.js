let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('Mor? Capaz que vou te mandar agora, toma tento!')
}
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw '*[❗𝐈𝐍𝐅𝐎❗] MANDA A OPERAÇÃO QUE VOCÊ QUER CALCULAR, EU SEI QUE VOCÊ É BURRO E NÃO SABE MATEMÁTICA BÁSICA*'
throw '*[❗𝐈𝐍𝐅𝐎❗] ESTE FORMATO NÃO É PERMITIDO, UTILIZE -, +, *, /, ×, ÷, π, e, (, )*'
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calculadora|calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler
