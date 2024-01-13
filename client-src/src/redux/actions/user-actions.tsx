import * as userApi from "../apis/user-apis"
import {userTypes} from "../constants/user-types"

export const authenticate = async (params: {email:string,password:string}) => {
    const response :any= await userApi.authenticate(params)
    return {
        type: userTypes.AUTHENTICATE,
        payload: response?.data
    }
}

export const logout = async () => {
    return {
        type: userTypes.RESET_STORE,
    }
}

export const listUser = async () => {
    const response = await userApi.listUser()
    return {
        type: userTypes.LIST_USER,
        payload: response
    }
}