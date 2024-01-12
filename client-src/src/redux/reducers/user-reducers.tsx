import * as userTypes from "../constants/user-types"
import { reducers } from "./type";

const initialState = {
    userData: {},
};
const CryptoReducers = (state = initialState, action: reducers) => {
    
    switch (action.type) {
        case userTypes.default.AUTHENTICATE:
            return { ...state, userData: action.payload };
            default: return state;
    }
}
export default CryptoReducers;