import React from "react"
import BodyTitle from "./BodyTitle.js"
import BodyMain from "./BodyMain"

const MainBodyWrapper = {
    display: "grid",
    gridTemplateColumns: "minmax(0,300px) minmax(500px,auto) minmax(0px,250px)",
    padding: "10px",
    minHeight: "100vh"

}

function Body() {

    return (

        <div style={MainBodyWrapper}>

            <div>
                <BodyTitle />
            </div>



            <div>

                <BodyMain />
            </div>

            <div>Hello from the body-right part</div>

        </div>


    )
}
export default Body


// {List.map((ListDetails, index) => {
//     return (
//         <>
//             <h1>
//                 {ListDetails.Question}
//             </h1>
//             <pre>
//                 {ListDetails.Answer}
//             </pre>
//         </>
//     )
// })}