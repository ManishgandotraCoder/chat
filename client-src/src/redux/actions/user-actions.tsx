import * as userApi from "../apis/user-apis"
import * as userTypes from "../constants/user-types"

export const authenticate = async (params: {}) => {
    const response = await userApi.authenticate(params)
    return {
        type: userTypes.default.AUTHENTICATE,
        payload: response?.data
    }
}