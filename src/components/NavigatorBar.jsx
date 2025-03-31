import React from "react";
import {Link} from "react-router-dom"

const NavigatorBar = () => {
    
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
            <img 
                className="main-nav-logo-image" 
                src="./img/argentBankLogo.png" 
                alt= "ArgentBank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>    
            </Link>
            <div>
                <Link className="main-nav-item" to="/signup">
                <i className="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
        </nav>
    )
}

export default NavigatorBar;