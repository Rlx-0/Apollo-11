import "./navbar.css"

const Navbar = () => {
    return (
    
        <nav>
            <img 
                className="nav--logo_icon"
            />
            <h3 className="nav--logo_text">Moon Facts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>

    )
}

export default Navbar 