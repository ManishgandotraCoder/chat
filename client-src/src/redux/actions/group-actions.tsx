import * as groupApi from "../apis/group-apis"
import {groupTypes} from "../constants/group-types"

export const getGroups = async () => {
    const response :any= await groupApi.getGroups()
    return {
        type: groupTypes.GET_GROUP,
        payload: response?.data
    }
}
