let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085751414996]
│ • Telkomsel [082256080304]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [082256080304]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
