import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  ['553183738317', 'caico baphudo', true]
] 

global.suittag = ['55531983738317'] 
global.prems = ['5531983738317'] 

global.packname = 'ata amo'
global.author = 'LAST.FM GANG★'
global.wm = 'LAST.FM GANG★'
global.igfg = 'LAST.FM GANG★'
global.wait = '*[❗] Carregando, calma tonho*'


global.openai_key = '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'
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-zqIRR2MXywdpbFcuKt0iEGCh'
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs'	
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan'	
}

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
      level: '🧬 Nivel',
      limit: '💎 Diamante',
      exp: '⚡ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Saúde',
      kyubi: '🌀 Magia',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda',
      stamina: '✨ Energia',
      role: '💪 Cargp',
      premium: '🎟️ VIP',
      pointxp: '📧 Pontos Exp',
      gold: '👑 Ouro',
      trash: '🗑 Lixo',
      crystal: '🔮 Cristal',
      intelligence: '🧠 Inteligência',
      string: '🕸️ Corda',
      keygold: '🔑 CHAVE DE OURO',
      keyiron: '🗝️ CHAVE DE FERRO',
      emas: '🪅 Pinhata',
      fishingrod: '🎣 Vara de pescar',
      gems: '🍀 Gemas',
      magicwand: '⚕️ Varinha Mágica',
      mana: '🪄 Mana',
      agility: '🤸‍♂️ Agilidade',
      darkcrystal: '♠️ Cristal escuro',
      iron: '⛓️ Ferro',
      rock: '🪨 Rocha',
      potion: '🥤 Poção',
      superior: '💼 Superior',
      robo: '🚔 Robô',
      upgrader: '🧰 Upgrader',
      wood: '🪵 Madeira',
      strength: '🦹‍ ♀️ Força',
      arc: '🏹 Arco',
      armor: '🥼 Armadura',
      bow: '🏹 Super Arco',
      pickaxe: '⛏️ Picareta',
      sword: '⚔️ Espada',
      common: '📦 Caixa Comum',
      uncoommon: '🥡 Caixa Incomum',
      mythic: '🗳️ Caixa Mítica',
      legendary: '🎁 Caixa Lendária',
      petFood: '🍖 Alimento para Mascotes',
      pet: '🍱 Caixa de PET',
      bibitanggur: '🍇 Sementes de Uva',
      bibitapel: '🍎 Sementes de Maçã',
      bibitjeruk: '🍊 Sementes de laranja',
      bibitmangga: '🥭 Sementes de Manga',
      bibitpisang: '🍌 Sementes de banana',
      ayam: '🐓 Galinha',
      babi: '🐖 Porco',
      Jabali: '🐗 Javali',
      bull: '🐃 Touro',    
      buaya: '🐊 Crocodilo',    
      cat: '🐈 Gato',      
      centaur: '🐐 Centauro',
      chicken: '🐓 Galo',
      cow: '🐄 Vaca', 
      dog: '🐕 Cachorro',
      dragon: '🐉 Dragão',
      elephant: '🐘 Elefante',
      fox: '🦊 Raposa',
      giraffe: '🦒 Girafa',
      griffin: '🦅 Ave',
      horse: '🐎 Cavalo',
      kambing: '🐐 Cabra',
      kerbau: '🐃 Búfalo',
      lion: '🦁 Leão',
      money: '👾 Artpopcoins',
      monyet: '🐒 Macaco',
      panda: '🐼 Panda',
      snake: '🐍 Cobra',
      phonix: '🕊️ Fénix',
      rhinoceros: '🦏 Rinoceronte',
      wolf: '🐺 Lobo',
      tiger: '🐅 Tigre',
      cumi: '🦑 Lula',
      udang: '🦐 Camarão',
      ikan: '🐟 Peixe',
      fideos: '🍝 macarrão',
      ramuan: '🧪 Ingrediente NOVO',
      knife: '🔪 faca'
    }
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}
global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
    let emott = {
      level: '🧬',
      limit: '💎',
      exp: '⚡',
      bank: '🏦',
      diamond: '💎+',
      health: '❤️',
      kyubi: '🌀',
      joincount: '🪙',
      emerald: '💚',
      stamina: '✨',
      role: '💪',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      trash: '🗑',
      crystal: '🔮',
      intelligence: '🧠',
      string: '🕸️',
      keygold: '🔑',
      keyiron: '🗝️',
      emas: '🪅',
      fishingrod: '🎣',
      gems: '🍀',
      magicwand: '⚕️',
      mana: '🪄',
      agility: '🤸‍♂️',
      darkcrystal: '♠️',
      iron: '⛓️',
      rock: '🪨',
      potion: '🥤',
      superior: '💼',
      robo: '🚔',
      upgrader: '🧰',
      wood: '🪵',
      strength: '🦹‍ ♀️',
      arc: '🏹',
      armor: '🥼',
      bow: '🏹',
      pickaxe: '⛏️',
      sword: '⚔️',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      legendary: '🎁',
      petFood: '🍖',
      pet: '🍱',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      ayam: '🐓',
      babi: '🐖',
      Jabali: '🐗',
      bull: '🐃',    
      buaya: '🐊',    
      cat: '🐈',      
      centaur: '🐐',
      chicken: '🐓',
      cow: '🐄', 
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      fox: '🦊',
      giraffe: '🦒',
      griffin: '🦅', 
      horse: '🐎',
      kambing: '🐐',
      kerbau: '🐃',
      lion: '🦁',
      money: '👾',
      monyet: '🐒',
      panda: '🐼',
      snake: '🐍',
      phonix: '🕊️',
      rhinoceros: '🦏',
      wolf: '🐺',
      tiger: '🐅',
      cumi: '🦑',
      udang: '🦐',
      ikan: '🐟',
      fideos: '🍝',
      ramuan: '🧪',
      knife: '🔪'
    }
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
    let emottt = {
      exp: '⚡ Experiência',
      limit: '💎 Diamante',
      diamond: '💎 Diamante',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda',
      berlian: '♦️ Jóia',
      kyubi: '🌀 Magia',
      gold: '👑 Oro',
      money: '👾 ARTPOPCoins',
      tiketcoin: '🎫 ARTPOP Tickers',
      stamina: '✨ Energia',
      potion: '🥤 Poção',
      aqua: '💧 Agua',
      trash: '🗑 Lixo',
      wood: '🪵 Madeira',
      rock: '🪨 Rocha',
      batu: '🥌 Pedra',
      string: '🕸️ Corda',
      iron: '⛓️ Ferro',
      coal: '⚱️ Carvão',
      botol: '🍶 Garrafa',
      kaleng: '🥫 Lata',
      kardus: '🪧 Cartão',
      eleksirb: '💡 Electricidade',
      emasbatang: '〽️ Barra de Ouro',
      emasbiasa: '🧭 Ouro Comum',
      rubah: '🦊🌫️ Raposa Grande',
      sampah: '🗑🌫️ Harrys House',
      serigala: '🐺🌫️ Super Lobo',
      kayu: '🛷 Super Madeira',
      sword: '⚔️ Espada',
      umpan: '🪱 isca', 
      healtmonster: '💵 Bilhetes',
      emas: '🪅 Pinhata',
      pancingan: '🪝 Gancho',
      pancing: '🎣 Vara de pesca',
      common: '📦 Caixa comum',
      uncoommon: '🥡 Caixa incomum',
      mythic: '🗳️ Caixa mítica',
      pet: '📫 Caixa de pets',//?
      gardenboxs: '💐 Caixa de Jardinagem',//?
      legendary: '🎁 Caixa lendária',
      anggur: '🍇 Uva',
      apel: '🍎 Mançã',
      jeruk: '🍊 Laranja',
      mangga: '🥭 Manga',
      pisang: '🍌 Banana',
      bibitanggur: '🌾🍇 Sementes de uva',
      bibitapel: '🌾🍎 Sementes de maçã',
      bibitjeruk: '🌾🍊 Sementes de Laranja',
      bibitmangga: '🌾🥭 Sementes de Manga',
      bibitpisang: '🌾🍌 Sementes de banana',
      centaur: '🐐 Centauro',
      griffin: '🦅 Ave',
      kucing: '🐈 Gato',
      naga: '🐉 Dragão',
      fox: '🦊 Raposa',
      kuda: '🐎 Cavalo',
      phonix: '🕊️ Fénix',
      wolf: '🐺 Lobo',
      anjing: '🐶 Cachorro',
      petFood: '🍖 Alimento para Mascote', //?
      makanancentaur: '🐐🥩 Comida de Centauro',
      makanangriffin: '🦅🥩 Comida de Ave',
      makanankyubi: '🌀🥩 Comida Mágica',
      makanannaga: '🐉🥩 Comida de Dragão',
      makananpet: '🍱🥩 Alimentos de pets',
      makananphonix: '🕊️🥩 Comida de Fénix'  
    }
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}
global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: '⚡',
      limit: '💎',
      diamond: '💎+',
      joincount: '🪙',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      money: '👾',
      tiketcoin: '🎫',
      stamina: '✨',
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱', 
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
      pancing: '🎣',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      petFood: '🍖', //?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩'  
    }
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emotttt[results[0][0]]
}}	
	
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//*****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ LAST.FM GANG BOT`
global.gt = 'LAST.FM GANG BOT★'
global.mysticbot = '★ LAST.FM GANG BOT'
global.md = 'https://last.fm/user/caico_'
global.mysticbot = 'https://last.fm/user/caico_'
global.waitt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'
global.waittt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'
global.waitttt = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'
global.nomorown = '5219993404349'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `★ DATA:  ${moment.tz('America/Sao_Paulo').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `★ HORÁRIO: ${moment.tz('America/Sao_Paulo').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
