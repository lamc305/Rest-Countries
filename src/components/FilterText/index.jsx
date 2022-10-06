import { useContext } from "react"
import { FilterContext } from "../../context/FilterContext"
import { ThemeContext } from '../../context/ThemeContext'

function FilterText() {

  const { filters, setFilters } = useContext(FilterContext)
  const { darkMode } = useContext(ThemeContext)

  const onChange = (filter) => {
    setFilters({ ...filters, name: filter })
  }

  const handleChange = (value) => {
    onChange(value ? countries => countries.name.common.includes(value[0].toUpperCase() + value.substring(1)) : null)
  }

  return (
    <div className={`${darkMode ? 'input__container' : 'input__container input__containerLight'}`}>
      <div className={`${darkMode ? 'icon' : 'icon iconLight'}`}>
        <ion-icon name="search-sharp"></ion-icon>
      </div>
      <input type="text" name="search" id="search" placeholder='Search for a country...' onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default FilterText