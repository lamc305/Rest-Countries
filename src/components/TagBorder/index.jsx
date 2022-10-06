import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import './stylesTag.css'

function TagBorde({ borde }) {

  const { darkMode } = useContext(ThemeContext)

  return (

    <Link to={`/countryByCode/${borde}`}>
      <div className={`${darkMode ? 'tagBorder' : 'tagBorder tagBorderLight'}`}>
        {borde}
      </div>
    </Link>
  )
}

export default TagBorde