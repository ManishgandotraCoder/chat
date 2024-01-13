import React, { useEffect, useReducer } from "react"
import { listUser } from "../../../redux/actions/user-actions"
import { useDispatch, useSelector } from "react-redux";
import { reducersUserType } from "../../common/login/index.type";
const ListUserComponentHelper = React.lazy(() => import("./index.container"));
const ListUserComponent = () => {
    const dispatch = useDispatch()
    const user = useSelector((item: reducersUserType) => item.user)
    
    const getListOfusers = async () => {
        dispatch(await listUser())
    }
    useEffect(() => {
        getListOfusers()
    }, [])
    return (<ListUserComponentHelper list={user.userList.data}/>)
}
export default ListUserComponent