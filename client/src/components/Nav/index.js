import React from "react"
import draglogo from "../../images/dragonlogo.png"
import "./Nav.css"

function Nav() {
    return (
        <nav className="navbar">
            <div>
                <div href="/" className="container-fluid d-flex">
                    <img src={draglogo} alt="Dragon Logo for DnD" className="d-inline-block align-text-top h1" width="50px" href="/"/> 
                    <span className="title-App h1 d-flex align-items-center m-2 nav-brand">Name of the App</span>
                </div>
                <div className="d-flex ">
                    <a href="/" className="nav-link active">
                        Home
                    </a>
                    <a href="/collections" className="nav-link">
                        Collections
                    </a>
                    <a href="/encounter" className="nav-link">
                        Encounter
                    </a>
                    <a href="/upload" className="nav-link">
                        Upload
                    </a>
                    <a href="/login" className="nav-link">
                        Login
                    </a>
                    
                </div>

            </div>

        </nav>


    )
}



export default Nav