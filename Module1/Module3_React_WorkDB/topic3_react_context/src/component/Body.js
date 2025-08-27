import React from "react"
import "../App.css"
import { themConT} from "./Context";
import {useContext} from 'react'
function Body(){
    const context = useContext(themConT)
    return(
        <p className={context.theme}>New Paragrah</p>
    )
}
export default Body;