const app = require('./server')
const config = require('./config')

const PORT = config.PORT

app.listen(PORT, () => {
  console.log(`TVify App Express running on ${PORT}`)
})
