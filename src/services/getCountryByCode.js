
export function getCountryByCode(code) {
  const URL = `https://restcountries.com/v3.1/alpha/${code}`
  return fetch(URL)
    .then(res => res.json())
    .then(response => {
      const data = response
      return data
    })
}