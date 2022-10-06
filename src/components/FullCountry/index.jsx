import { Link } from 'react-router-dom'
import TagBorde from '../TagBorder'
import './stylesFullCountry.css'

function FullCountry({ flags, name, population, region, subregion, capital, tld, currencies, languages, borders }) {

  return (
    <>
      <div className='fullCountry__buttonContainer'>
        <Link to='/'><button className='fullCountry__button'> <ion-icon name="arrow-back-outline"></ion-icon> Back </button></Link>
      </div>
      <div className='fullCountry__container'>
        <div>
          <img className='fullCountry__image' src={flags?.svg} alt={`Flags of ${name?.common}`} />
        </div>
        <div className='fullCountry__text'>
          <h2>{name?.common}</h2>
          <div className='fullContry__textContainer'>
            <div>
              <h3>Native Name: <span>{Object.values(name?.nativeName).map(res => res.common)[0]}</span></h3>
              <h3>Population: <span>{population}</span></h3>
              <h3>Region: <span>{region}</span></h3>
              <h3>Sub Region: <span>{subregion}</span></h3>
              <h3>Capital: <span>{capimport { Link } from 'react-router-dom'
import TagBorde from '../TagBorder'
import './stylesFullCountry.css'

function FullCountry({ flags, name, population, region, subregion, capital, tld, currencies, languages, borders }) {

  return (
    <>
      <div className='fullCountry__buttonContainer'>
        <Link to='/'><button className='fullCountry__button'> <ion-icon name="arrow-back-outline"></ion-icon> Back </button></Link>
      </div>
      <div className='fullCountry__container'>
        <div>
          <img className='fullCountry__image' src={flags?.svg} alt={`Flags of ${name?.common}`} />
        </div>
        <div className='fullCountry__text'>
          <h2>{name?.common}</h2>
          <div className='fullContry__textContainer'>
            <div>
              <h3>Native Name: <span>{Object.values(name?.nativeName).map(res => res.common)[0]}</span></h3>
              <h3>Population: <span>{population}</span></h3>
              <h3>Region: <span>{region}</span></h3>
              <h3>Sub Region: <span>{subregion}</span></h3>
              <h3>Capital: <span>{capital}</span></h3>
            </div>
            <div>
              <h3>Top Level Domain: <span>{tld}</span></h3>
              <h3>Curriencies: <span>{Object.values(currencies).map(res => res.name)}</span> </h3>
              <h3>Languages: <span>{Object.values(languages)}</span></h3>
            </div>
          </div>
          <div className='containerTags'>
            {borders &&
              <>
                <h3>Border Countries: </h3>
                {borders?.map(res => <TagBorde borde={res} />)}
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FullCountryital}</span></h3>
            </div>
            <div>
              <h3>Top Level Domain: <span>{tld}</span></h3>
              <h3>Curriencies: <span>{Object.values(currencies).map(res => res.name)}</span> </h3>
              <h3>Languages: <span>{Object.values(languages)}</span></h3>
            </div>
          </div>
          <div className='containerTags'>
            {borders &&
              <>
                <h3>Border Countries: </h3>
                {borders?.map(res => <TagBorde borde={res} />)}
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FullCountry