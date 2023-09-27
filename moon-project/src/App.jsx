import './App.css'
import React, {useState, useEffect} from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LunarInfo from './components/lunarinfo'
import Button from './components/button'
import MoonAgeInDays from './components/MoonAPI'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)


    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    function getMoonStatus() {

    }


  
  return (
    <>
        <Navbar
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        /> 
        <Button
          onClick={getMoonStatus}
        />

        <LunarInfo
        darkMode={darkMode} 
        />
        <MoonAgeInDays />
        <Footer/>
    </>
  )
}

export default App
