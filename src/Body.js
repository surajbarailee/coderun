import React, { useState } from "react"
import BodyTitle from "./BodyTitle.js"
import BodyMain from "./BodyMain"
import { IdProvider } from "./IdContext"
const MainBodyWrapper = {
    display: "grid",
    gridTemplateColumns: "minmax(0,300px) minmax(500px,auto) minmax(0px,250px)",
    padding: "10px",
    minHeight: "100vh"

}

function Body() {

    return (

        <div style={MainBodyWrapper}>
            <IdProvider>
                <div>
                    <BodyTitle />
                </div>
                {/* This is a Left Navigation part */}

                {/* This is the body part */}
                <div>
                    {/* <BodyMain /> */}
                    <BodyMain />
                </div>
                {/* This is the third part */}
                <div>Hello from the body-right part</div>
            </IdProvider>
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