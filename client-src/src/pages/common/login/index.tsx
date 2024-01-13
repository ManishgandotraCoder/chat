import React, { useState } from "react"
import LoginContainerComponent from "./index.container"
import { useDispatch } from "react-redux"
import { authenticate } from "../../../redux/actions/user-actions"
const CurrencyconvertorComponentHelper = () => {
    const [formvalues, setFormvalues] = useState({
        Email: '',
        Password: '',
    })
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = async (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        setSubmit(true)
        console.log(formvalues)
        if (formvalues.Email, formvalues.Password) {
            dispatch(await authenticate(formvalues))
        }
    }
    const changeValues = (id: string, event: React.SyntheticEvent<EventTarget>) => {
        console.log({ ...formvalues, [id]: event });
        
        setSubmit(false)
        setFormvalues({ ...formvalues, [id]: event })
    }

    return (<LoginContainerComponent 
        handleSubmit={(e: React.SyntheticEvent<EventTarget>) => handleSubmit(e)}
        submit={submit}
        formvalues={formvalues}
        changeValues={changeValues} />)
}
export default CurrencyconvertorComponentHelper