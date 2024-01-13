import React, { useEffect, useState } from "react"
import EditUserHelperComponent from "./index.container"
import { useDispatch, useSelector } from "react-redux"
import { getUserById , editUser} from "../../../redux/actions/user-actions"
import { useNavigate, useParams } from "react-router-dom"
import { reducersUserType } from "../../common/login/index.type"
const EditUserComponent = () => {
    const navigate = useNavigate()
    const params = useParams()
    let ids: any = params.id
    const [formvalues, setFormvalues] = useState({
        email: '',
        password: '',
        firstName: "",
        lastName: "",
        phone: ""
    })
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((item: reducersUserType) => item?.user)

    const handleSubmit = async (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        setSubmit(true)
        if (formvalues.email &&
            formvalues.password &&
            formvalues.firstName &&
            formvalues.lastName &&
            formvalues.phone) {
                dispatch(await editUser(ids, formvalues))
                navigate('/user')
            }
    }
    const handleSubmit2 = async (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        navigate('/user')
    }
    const getData = async () => {
        dispatch(await getUserById(ids))
    }
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        setFormvalues({
            firstName: user?.profileInfo?.firstName,
            lastName: user?.profileInfo?.lastName,
            email: user?.profileInfo?.email,
            phone: user?.profileInfo?.phone,
            password: ''
        })
    }, [user?.profileInfo])
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