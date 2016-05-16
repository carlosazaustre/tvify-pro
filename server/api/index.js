'use strict'

const express = require('express')
const tvmaze = require('../tvmaze-api-client')

const router = express.Router()
const tvmazeClient = tvmaze.createClient()

// -- GET /api/shows
router.get('/shows', (req, res) => {
  tvmazeClient
    .shows()
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500).json(err))
})

// -- GET /api/shows/:id
router.get('/shows/:id', (req, res) => {
  tvmazeClient
    .show(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500).json(err))
})

// -- GET /api/search
router.get('/search', (req, res) => {
  let query = req.query.q

  tvmazeClient
    .search(query)
    .then(data => res.json(data))
    .catch(err => res.sendStatus(500).json(err))
})

module.exports = router
