import "./lunarinfo.css"


const LunarInfo = ({phaseOfMoon, moonAge, moonRise, darkMode, buttonClicked}) => {

    /* LOGIC FOR SELECTING WHICH IMG SHOULD BE DISPLAYED ON API DATA */
    
    let todaysMoonImg = ""
    
    if (phaseOfMoon === "Full Moon") {
        todaysMoonImg = "./Images/Moon-phases/Full Moon.png"
    } else if (phaseOfMoon == "Waning Gibbous") {
        todaysMoonImg == "./Images/Moon-phases/Waning Gibbous.png"
    } else if (phaseOfMoon = "Third Quarter") {
        todaysMoonImg == "./Images/Moon-phases/Third Quarter.png"
    } else if (phaseOfMoon = "Waning Crescent") {
        todaysMoonImg == "./Images/Moon-phases/Waning Crescent.png"
    } else if (phaseOfMoon = "New Moon") {
        todaysMoonImg == "./Images/Moon-phases/New Moon.png"
    }else if (phaseOfMoon = "Waxing Crescent") {
        todaysMoonImg == "./Images/Moon-phases/Waxing Crescent.png"
    } else if (phaseOfMoon = "First Quarter") {
        todaysMoonImg == "./Images/Moon-phases/First Quarter.png"
    } else if (phaseOfMoon = "Waxing Gibbous") {
        todaysMoonImg == "./Images/Moon-phases/Waxing Gibbous.png"
    }
    



    return (
        <div>
            <div className= {!buttonClicked ? "landing" : "hide-landing"} >
                <img  src={darkMode ? "./Images/Moon-CyclesV2.png" : "./Images/sun-backgroundV2.jpg"} />
            </div>


            <div>
                <div className="current-moon">
                    <img src="./Images/GrayMoon.jpg" alt="" />
                </div>
                <h2>{/* {props.buttonClickedState ? "button clicked" : "button not clicked"} */} Moon {props.phaseOfMoon}</h2>
                <div className="moon-info">
                    <h3>Age of moon: {props.moonAge}</h3>
                    <h3>Time of rise: {props.moonRise}</h3>
                </div>
            </div>

            <div className= {!buttonClicked ? "hideinfo" : "showinfo"}>
                <h2>The current moon phase is: {phaseOfMoon}</h2>
                <img src={todaysMoonImg} />
                <div>
                    <h3>The moon is in day {moonAge} in its 29.5 day cycle</h3>
                    <h3>The moon will rise at {moonRise} today</h3>
                </div>
            </div>

        </div>
    )
}

export default LunarInfo