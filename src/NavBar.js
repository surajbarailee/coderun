import React, { useContext } from "react"
import "./index.css"

import { NavLink } from "react-router-dom"
import { IdContext } from "./IdContext"

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
    var [Id, SetId] = useContext(IdContext);
    const onClickHandler = (value) => {
        SetId(Id = 0)
        console.log("clicked", Id)
    }
    return (
        <>

            <div style={NavBarWrapper}>
                <div>CodeRun</div>
                <div style={NavBarLinks}>
                    <label style={NavWordsPadding}><NavLink to="/" style={NavBarWords} onClick={() => onClickHandler()}> Home</NavLink></label>
                    <label style={NavWordsPadding}><NavLink to="/Contact" style={NavBarWords}>Contact</NavLink></label>

                </div>
            </div>



        </>
    )
}



export default NavBar