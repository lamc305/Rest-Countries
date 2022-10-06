export function getFullCountry(name) {
  const URL = `https://restcountries.com/v3.1/name/${name}?fullText=true`
  return fetch(URL)
    .then(res => res.json())
    .then(response => {
      const data = response
      return data
    })
}
