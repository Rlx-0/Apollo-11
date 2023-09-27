import "./lunarinfo.css"


const LunarInfo = (props) => {
    return (
    
        <div className="background">
            <img src={props.darkMode ? "./Images/Moon-CyclesV2.png" : "./Images/sun-backgroundV2.jpg"} />
        </div>
    )
}

export default LunarInfo