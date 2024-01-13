import React, { useEffect, useState } from "react"
import LoginContainerComponent from "./index.container"
import { useDispatch, useSelector } from "react-redux"
import { authenticate } from "../../../redux/actions/user-actions"
import { reducersUserType } from "./index.type"
import { useNavigate } from "react-router-dom"
const CurrencyconvertorComponentHelper = () => {
    const navigate = useNavigate()
    const [formvalues, setFormvalues] = useState({
        email: '',
        password: '',
    })
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((item: reducersUserType) => item?.user?.userData)

    const handleSubmit = async (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        setSubmit(true)
        console.log("formvalues", formvalues);
        
        if (formvalues.email, formvalues.password) {
            dispatch(await authenticate(formvalues))
        }
    }
    useEffect(() => {
        if (user?.token && user?.token !== 'undefined'){
            localStorage.setItem('user', JSON.stringify(user?.user))
            localStorage.setItem('token',user?.token)
        }
        
        if (user?.user?._id && user?.user?.role === "ADMIN") {
            navigate('/user')
        }
        if (user?.user?._id && user?.user?.role === "NORMAL") {
            navigate('/chat')
        }
    }, [user?.user?._id])
    const changeValues = (id: string, event: React.SyntheticEvent<EventTarget>) => {

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