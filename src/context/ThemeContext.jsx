import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeContextProvider({ children }) {

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('themeModeRest')) || false)

  const data = { darkMode, setDarkMode }


  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}