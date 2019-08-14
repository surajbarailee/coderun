import React, { useContext } from "react"

import List from "./test.json"
import "../src/index.css"
import { IdContext } from "./IdContext"
function BodyTitle() {
    const linktitle = {

        margin: "5px",

        border: "none",
        fontSize: "25px",
        paddingBottom: "5px"

    }
    const linktitleactive = {

        textDecoration: "underline",
        cursor: "pointer",
        margin: "5px",
        border: "none",
        fontSize: "25px",
        paddingBottom: "5px"

    }
    var [Id, SetId] = useContext(IdContext);
    const onClickHandler = (value) => {
        SetId(Id = parseInt(`${value}`))
    }

    return (
        <div>

            {List.map((ListDetails, key) => {
                return (
                    <div key={ListDetails.id}>
                        <a style={Id === ListDetails.id ? linktitleactive : linktitle} onClick={() => onClickHandler(ListDetails.id)}>{ListDetails.title}</a>
                    </div>
                )
            })}
        </div>
    )
}



export default BodyTitle



{/* <Route path="/BodyMain/:username" component={BodyMain} />{ListDetails.title} */ }