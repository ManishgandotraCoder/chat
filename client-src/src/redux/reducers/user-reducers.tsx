import { userTypes } from "../constants/user-types"
import { reducers } from "./type";

const initialState = {
    messageLoggedIn: '',
    userList: [],
    profileInfo: {},
    userData:{},
    updateMessage:'',
    createMessage:""
};
const UserReducers = (state = initialState, action: reducers) => {

    switch (action.type) {
        case userTypes.AUTHENTICATE:
            return { ...state, userData: action.payload?.data?.user, token: action.payload?.data?.token, messageLoggedIn: action?.payload?.message };
        case userTypes.LIST_USER:
            return { ...state, userList: action.payload };
        case userTypes.GET_USER_BY_ID:
            return { ...state, profileInfo: action.payload.data };
        case userTypes.EDIT_USER:
            return { ...state, profileInfo: action.payload , updateMessage: action.payload.message};
        case userTypes.CREATE_USER:
            console.log(action.payload, );
            
            return { ...state, profileInfo: action.payload , createMessage: action.payload.message};
        case userTypes.RESET_STORE:
            return initialState
        default: return state;
    }
}
export default UserReducers;