import page from 'page'
import { getShows, searchShows } from './api-client'
import $tvShowContainer from './tv-shows-container'

page('/', (ctx, next) => {
  getShows(function(data) {
    console.log(data)
  })
})

page()
