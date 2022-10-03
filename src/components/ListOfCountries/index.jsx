import { useEffect, useState } from "react"
import { getCountries } from "../../services/getCountries"
import Country from "../Country"
import './stylesList.css'

function ListOfCountries() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries().then(setCountries)
  }, [])
  console.log(countries)

  return (
    <section className='listOfCountries'>
      {countries.map(({ name, flags, population, capital, region }) => (
        <Country
          key={flags.svg}
          name={name}
          flags={flags}
          population={population}
          capital={capital}
          region={region}
        />
      ))}
    </section>
  )
}

export default ListOfCountries