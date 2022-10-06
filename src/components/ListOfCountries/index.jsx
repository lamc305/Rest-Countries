import { useEffect, useState } from "react"
import { getCountries } from "../../services/getCountries"
import Country from "../Country"
import Spinner from "../Spinner"
import './stylesList.css'

function ListOfCountries() {

  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getCountries().then(res => {
      setIsLoading(false)
      setCountries(res)
    })
  }, [])


  if (isLoading) return <Spinner />
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