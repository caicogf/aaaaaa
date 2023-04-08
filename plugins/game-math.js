global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`
*[❗𝐈𝐍𝐅𝐎❗] COLOQUE A DIFICULDADE EM QUE QUER JOGAR (PRECISA DE INGLÊS BÁSICO)*

*DIFICULDADES: ${Object.keys(modes).join(' | ')}*
*EXEMPLO DE USO: ${usedPrefix}math medium*
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['MATH EASY', `${usedPrefix + command} easy`], 
['MATH MEDIUM', `${usedPrefix + command} medium`], 
['MATH HARD', `${usedPrefix + command} hard`]], m)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['MATH EASY', `${usedPrefix + command} easy`], 
['MATH MEDIUM', `${usedPrefix + command} medium`], 
['MATH HARD', `${usedPrefix + command} hard`]], m)
let id = m.chat
if (id in global.math) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] Nem vem me passar a perna, tem umas perguntas que ainda não foram respondidas. Pode assumir que é burro, não vou te julgar!*', global.math[id][0])
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `QUAL O RESULTADO DE *${math.str}*?\n\n*⏳ 𝚃𝙴𝙼𝙿𝙾: ${(math.time / 1000).toFixed(2)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*\n*🏆 PRÊMIO: ${math.bonus} 𝚇𝙿*`, m),
math, 4,
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] Você, além de lerdo é burro! O TEMPO ACABOU.*\n\n*A resposta é ${math.result}*, dá proxima tente uma mais fácil`, author, null, [['TENTAR DE NOVO', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
