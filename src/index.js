const io = require('./io')
const consola = require('consola')

const port = process.env.PORT || 3001

io.listen(port)

consola.ready({
  message: `Server listening on port ${port}`,
  badge: true
})
