import React, { useEffect } from "react"
import ChatContainerHelper from "./index.container"
import { useDispatch, useSelector } from "react-redux"
import { getGroups } from "../../../redux/actions/group-actions"
const ChatComponent = () => {
    const group = useSelector((item:any) => item.group)
    console.log(group);
    
    const dispatch = useDispatch()
    const getGroupData = async () => {
        dispatch(await getGroups())
    }
    useEffect(() => {
        getGroupData()
    },[])
    const changeValues = () => {
        
    }
    return (<ChatContainerHelper changeValues={changeValues} accordianList ={group.groupList} />)
}
export default ChatComponent