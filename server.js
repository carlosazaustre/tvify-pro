const express = require('express')
const config = require('./config')

const app = express()
const PORT = config.PORT

app.listen(PORT, () => {
  console.log(`TVify App Express running on ${PORT}`)
})
