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
        <div className="page">
            <div className= {!buttonClicked ? "landing" : "hide-landing"} >
                <img  src={darkMode ? "./Images/Moon-CyclesV2.png" : "./Images/sun-backgroundV2.jpg"} />
            </div>

            <div className= {!buttonClicked ? "hideinfo" : "showinfo"}>
                <div className="page2">
                    <h2>The current moon phase is: {phaseOfMoon}</h2>
                    <img src={todaysMoonImg} />
                    <div>
                        <h3>The moon is in day {moonAge} in its 29.5 day cycle</h3>
                        <h3>The moon will rise at {moonRise} today</h3>
                    </div>

                    <div className= {!buttonClicked ? "hidebox" : "showbox"}>
                        <div className="boxes boxes2">
                            <h3>Waxing</h3>
                            <p>The moon is appearing to get larger</p>
                        </div>
                        <div className="boxes">
                            <h3>Waning</h3>
                            <p>The moon is appearing to get smaller</p>
                        </div>
                        <div className="boxes">
                            <h3>Crescent</h3>
                            <p>More shadow is showing than the moon</p>
                        </div>
                        <div className="boxes">
                            <h3>Gibbous</h3>
                            <p>More moon is showing than the shadow</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LunarInfo