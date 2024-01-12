import * as userApi from "../apis/user-apis"
import * as userTypes from "../constants/user-types"

export const authenticate = async () => {
    const response = await userApi.authenticate()
    return {
        type: userTypes.default.AUTHENTICATE,
        payload: response?.data
    }
}