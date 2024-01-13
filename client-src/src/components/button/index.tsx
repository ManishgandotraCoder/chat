import React from "react"
import { buttonType } from "./button.type"
import './style.css'
import { Button } from "react-bootstrap"
const ButtonComponent = ({ handleSubmit, title ,theme}: buttonType) => {
    return (
        <Button variant={theme} onClick={(e) => handleSubmit(e)}>{title}</Button>
    )
}
export default ButtonComponent
