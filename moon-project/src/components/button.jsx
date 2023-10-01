import "./button.css"

const Button = (props) => {

    return (
    <div>
        <button className="moonbtn" onClick={props.onClick}>Moon</button>
    </div>
    )
}


export default Button