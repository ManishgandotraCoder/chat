import React, { useEffect } from "react"
import ViewGroupContainer from "./index-container"
import { useParams, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getGroupById,getGroups, nonGroupMembers , updateGroup } from "../../../redux/actions/group-actions";
const ViewGroup = ({callGroups}:{callGroups: Function}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useSelector((info: any) => info.group)
  let groupId: any = searchParams.get('id')

  const dispatch = useDispatch()
  const getData = async () => {
    dispatch(await getGroupById(groupId))
    dispatch(await nonGroupMembers(groupId))
    // dispatch(await getGroups())
  }
  const updateMembers = async (type: string, ID: string) => {
    dispatch(await updateGroup(groupId, type, ID));
    dispatch(await getGroupById(groupId))
    dispatch(await nonGroupMembers(groupId))
    callGroups()
}

  useEffect(() => {
    getData()
  }, [searchParams.get('id')])
  return (<ViewGroupContainer groupMembers = {data.groupInfo.members  } nongroupMembers = {data.membersList} updateMembers ={updateMembers}/>)
}
export default ViewGroup