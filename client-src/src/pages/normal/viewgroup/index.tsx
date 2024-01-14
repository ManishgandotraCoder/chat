import React, { useEffect } from "react"
import ViewGroupContainer from "./index-container"
import { useParams, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getGroupById, nonGroupMembers } from "../../../redux/actions/group-actions";
const ViewGroup = ({ heading }: { heading: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useSelector((info: any) => info.group)

  const dispatch = useDispatch()
  const getData = async () => {
    let groupId: any = searchParams.get('id')
    dispatch(await getGroupById(groupId))
    dispatch(await nonGroupMembers(groupId))
  }
  useEffect(() => {
    getData()
  }, [searchParams.get('id')])
  return (<ViewGroupContainer heading={heading} groupMembers = {data.groupInfo.members  } nongroupMembers = {data.membersList}/>)
}
export default ViewGroup