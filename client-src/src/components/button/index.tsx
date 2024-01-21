import React from "react"
import { buttonType } from "./button.type"
import './style.css'
import { Button } from "react-bootstrap"
const ButtonComponent = ({ handleSubmit, title, theme }: buttonType) => {
    return (
        <button className="button_main" type="button" onClick={(e) => handleSubmit(e)}>{title}</button>
    )
}
export default ButtonComponent


{/* <Button variant={theme} onClick={(e) => handleSubmit(e)}>{title}</Button> */ }