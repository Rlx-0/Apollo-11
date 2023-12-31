import './App.css'
import React, {useState, useEffect} from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LunarInfo from './components/lunarinfo'
import Button from './components/button'


function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  const [buttonClicked, setButtonClicked] = React.useState(false)
  const [moonAge, setMoonAge] = useState([])
	const [moonRise, setMoonRise] = useState([])
	const [phaseOfMoon, setPhaseOfMoon] = useState([])


    /*darkmodetoggle*/
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    /* button click for fetching data*/
    function handleButtonClick() {
      !buttonClicked ? alert("button has been clicked, API has been fetched!") : alert("button has been UNclicked")
      setButtonClicked(prev => !prev)
    }

    /* API call and setting state with info*/
    async function fetchMoonData() {
      const url = 'https://moon-phase.p.rapidapi.com/advanced?lat=51.4768&lon=-0.0004';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ea752ba19amshfb504aa314bebacp12ba6bjsn57d76cbdd911',
          'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com'
          }
        }
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const result = await response.text();
          const parsedData = (JSON.parse(result));
          const moonAge= parsedData.moon.age_days
          const moonRise = parsedData.moon.moonrise
          const phaseOfMoon = parsedData.moon.phase_name
          setMoonAge(moonAge)
          setMoonRise(moonRise)
          setPhaseOfMoon(phaseOfMoon)
          console.log(parsedData)
        }   catch (error) {
          console.error(error);
        }

      }
      useEffect(() => {
        fetchMoonData();
      }, [!buttonClicked]);
          
  
  return (
    <>
        <Navbar
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        
        <Button
          onClick={handleButtonClick}
          buttonClicked ={buttonClicked}
        />
        
            <LunarInfo
              darkMode={darkMode} 
              buttonClicked={buttonClicked}
              moonAge={moonAge}
              moonRise={moonRise}
              phaseOfMoon={phaseOfMoon}
            />

        <Footer/>
    </>
  )
}

export default App
