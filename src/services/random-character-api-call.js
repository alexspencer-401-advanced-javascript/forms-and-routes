export function getRandomATLACharacter() {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(results => results.json());
}

export function getSearchedTLACharacter(search, page = 1) {
  if(search === null) {
    return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
      .then(results => results.json());
  } else {
    return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${search}`)
      .then(results => results.json());
  }
}

export function getSpecificCharacter(characterId) {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`)
    .then(results => results.json());
}
