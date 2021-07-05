import React from "react"
import draglogo from "../../images/dragonlogo.png"
import "./Nav.css"

function Nav() {

    
    
    return (
        <>
            <nav className="navbar">
                <div className= "w-100">
                    <div href="/" className="container-fluid d-flex topHeader w-100 p-3">
                        <img src={draglogo} alt="Dragon Logo for DnD" className="d-inline-block align-text-top h1" width="50px" href="/" />
                        <span className="title-App h1 d-flex align-items-center m-2 nav-brand strong">D&D Map Finder</span>
                    </div>
                    <div className="d-flex bg-secondary rounded overflow-hidden d-flex justify-content-around">
                        <a href="/" className="nav-link active bg-secondary rounded  text-white" >
                            Home
                        </a>
                        {/* <a href="/collections" className="nav-link">
                        Collections
                    </a> */}
                        <a href="/encounter" className="nav-link active bg-secondary rounded  text-white" >
                            Encounter
                        </a>
                        <a href="/upload" className="nav-link active bg-secondary rounded  text-white" >
                            Upload
                        </a>
                        <a href="/login" className="nav-link active bg-secondary rounded  text-white" >
                            Login
                        </a>
                    </div>
                </div>
            </nav>
        </>

    )
}



export default Nav