export function getFullCountry(name) {
  const URL = `https://restcountries.com/v3.1/name/${name}`
  return fetch(URL)
    .then(res => res.json())
    .then(response => {
      const data = response
      return data
    })
}
