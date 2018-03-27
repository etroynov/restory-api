const micro = require('micro')
const index = require('./src')

const port = parseInt(process.env.PORT, 10) || 2000
const server = micro(index)

server.listen(port)
