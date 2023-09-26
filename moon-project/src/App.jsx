import './App.css'
import React, {useState} from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LunarInfo from './components/lunarinfo'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

  return (
    <>
        <Navbar
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        /> 
        <LunarInfo
        darkMode={darkMode} 
        />
        <Footer/>
    </>
  )
}

export default App
