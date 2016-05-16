'use strict'

const TVMazeAPI = require('./lib')

function createClient (url) {
  return new TVMazeAPI(url)
}

module.exports = {
  createClient
}
