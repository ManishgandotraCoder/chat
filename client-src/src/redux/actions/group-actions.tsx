import * as groupApi from "../apis/group-apis"
import { groupTypes } from "../constants/group-types"

export const getGroups = async (search:string) => {
    const response: any = await groupApi.getGroups(search)
    return {
        type: groupTypes.GET_GROUP,
        payload: response?.data
    }
}
export const getGroupById = async (id: string) => {
    const response: any = await groupApi.getGroupById(id)
    return {
        type: groupTypes.GET_GROUP_BY_ID,
        payload: response?.data
    }
}
export const nonGroupMembers = async (id: string) => {
    const response: any = await groupApi.nonGroupMembers(id)
    return {
        type: groupTypes.NON_GROUP_MEMBERS,
        payload: response?.data
    }
}
export const updateGroup = async (groupId: string,type: string, id: string) => {
    const response: any = await groupApi.updateGroup(groupId,type, id)
    return {
        type: groupTypes.UPDATE_GROUP,
        payload: response?.data
    }
}
export const saveGroupInfo = async (name: string) => {
    const response: any = await groupApi.saveGroup(name)
    return {
        type: groupTypes.SAVE_GROUP,
        payload: response?.data
    }
}
export const deleteGroup = async (groupId: string) => {
    const response: any = await groupApi.deleteGroup(groupId)
    return {
        type: groupTypes.UPDATE_GROUP,
        payload: response?.data
    }
}