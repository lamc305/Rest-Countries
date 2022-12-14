import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import TagBorde from '../TagBorder'
import './stylesFullCountry.css'
import { ThemeContext } from '../../context/ThemeContext'

function FullCountry({ flags, name, population, region, subregion, capital, tld, currencies, languages, borders }) {

  const { darkMode } = useContext(ThemeContext)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      <div className='fullCountry__buttonContainer'>
        <button onClick={handleClick} className={`${darkMode ? 'fullCountry__button' : 'fullCountry__button fullCountry__buttonLight'}`}> <ion-icon name="arrow-back-outline"></ion-icon> Back </button>
      </div>
      <div className='fullCountry__container'>
        <div className='fullCountry__imageContainer'>
          <img className='fullCountry__image' src={flags?.svg} loading='lazy' alt={`Flags of ${name?.common}`} />
        </div>
        <div className={`${darkMode ? 'fullCountry__text' : 'fullCountry__text fullCountry__textLight'}`}>
          <h2>{name?.common}</h2>
          <div className='fullContry__textContainer'>
            <div className='fullCountry__textLeft'>
              {name?.nativeName && <h3>Native Name:
                <span> {Object.values(Object.values(name?.nativeName)[0].official)}</span>
              </h3>}
              <h3>Population: <span>{population.toLocaleString()}</span></h3>
              <h3>Region: <span>{region}</span></h3>
              {subregion && <h3>Sub Region: <span>{subregion}</span></h3>}
              {capital && <h3>Capital: <span>{capital}</span></h3>}
            </div>
            <div className='fullCountry__textRight'>
              <h3>Top Level Domain: <span>{tld}</span></h3>
              {currencies && <h3>Curriencies:
                <span> {Object.values(currencies).map(res => <span key={res.name}>{res.name} </span>)}</span>

              </h3>}
              {languages && <h3>Languages: <span>{Object.values(languages).map(res => <span key={res}>{res} </span>)}</span></h3>}
            </div>
          </div>
          {borders &&
            <div className='containerTags'>
              <h3>Border Countries: </h3>
              <div className='container__bordes'>
                {borders?.map(res => <TagBorde key={res} borde={res} />)}
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default FullCountry