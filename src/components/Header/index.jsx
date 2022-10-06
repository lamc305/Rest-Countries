import './stylesHeader.css'
import { FaMoon, FaRegMoon } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
function Header() {

  const { darkMode, setDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem('themeModeRest', darkMode)
  }, [darkMode])


  const handlClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className={`${darkMode ? 'header' : 'header headerLight'}`}>
      <div className={`${darkMode ? "header__container" : 'header__container header_containerLight'} `}>
        <Link to='/'>
          <p>Where in the world?</p>
        </Link>
        <div className={`${darkMode ? 'themeMode' : 'themeMode themeModeLight'}`} onClick={handlClick}>
          {darkMode ? <FaMoon /> : <FaRegMoon />}
          <p>Dark Mode</p>
        </div>
      </div>
    </header >
  )
}

export default Header 