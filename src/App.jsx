import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import MainContent from './components/MainContent/MainContent'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(prevMode=> !prevMode)
  }

  return (
    <div className='container'>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent
        darkmode={darkMode}
      />
    </div>
  )
}

export default App
