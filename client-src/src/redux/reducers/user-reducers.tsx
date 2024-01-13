import { userTypes } from "../constants/user-types"
import { reducers } from "./type";

const initialState = {
    userData: {},
};
const UserReducers = (state = initialState, action: reducers) => {

    switch (action.type) {
        case userTypes.AUTHENTICATE:
            return { ...state, userData: action.payload };
        case userTypes.RESET_STORE:
            return initialState
        default: return state;
    }
}
export default UserReducers;