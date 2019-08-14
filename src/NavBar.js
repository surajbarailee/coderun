import React from "react"
import "./index.css"
import { Link, NavLink } from "react-router-dom"

const NavBarWrapper = {
    color: "white",
    backgroundColor: "black",
    display: "grid",
    gridTemplateColumns: "50px auto 50px",
    gridTemplateRows: "50px",
    alignItems: "center"
}
const NavBarLinks = {
    textAlign: "right",
    fontSize: "20px",
}
const NavBarWords = {
    textDecoration: "none",
    color: "white"
}
const NavWordsPadding = {
    paddingRight: "50px"
}
function NavBar() {
    return (
        <>
            <div style={NavBarWrapper}>
                <div>CodeRun</div>
                <div style={NavBarLinks}>
                    <label style={NavWordsPadding}><Link to="/" style={NavBarWords}> Home</Link></label>
                    <label style={NavWordsPadding}><Link to="/Contact" style={NavBarWords}>Contact</Link></label>
                    <label style={NavWordsPadding}><Link to="/Setting" style={NavBarWords} >Setting</Link></label>
                </div>
            </div>


        </>
    )
}



export default NavBar