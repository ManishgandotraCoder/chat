import { groupTypes } from "../constants/group-types"
import { reducers } from "./type";

const initialState = {
    groupList: [],
    groupInfo:{},
    membersList:[]
};
const groupReducers = (state = initialState, action: reducers) => {

    switch (action.type) {
        case groupTypes.GET_GROUP:
            return { ...state, groupList: action.payload };
        case groupTypes.NON_GROUP_MEMBERS:
            return { ...state, membersList: action.payload };
        case groupTypes.GET_GROUP_BY_ID:
            return { ...state, groupInfo: action.payload };
        case groupTypes.UPDATE_GROUP:
            return { ...state, updateGroup: action.payload };
            
        default: return state;
    }
}
export default groupReducers;