import React from "react"
import { buttonType } from "./button.type"
import './style.css'
const Button = ({ handleSubmit , title}: buttonType) => {
    return (<button id="join-btn" name="join" onClick={(e) => handleSubmit(e)}>{title} </button>)
}
export default Button