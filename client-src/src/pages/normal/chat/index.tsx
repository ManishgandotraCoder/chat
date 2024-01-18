import React, { useEffect } from "react"
import ChatContainer from "./index.container"
import { useDispatch, useSelector } from "react-redux"
import { getGroups } from "../../../redux/actions/group-actions"
const ChatComponent = () => {
    const group = useSelector((item:any) => item.group)
    const dispatch = useDispatch()
    const getGroupData = async (e:any) => {
        dispatch(await getGroups(e))
    }
   
    useEffect(() => {
        getGroupData('')
    },[])
    return (<ChatContainer accordianList ={group.groupList} callGroups={getGroupData}/>)
}
export default ChatComponent