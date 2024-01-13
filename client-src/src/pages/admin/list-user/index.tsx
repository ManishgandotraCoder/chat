import React, { useEffect, useReducer } from "react"
import { listUser } from "../../../redux/actions/user-actions"
import { useDispatch, useSelector } from "react-redux";
import { reducersUserType } from "../../common/login/index.type";
import { useNavigate } from "react-router-dom";
const ListUserComponentHelper = React.lazy(() => import("./index.container"));
const ListUserComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((item: reducersUserType) => item.user)

    const getListOfusers = async () => {
        dispatch(await listUser())
    }
    const handleSubmit = () => {
        navigate('/user/create')
    }
    useEffect(() => {
        getListOfusers()
    }, [])
    return (<ListUserComponentHelper list={user.userList.data} handleSubmit={() => handleSubmit()} />)
}
export default ListUserComponent