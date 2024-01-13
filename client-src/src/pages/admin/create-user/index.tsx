import React, { useEffect, useState } from "react"
import EditUserHelperComponent from "./index.container"
import { useDispatch, useSelector } from "react-redux"
import { createUser} from "../../../redux/actions/user-actions"
import { useNavigate, useParams } from "react-router-dom"
const EditUserComponent = () => {
    const navigate = useNavigate()

    const [formvalues, setFormvalues] = useState({
        email: '',
        password: '',
        firstName: "",
        lastName: "",
        phone: "",
        confirmPassword:""
    })
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = async (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        setSubmit(true)
        if (formvalues.email &&
            formvalues.password &&
            formvalues.firstName &&
            formvalues.lastName &&
            formvalues.confirmPassword &&
            formvalues.phone) {
                dispatch(await createUser(formvalues))
                navigate('/user')
            }
    }
    const handleSubmit2 = async (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        navigate('/user')
    }
   
    const changeValues = (id: string, event: React.SyntheticEvent<EventTarget>) => {

        setSubmit(false)
        setFormvalues({ ...formvalues, [id]: event })
    }

    return (<EditUserHelperComponent
        handleSubmit={(e: React.SyntheticEvent<EventTarget>) => handleSubmit(e)}
        submit={submit}
        handleSubmit2={(e: React.SyntheticEvent<EventTarget>) => handleSubmit2(e)}
        formvalues={formvalues}
        changeValues={changeValues} />)
}
export default EditUserComponent