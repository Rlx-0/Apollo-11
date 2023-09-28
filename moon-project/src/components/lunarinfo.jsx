import "./lunarinfo.css"


const LunarInfo = ({phaseOfMoon, moonAge, moonRise, darkMode, buttonClicked}) => {

    /* LOGIC FOR SELECTING WHICH IMG SHOULD BE DISPLAYED ON API DATA
    
    const todaysMoonImgSrc = ""
    if (phaseOfMoon == "Full Moon") {
        todaysMoonImgSrc == #fullmoonpic#
    } else if (phaseOfMoon == "Waning Gibbous" {
        todaysMoonImgSrc == #waninggibbouspic#
    } else if (phaseOfMoon == "Third Quarter" {
        todaysMoonImgSrc == #thirdquarterpic#
    } else if (phaseOfMoon == "Waning Crescent" {
        todaysMoonImgSrc == #waningcrescentpic#
    } else if (phaseOfMoon == "New Moon" {
        todaysMoonImgSrc == #newmoonpic#
    }else if (phaseOfMoon == "Waxing Crescent" {
        todaysMoonImgSrc == #waxingCrescentPic#
    } else if (phaseOfMoon == "First Quarter" {
        todaysMoonImgSrc == #firstquarterpic#
    } else if (phaseOfMoon == "Waxing Gibbous" {
        todaysMoonImgSrc == #waxinggibbouspic#
    }
    */


    return (
        <div>
            <div className= {!buttonClicked ? "landing" : "hide-landing"} >
                <img  src={darkMode ? "./Images/Moon-CyclesV2.png" : "./Images/sun-backgroundV2.jpg"} />
            </div>

            <div className= {!buttonClicked ? "hideinfo" : "showinfo"}>
                <h2> {phaseOfMoon}</h2>
                <div>
                    <h3>{moonAge}</h3>
                    <h3>{moonRise}</h3>
                </div>
            </div>

        </div>
    )
}

export default LunarInfo