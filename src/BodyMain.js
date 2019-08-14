import React, { useContext } from "react"
import List from "./test.json"
import { IdContext } from "./IdContext"
const bodycss = {
    fontSize: "25px",
}

function BodyMain() {
    const [Id] = useContext(IdContext);
    if (Id === 0) {
        return (<div>Hello code Home page</div>)
    }
    var text = List.map((Postdetail, index) => {
        if (Postdetail.id === Id) {
            return (
                <div style={bodycss}>
                    <p>{Postdetail.title}</p>
                    <p>Question:<br></br>{Postdetail.question}</p><br />
                    Question Link:<a href="https://codility.com" target="_blank"> Codility</a>
                    <h2>Solution</h2>
                    code:<input type="color" value="green" /> background:<input type="color" value="white" />
                    <div style={{ backgroundColor: "#e6e6e6", padding: "10px 50px" }}><pre>{Postdetail.answer}</pre></div>
                </div>
            )
        }
    })
    return (


        <div>{text}</div>

    )

}
export default BodyMain