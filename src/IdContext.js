import React, { useState, createContext } from "react";

export const IdContext = createContext();
export const IdProvider = (props) => {
    var [Id, setId] = useState(0);
    return (
        <IdContext.Provider value={[Id, setId]}>
            {props.children}
        </IdContext.Provider>

    );
}











