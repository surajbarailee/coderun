import React, { useContext } from "react"

import List from "./test.json"
import "../src/index.css"
import { IdContext } from "./IdContext"
const linktitle = {
    margin: "5px",
    border: "none",
    fontSize: "25px",
    paddingBottom: "5px",
    paddingRight: "5px"

}
const linktitleactive = {

    textDecoration: "underline",
    cursor: "pointer",
    margin: "5px",
    border: "none",
    fontSize: "25px",
    paddingBottom: "5px"

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
                    <div key={ListDetails.id}>
                        <span id="anchorspan" style={Id === ListDetails.id ? linktitleactive : linktitle} onClick={() => onClickHandler(ListDetails.id)} href="#">{ListDetails.title}</span>
                    </div>
                )
            })}
        </div>
    )
}
export default BodyTitle
