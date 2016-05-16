'use strict'

const express = require('express')
const tvmaze = require('../tvmaze-api-client')

const router = express.Router()
const tvmazeClient = tvmaze.createClient()

// -- GET /api/shows
const getShows = (req, res) => {
  tvmazeClient
    .shows()
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500).json(err))
}

// -- GET /api/shows/:id
const getShowID = (req, res) => {
  tvmazeClient
    .show(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500).json(err))
}

// -- GET /api/search
const search = (req, res) => {
  let query = req.query.q

  tvmazeClient
    .search(query)
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500).json(err))
}

router.get('/shows', getShows)
router.get('/shows/:id', getShowID)
router.get('/search', search)

module.exports = router
