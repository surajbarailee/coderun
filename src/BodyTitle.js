import React, { useContext } from "react"

import List from "./test.json"
import "../src/index.css"
import { IdContext } from "./IdContext"
const linktitle = {
    border: "none",
    fontSize: "20px",
    paddingRight: "50px",
}

const linktitleactive = {
    border: "5px solid black",
    cursor: "pointer",
    border: "none",
    fontSize: "25px",
    backgroundColor: "#ebebeb"
}
const wrapper = {
    paddingTop: "100px",
}

function BodyTitle() {

    var [Id, SetId] = useContext(IdContext);
    const onClickHandler = (value) => {
        SetId(Id = parseInt(`${value}`))
    }

    return (
        <div style={wrapper}>
            {List.map((ListDetails, key) => {
                return (
                    <div key={ListDetails.id} style={Id === ListDetails.id ? linktitleactive : linktitle} id="anchorspan">
                        <span onClick={() => onClickHandler(ListDetails.id)} >{ListDetails.title}</span>
                    </div>
                )
            })}
        </div>
    )
}
export default BodyTitle
