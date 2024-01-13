import * as userApi from "../apis/user-apis"
import {userTypes} from "../constants/user-types"

export const authenticate = async (params: {email:string,password:string}) => {
    const response = await userApi.authenticate(params)
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