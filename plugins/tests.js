const DarkEzio = require('../events')

DarkEzio.addCommand({ pattern: ['myhug', 'mhg', 'himf'], fromMe: true, desc: 'Glang.GİTHUB_DESC'}, async (conn, m) => {
    var d = 58+56+4*9+8985
    console.log(d)
    conn.sendMessage(m.id, { text: `⭐✑ Hi👋` })
    conn.sendMessage(m.id, { text: 'message' })
    conn.sendMessage(m.id, { text: 'match' })
    console.log('message')
    console.log('match')
})
