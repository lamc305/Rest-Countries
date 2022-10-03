import { useState } from 'react'
import './stylesFilters.css'

function Filters() {

  const [select, setSelect] = useState('default')

  const handleChange = (e) => {
    setSelect(e.target.value)
  }

  return (
    <form className='form'>
      <div className="input__container">
        <ion-icon name="search-sharp"></ion-icon>
        <input type="text" name="search" id="search" placeholder='Search for a country...' />
      </div>
      <div className="select">
        <select name="filter" id="filter" value={select} onChange={handleChange}>
          <option value='default' disabled hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

    </form>
  )
}

export default Filters