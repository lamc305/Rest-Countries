import { Link } from 'react-router-dom'
import './stylesTag.css'

function TagBorde({ borde }) {
  return (

    <Link to={`/countryByCode/${borde}`}>
      <div className='tagBorder'>
        {borde}
      </div>
    </Link>
  )
}

export default TagBorde