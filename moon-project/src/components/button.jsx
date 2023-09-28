import "./button.css"

const Button = (props) => {

    return (
    <div className="moonbtn">
        <button onClick={props.onClick}>Moon</button>
    </div>
    )
}


export default Button