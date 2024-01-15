import React, { useEffect, useState } from "react"
import EditUserHelperComponent from "./index.container"
import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../../../redux/actions/user-actions"
import { useNavigate, useParams } from "react-router-dom"
const EditUserComponent = () => {
    const user = useSelector((item: any) => (item.user))
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [formvalues, setFormvalues] = useState({
        email: '',
        password: '',
        firstName: "",
        lastName: "",
        phone: "",
        confirmPassword: ""
    })
    useEffect(() => {
        setMessage(user.createMessage)
        if (user.createMessage === 'User Created successfully') {
            navigate('/user')
        }
    }, [user.createMessage])
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = async (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        setSubmit(true)
        if (formvalues.confirmPassword !== formvalues.password) {
            setMessage('Confirm password and passport must be same')
        }
        if (formvalues.email &&
            formvalues.password &&
            formvalues.firstName &&
            formvalues.lastName &&
            formvalues.confirmPassword === formvalues.password &&
            formvalues.phone) {
            dispatch(await createUser(formvalues))
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
        message={message}
        handleSubmit2={(e: React.SyntheticEvent<EventTarget>) => handleSubmit2(e)}
        formvalues={formvalues}
        changeValues={changeValues} />)
}
export default EditUserComponent