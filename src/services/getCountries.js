const URL = 'https://restcountries.com/v3.1/all'

export function getCountries() {
  return fetch(URL)
    .then(res => res.json())
    .then(response => {
      const data = response
      return data
    })
}
