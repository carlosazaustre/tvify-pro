import $ from 'jquery'

export function getShows (done) {
  console.log('getShows()')
  $.ajax('/api/shows', {
    success: (shows, textStatus, xhr) => done(shows)
  })
}

export function searchShows (query, done) {
  console.log('searchShows')
  $.ajax(`/api/search?q=${query}`, {
    data: query,
    success: (shows, textStatus, xhr) => done(shows)
  })
}
