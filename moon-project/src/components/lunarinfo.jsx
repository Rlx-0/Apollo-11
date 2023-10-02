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

    const moonPhaseArray = ["Full Moon", "Waning Gibbous", "Third Quarter", "Waning Crescent", "New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous"]

    const reorderedPhases = []
    const reorderMoonPhases = () => {

    // Find the index of the current moon phase
    const currentIndex = moonPhaseArray.indexOf(phaseOfMoon);

    // Reorder the moon phases with the current phase at the top
    const reorderedPhases = [
        moonPhaseArray[currentIndex],
      ...moonPhaseArray.slice(currentIndex +1),
      ...moonPhaseArray.slice(0, currentIndex),
    ];

    return reorderedPhases;
  };

    const waxingGibbousText = "More moon is showing than shadow, while appearing to get larger"
    const waningGibbousText = "More moon is showing than shadow, while appearing to get smaller"
    const thirdQuarterText = "The moon is covered in shadow by 50%, while appearing to get smaller"
    const waningCrescentText = "More shadow is showing than the moon, while appearing to get smaller"
    const newMoonText = "The first stage of our moon's cycle, almost fully engulfed in shadow while appearing to get larger"
    const waxingCrescentText = "More shadow is showing than the moon, while appearing to get larger"
    const firstQuarterText = "The moon is covered in shadow by 50%, while appearing to get larger"
    const fullMoonText = "The moon is fully unveiled, like a spotlight on a stage, like a beacon amongst the stars, similar to a lighthouse in the ocean where the lighthouse is the moon and the ocean is outer space"

  
  

    console.log(reorderMoonPhases());

    
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
                            <h3>New Moon</h3>
                            <p>The first stage of our moon's cycle, almost fully engulfed in shadow while appearing to get larger</p>
                        </div>
                        <div className="boxes">
                            <h3>Waxing Crescent</h3>
                            <p>More shadow is showing than the moon, while appearing to get larger</p>
                        </div>
                        <div className="boxes">
                            <h3>First Quarter</h3>
                            <p>The moon is covered in shadow by 50%, while appearing to get larger</p>
                        </div>
                        <div className="boxes">
                            <h3>Waxing Gibbous</h3>
                            <p>More moon is showing than shadow, while appearing to get larger</p>
                        </div>
                        <div className="boxes">
                            <h3>Waning Gibbous</h3>
                            <p>More moon is showing than shadow, while appearing to get smaller</p>
                        </div>
                        <div className="boxes">
                            <h3>Third Quarter</h3>
                            <p>The moon is covered in shadow by 50%, while appearing to get smaller</p>
                        </div>
                        <div className="boxes">
                            <h3>Waning Crescent</h3>
                            <p>More shadow is showing than the moon, while appearing to get smaller</p>
                        </div>
                        <div className="boxes">
                            <h3>Full Moon</h3>
                            <p>The moon is fully unveiled, like a spotlight on a stage, like a beacon amongst the stars, similar to a lighthouse in the ocean where the lighthouse is the moon and the ocean is outer space</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LunarInfo

/* switch(expression) {
    case "New moon":    
    // code block     
    break;   
    case "Waxing Crescent":     
    // code block     
    break; 
    case "First Quarter":     
    // code block     
    break;   
    case "Waxing Gibbous":     
    // code block     
    break; 
    case "Waning Gibbous":     
    // code block     
    break;   
    case "Third Quarter":     
    // code block     
    break; 
    case "Waning Crescent":     
    // code block     
    break;   
    default:     
    // code block
} */






