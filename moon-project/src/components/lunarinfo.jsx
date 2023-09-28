import "./lunarinfo.css"


const LunarInfo = (props) => {
    return (
        <div>
            <div className= {props.buttonClickedState ? "landing" : "hide-landing"} >
                <img  src={props.darkMode ? "./Images/Moon-CyclesV2.png" : "./Images/sun-backgroundV2.jpg"} />
            </div>

            <div>
                <h2>{props.buttonClickedState ? "button clicked" : "button not clicked"} {props.phaseOfMoon}</h2>
                <div>
                    <h3>{props.moonAge}</h3>
                    <h3>{props.moonRise}</h3>
                </div>
            </div>

        </div>
    )
}

export default LunarInfo