import React from "react"
import './style.css'
import { inputComponentType } from "./input.type"
import { Form, InputGroup, Col } from "react-bootstrap"
const Input = ({ submit, value, changeValues, title, type, name, min , required }: inputComponentType) => {
  
  return (<>
    <Form.Group controlId="validationCustomUsername">
      <Form.Label>{name}</Form.Label>
    
      
      <InputGroup hasValidation>
        <Form.Control
          type={type}
          min={min}
          placeholder={name}
          aria-describedby="inputGroupPrepend"
          required={required}
          onChange={(e) => changeValues(title, e.target.value)}
          value={value}
          // isInvalid={(!(value.length >= min)) || (submit)}
          className="inputFields" />
        <br />
      </InputGroup>
      { !(value?.length >= min) && <span className="error">{name} must be atleast {min} characters<br/></span>}
      {submit && !value && <span className="error">Please select valid {name}</span>}

    </Form.Group>
  </>

  )
}
export default Input
