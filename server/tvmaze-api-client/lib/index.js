'use strict'

const fetch = require('node-fetch')
const qs = require('querystring')

class TVMazeAPI {
  constructor (url = 'http://api.tvmaze.com') {
    this.API_URL = url
  }

  // Private method to request the API
  _request (path, method, params) {
    let uri = `${this.API_URL}/${path}`

    if (params) {
      uri = `${uri}?q${qs.encode(params)}`
    }

    return fetch(uri, { method })
      .then((res) => res.json())
      .then((json) => json)
  }

  // Get an specific TVShow by ID
  show (id) {
    return this._request('shows/${id}', 'GET', null)
  }

  // Get all TVShows
  shows () {
    return this._request('shows', 'GET', null)
  }

  // Search a showName and return the search
  search (showName) {
    return this._request()
  }
}

module.exports = TVMazeAPI
