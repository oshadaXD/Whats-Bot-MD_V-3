const DarkEzio = require('../events')

DarkEzio.addCommand({ pattern: ['myhug', 'mhg', 'himf'], fromMe: true, desc: 'Glang.GİTHUB_DESC'}, async (message, match) => {
    var d = 58+56+4*9+8985
    console.log(d)
    message.conn.sendMessage(message.m.id, { text: `⭐✑ Hi👋` })
    message.conn.sendMessage(message.m.id, { text: message })
    message.conn.sendMessage(message.m.id, { text: match })
    console.log(message)
    console.log(match)
})
