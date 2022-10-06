import { useContext } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { ThemeContext } from "./context/ThemeContext"
import CountrySingle from "./Pages/CountrySingle.jsx"
import Home from "./Pages/Home"

function App() {

  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`${darkMode ? 'App' : 'App Applight'}`}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountrySingle />} />
          <Route path='/countryByCode/:code' element={<CountrySingle />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
