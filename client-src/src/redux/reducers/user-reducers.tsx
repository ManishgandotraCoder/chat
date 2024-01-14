import { userTypes } from "../constants/user-types"
import { reducers } from "./type";

const initialState = {
    userData: {},
    userList: [],
    profileInfo: {}
};
const UserReducers = (state = initialState, action: reducers) => {

    switch (action.type) {
        case userTypes.AUTHENTICATE:
            return { ...state, userData: action.payload };
        case userTypes.LIST_USER:
            return { ...state, userList: action.payload };
        case userTypes.GET_USER_BY_ID:
            return { ...state, profileInfo: action.payload.data };
        case userTypes.EDIT_USER:
            return { ...state, profileInfo: action.payload };
        case userTypes.CREATE_USER:
            return { ...state, profileInfo: action.payload };
        case userTypes.RESET_STORE:
            return initialState
        default: return state;
    }
}
export default UserReducers;