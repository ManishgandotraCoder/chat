import React from "react"
import './style.css'
import { inputComponentType } from "./input.type"
const Input = ({ submit, value, changeValues, title, type, name,  }: inputComponentType) => {
    return (<>
        <label ></label>
        <input type={type} className="inputFields" placeholder={name} required={submit} value={value} onChange={(e) => changeValues(title, e.target.value)} /><br/>
        { submit && !value && <span className="error">Please select valid {name}</span> }
    </>

    )
}
export default Input
