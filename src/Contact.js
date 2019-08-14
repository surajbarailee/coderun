import React from "react"
const formWrapper = {

    display: "grid",
    width: "50%",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(2,35px)",
    margin: "0 auto",
    gridGap: "20px",
    padding: "20px 10px 2px 10px",
}
const FormField = {
    width: "100%",
    height: "100%",
    border: "2px solid black",
    fontSize: "25px"
}
const TextArea = {

    gridTemplateRows: "100px",
}
const FormMessage = {
    width: "100%",
    border: "2px solid black",
    fontSize: "25px"

}
function Contact() {
    return (
        <>
            <div style={{ textAlign: "center", fontSize: "25px" }}>
                <p> Any Suggestions, Errors or just a passing by hello anything will be appriciated:<br />😄😄😄</p>
            </div>
            <form method="POST" action="https://formspree.io/baraileesuraj@gmail.com">
                <div style={formWrapper}>
                    <div><input type="text" placeholder="First Name*" name="First Name" style={FormField} required /></div>
                    <div><input type="text" placeholder="Last Name" name="Last Name" style={FormField} /></div>
                    <div><input type="email" placeholder="Email*" name="Email" style={FormField} required /></div>
                    <div><input type="text" placeholder="Subject*" name="Subject" style={FormField} required /></div>
                    <div style={TextArea}><textarea rows="10" name="Message*" style={FormMessage} placeholder="Message" required /></div>
                </div>
                <div style={{ textAlign: "center", padding: "10px" }}><button style={{ fontSize: "25px", backgroundColor: "black", color: "white" }}>Send </button>
                </div>
            </form>


        </>
    )
}
export default Contact