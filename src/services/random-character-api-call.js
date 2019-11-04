export function getRandomATLACharacter() {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(results => results.json());
}

export function getSearchedTLACharacter(search) {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${search}`)
    .then(results => results.json());
}
