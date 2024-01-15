import React, { useEffect, useState } from "react"
import LoginContainerComponent from "./index.container"
import { useDispatch, useSelector } from "react-redux"
import { authenticate } from "../../../redux/actions/user-actions"
import { reducersUserType } from "./index.type"
import { useNavigate } from "react-router-dom"
const LoginComponentHelper = () => {
    const navigate = useNavigate()
    const [formvalues, setFormvalues] = useState({
        email: '',
        password: '',
    })
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((item: reducersUserType) => item?.user)

    const handleSubmit = async (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        setSubmit(true)

        if (formvalues.email, formvalues.password) {
            dispatch(await authenticate(formvalues))

        }
    }

    useEffect(() => {
    }, [user?.messageLoggedIn])
    useEffect(() => {
        if (user?.messageLoggedIn === 'User loggedin successfully') {
            localStorage.setItem('user', JSON.stringify(user?.userData))
            localStorage.setItem('token', user?.token)
        }
        if (localStorage.getItem('user')) {
            let data = JSON.parse(localStorage.getItem('user')!);
            if (data.role === "ADMIN") {
                navigate('/user')
            }
            if (data.role === "NORMAL") {
                navigate('/chat')
            }
        }
        if (user?.userData?._id && user?.userData?.role === "ADMIN") {
            navigate('/user')
        }
        if (user?.userData?._id && user?.userData?.role === "NORMAL") {
            navigate('/chat')
        }
    }, [user?.userData?._id])
    const changeValues = (id: string, event: React.SyntheticEvent<EventTarget>) => {

        setSubmit(false)
        setFormvalues({ ...formvalues, [id]: event })
    }

    return (<LoginContainerComponent
        handleSubmit={(e: React.SyntheticEvent<EventTarget>) => handleSubmit(e)}
        submit={submit}
        formvalues={formvalues}
        message ={user?.messageLoggedIn}
        changeValues={changeValues} />)
}
export default LoginComponentHelper