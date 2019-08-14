import React from "react"
import "./index.css"

const FooterWrap = {
    display: "grid",
    gridTemplateColumn: "1fr",
    backgroundColor: "black",
    fontSize: "20px",
    color: "white",
    textAlign: "center",

    position: "absolute",
    width: "100%"

}

function Footer() {

    var date = new Date().getFullYear()

    return (

        <div style={FooterWrap}>
            &copy; {date}<br />
            <label style={{ color: "white" }}>CodeRun.com</label>
        </div>

    )

}
export default Footer