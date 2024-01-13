import React from "react"
import './style.css'
import { inputComponentType } from "./input.type"
const Input = ({ submit, value, changeValues, title, type }: inputComponentType) => {
    return (<>
        <label ></label>
        <input type={type} className="inputFields" placeholder={title} required={submit} value={value} onChange={(e) => changeValues(title, e.target.value)} /><br/>
        { submit && !value && <span className="error">Please select valid {title}</span> }
    </>

    )
}
export default Input
