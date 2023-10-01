import "./lunarinfo.css"


const LunarInfo = (props) => {
    return (
        <div>
            <div className= {props.buttonClickedState ? "landing" : "hide-landing"} >
                <img  src={props.darkMode ? "./Images/Moon-CyclesV2.png" : "./Images/sun-backgroundV2.jpg"} />
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

        </div>
    )
}

export default LunarInfo