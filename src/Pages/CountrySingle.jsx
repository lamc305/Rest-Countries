import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FullCountry from "../components/FullCountry"
import Spinner from "../components/Spinner"
import { getFullCountry } from "../services/getFullCountry"

function CountrySingle() {
  const { name } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    getFullCountry(name).then(setCountry)
  }, [])

  console.log(country)

  return (
    <>
      {country === null ? <Spinner /> :

        country.map(({ name, capital, region, subregion, flags, tld, population, languages, currencies, borders }) => (
          <FullCountry
            key={name}
            name={name}
            capital={capital}
            region={region}
            subregion={subregion}
            flags={flags}
            tld={tld}
            currencies={currencies}
            population={population}
            languages={languages}
            borders={borders}
          />
        ))

      }
    </>
  )
}

export default CountrySingle 