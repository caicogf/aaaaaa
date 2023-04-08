// creditos a https://github.com/FG98F
let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 5000)
let time = global.db.data.users[m.sender].lastwork + 600000
if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*Você vive num sistema capitalista fudido, por isso está sempre cansado. Aguarde ${msToTime(time - new Date())} para voltar ao trabalho, aqui não temos acumulo de capital!*`

m.reply(`${pickRandom(global.work)} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['xp']
handler.command = ['work', 'trabalhar']
handler.fail = null
handler.exp = 0
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


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

global.work = ["Você trabalha como funcionária da Karen bachini e ganha", "Você faz música ruim, nossa olivia rodrigo, ganhou", "Você organizou um evento podre, ganhou",
 "Te sequestraram e agora você está em um lugar escuro, estão te obrigando a ouvir o album da taylor swift sem pausa, ganhou", "Você está promovendo albuns babadeiros, toma", 
"Você é um nerdola e está jogando lol, ganha", 
"Você é petista e quer ganhar xp sem trabalhar, toma", "Fez hora extra na pussy lanches corporation", 
"Você está rodando bolsinha, cachorra! Tome", 
"Você é tão feio que ficaram com dó, te deram", "Funcionário da pussy lanches, amo, tome", "Você é porpeta animador de festa, tome", 
"Você é a J.K Rowling e escreveu a coisa mais porca, toma", 
"Você é a Collen Hoover, e escreveu coisas horríveis, toma", "Você tinha uns lixos no bolso (album do harry styles), vendeu essa bomba e ganhou uns trocados.", 
"Você é trambiqueiro, viado fajuto, espancou uma idosa na rua e roubou ela ainda, alguém prende essa beesha. Toma", 
"Desenvolveu a cura gay, toma", 
"Ganhou uma competição de resistência à música ruim, ouviu Olivia Rodrigo por horas e ganhou", 
"Você trabalha na fiscalização da last fm, pode ir humilhando os charts alheios!! Toma", 
"Fiscalização letterboxd, pode ir dropando o filme do ano (everything everywhere all at once), toma", "Desenhou uma coisa horrorosa e fingiu ser arte contemporanea, ganhou", 
"Tão tonhão que ficaram com dó e te deram um trocado, tome", 
"Você é fã de artistas e gay de charts, toma", 
"VOCÊ VEIO DIRETAMENTE DE KWANGYA, IM GOING KWANGYARO GAME IN. toma", "Você assasinou a black mamba, saiu de kwangya e todos os divos my's te aplaudiram, tome", 
"VOCÊ COLOCOU FELIPE NETO NA CADEIA, OS DIVOS DE DIREITA TE DERAM", 
"Você achou na rua, toma", "EXPERIMENTAL DIVO FM @@@####@#@#@#$$$%%¨$ ganhou", "você é dona da wepink, a base perfeita, toma", 
"Você fez o rap do zé felipe ret, eu peço respeito com a minha familia, com minhas maria, com minha virgina RESPEITA UMA MÃE, A MINHA MULER... deviar ter noçãwn e ganhou","Você foi figurante de um filme de qualidade mega duvidosa (terrifier) e ganhou uns trocados para não passar fome.", 
"Ai, fiquei com dó de você, toma"
]
