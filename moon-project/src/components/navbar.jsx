import "./navbar.css"

const Navbar = (props) => {
    return (
    
        <nav
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
            />
            {/* switch between logos  */}
            <h3 className={props.darkMode ? "nav--dark--logo_text" : "nav--light--logo_text"}> {props.darkMode ? "Moon Facts" : "Sun Cycle"}</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>

    )
}

export default Navbar 