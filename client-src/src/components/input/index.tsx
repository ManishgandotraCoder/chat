import React from "react"
import './style.css'
import { inputComponentType } from "./input.type"
import { Form, InputGroup, Col } from "react-bootstrap"
const Input = ({ submit, value, changeValues, title, type, name, min , required, disabled }: inputComponentType) => {
  
  return (<>
    <Form.Group controlId="validationCustomUsername">
      <Form.Label>{name}</Form.Label>
    
      
      <InputGroup hasValidation>
        <Form.Control
          type={type}
          min={min}
          disabled={disabled}
          placeholder={name}
          aria-describedby="inputGroupPrepend"
          required={submit && required}
          onChange={(e) => changeValues(title, e.target.value)}
          value={value}
          // isInvalid={(!(value.length >= min)) || (submit)}
          className="inputFields" />
        <br />
      </InputGroup>
      { submit && !(value?.length >= min) && <span className="error">{name} must be atleast {min} characters<br/></span>}
      {submit && !value && <span className="error">Please select valid {name}</span>}

    </Form.Group>
  </>

  )
}
export default Input
