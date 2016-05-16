import $ from 'jquery'

// -- DOM Elements
const $tvShowContainer = $('.AppContainer')

// -- Event Listeners
$tvShowContainer.on('click', 'div.TVShowCard-info-favorite', onClickFavorite)

// -- Helpers
const onClickFavorite = (event) => {
  let $this = $(this)
  console.log($this)
}

export default $tvShowContainer
