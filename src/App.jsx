import { HashRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import CountrySingle from "./Pages/CountrySingle.jsx"
import Home from "./Pages/Home"

function App() {


  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountrySingle />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
