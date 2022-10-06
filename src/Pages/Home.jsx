import Filters from "../components/Filters"
import ListOfCountries from "../components/ListOfCountries"
import { FilterContextProvider } from "../context/FilterContext"

function Home() {
  return (
    <FilterContextProvider>
      <Filters />
      <ListOfCountries />
    </FilterContextProvider>
  )
}

export default Home