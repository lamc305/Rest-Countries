import { useContext } from "react"
import { FilterContext } from "../../context/FilterContext"
import Country from "../Country"
import Spinner from "../Spinner"
import './stylesList.css'

function ListOfCountries() {


  const { isLoading, matches } = useContext(FilterContext)

  const compare_name = (a, b) => {
    if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
      return -1;
    }
    if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
      return 1;
    }
    return 0;
  }


  if (isLoading) return <Spinner />
  return (
    <section className='listOfCountries'>
      {matches.sort(compare_name).map(({ name, flags, population, capital, region }) => (
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