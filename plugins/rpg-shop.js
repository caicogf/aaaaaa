const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `
┌─「 *NOTA DE PAGO* 」
‣ *Compra* : + ${count}💎 
‣ *Gastou* : -${xpperlimit * count} XP
└──────────────`, m)
  } else conn.reply(m.chat, `❎ SOME DAQUI POBRE, VOCÊ NÃO TEM XP PARA COMPRAR *${count}* Diamantes💎`, m)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
