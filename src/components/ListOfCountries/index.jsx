import { useContext } from "react"
import { FilterContext } from "../../context/FilterContext"
import Country from "../Country"
import Spinner from "../Spinner"
import './stylesList.css'

function ListOfCountries() {


  const { isLoading, matches } = useContext(FilterContext)

  if (isLoading) return <Spinner />
  return (
    <section className='listOfCountries'>
      {matches.map(({ name, flags, population, capital, region }) => (
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