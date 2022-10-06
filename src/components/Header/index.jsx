import './stylesHeader.css'
import { FaMoon } from 'react-icons/fa'
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p>Where in the world?</p>
        <div className='themeMode'>
          <FaMoon />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  )
}

export default Header 