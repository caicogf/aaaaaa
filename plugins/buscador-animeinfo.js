import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] BOTA O NOME DE UM ANIME PARA INICIAR A PESQUISA*`)
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'pt', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'pt', autoCorrect: true })   
let AnimeInfo = `
🎀 • *Título:* ${result.title}
🎋 • *Formato:* ${result.type}
📈 • *Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}
🍥 • *Episódios:* ${result.episodes}
🎈 • *Duração: ${result.duration}*
✨ • *Source:* ${result.source.toUpperCase()}
💫 • *Lançado em:* ${result.aired.from}
🎗 • *Finalizado:* ${result.aired.to}
🎐 • *Popularidade:* ${result.popularity}
🎏 • *Favoritos:* ${result.favorites}
🎇 • *Classificação:* ${result.rating}
🏅 • *Rank:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${resultes.text}
❄ • *Ringkasan:* ${resultes2.text}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `*[❗] HOUVE UM ERRO, NÃO GOSTO DE NERDOLAS*`  
}}
handler.command = /^(anime|animeinfo)$/i
export default handler 
