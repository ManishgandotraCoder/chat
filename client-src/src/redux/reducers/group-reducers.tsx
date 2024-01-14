import { groupTypes } from "../constants/group-types"
import { reducers } from "./type";

const initialState = {
    groupList: [],
};
const groupReducers = (state = initialState, action: reducers) => {

    switch (action.type) {
        case groupTypes.GET_GROUP:
            return { ...state, groupList: action.payload };
        
        default: return state;
    }
}
export default groupReducers;