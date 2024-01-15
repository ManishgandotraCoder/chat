import * as userApi from "../apis/user-apis"
import {userTypes} from "../constants/user-types"

export const authenticate = async (params: {email:string,password:string}) => {
    const response :any= await userApi.authenticate(params)
    return {
        type: userTypes.AUTHENTICATE,
        payload: response
    }
}

export const logoutChats = async () => {
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

export const getUserById = async (id:string) => {
    const response = await userApi.getUserById(id)
    return {
        type: userTypes.GET_USER_BY_ID,
        payload: response
    }
}

export const editUser = async (id:string, params :{email:string,password:string,firstName:string, lastName:string, phone:string}) => {
    const response = await userApi.editUser(id, params)
    return {
        type: userTypes.EDIT_USER,
        payload: response
    }
}

export const createUser = async (params :{email:string,password:string,firstName:string, lastName:string, phone:string}) => {
    const response = await userApi.createUser(params)
    return {
        type: userTypes.CREATE_USER,
        payload: response
    }
}