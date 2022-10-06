import { Link } from 'react-router-dom'
import './stylesCountry.css'

function Country({ flags, name, population, region, capital }) {
  return (
    <Link to={`/country/${name.common}`}>
      <div className="country">
        <img className='country__image' src={flags.svg} alt="" />
        <div className='country__containerText'>
          <h2 className='country__name'>{name.common}</h2>
          <h3>Population: <span>{population}</span></h3>
          <h3>Region: <span>{region}</span></h3>
          <h3>Capital: <span>{capital}</span></h3>
        </div>
      </div>
    </Link >
  )
}

export default Country