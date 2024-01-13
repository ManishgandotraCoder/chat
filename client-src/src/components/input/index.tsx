import React from "react"
import './style.css'
import { inputComponentType } from "./input.type"
import { Form, InputGroup, Col } from "react-bootstrap"
const Input = ({ submit, value, changeValues, title, type, name, }: inputComponentType) => {
  return (<>
    <Form.Group controlId="validationCustomUsername">
      <Form.Label>{name}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          type={type}
          placeholder={name}
          aria-describedby="inputGroupPrepend"
          required={submit}
          onChange={(e) => changeValues(title, e.target.value)}
          value={value}
          className="inputFields" />
         <br/>
      </InputGroup>
      {submit && !value && <span className="error">Please select valid {name}</span>}
    </Form.Group>
  </>

  )
}
export default Input
