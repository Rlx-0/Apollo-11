import "./box.css"

const Box = () => {
    return (
    <div className="Box">
        <div>
            <h3>Waxing</h3>
            <p>The moon is appearing to get larger</p>
        </div>
        <div>
            <h3>Waning</h3>
            <p>The moon is appearing to get smaller</p>
        </div>
        <div>
            <h3>Crescent</h3>
            <p>More shadow is showing than the moon</p>
        </div>
        <div>
            <h3>Gibbous</h3>
            <p>More moon is showing than the shadow</p>
        </div>
    </div>
    )
}

export default Box