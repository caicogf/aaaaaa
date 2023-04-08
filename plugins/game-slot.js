/* CREDITOS A https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command }) => {
let fa = `
*[❗] COLOQUE A QUANTIDADE QUE VOCÊ QUER APOSTAR* 

*📌 EXEMPLO:*
*${usedPrefix + command} 100*`.trim()
if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])
let users = global.db.data.users[m.sender]
let time = users.lastslot + 10000
if (new Date - users.lastslot < 10000) throw `*⏳ AGUARDE ${msToTime(time - new Date())} PARA APOSTAR NOVAMENTE, QUERIDE*`
if (apuesta < 100) throw '*[❗] O MÍNIMO É 100 DE XP, SAI DAQUI POBRETA MISERAVEL, EU HEIN*'
if (users.exp < apuesta) {
throw `*[❗] VOCÊ É POBRETÃO E NÃO TEM ESSA QUANTIDADE DE XP PARA APOSTAR, JOGUE OUTROS BABADINHOS PARA CONSEGUIR MAIS XP*`
}
let emojis = ["🐋", "🐉", "🕊️"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*GANHOU! 🎁 +${apuesta + apuesta} 𝚇𝙿*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `*🔮 Putz, você quase conseguiu. Vou lhe dar 10 de xp só pra fortalecer a amizade.*`
users.exp += 10
} else {
end = `*❌ perdeu tudo, bb to tirando -${apuesta} 𝚇𝙿*`
users.exp -= apuesta
}
users.lastslot = new Date * 1
return await m.reply(
        `
🎰 | *SLOT* 
────────
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
────────
🎰 | ${end}`) 
}
handler.help = ['slot <aposta>']
handler.tags = ['game']
handler.command = ['slot']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s "
}

