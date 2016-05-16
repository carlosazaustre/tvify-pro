'use strict'

const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')

const app = express()

// -- Config -------------------------------------------------------------------

// -- Views Config
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs',
  partialsDir: path.join(__dirname, 'views', 'partials'),
  layoutsDir: path.join(__dirname, 'views', 'layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

// -- Static and parser options
app.use(express.static(path.join(__dirname, '..', 'public')))

// -- Routes
app.get('/', (req, res) => {
  res.render('home')
})

module.exports = app
