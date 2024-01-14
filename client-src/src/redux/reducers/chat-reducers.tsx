import { chatTypes } from "../constants/chat-types"
import { reducers } from "./type";

const initialState = {
    membersLis:{},
    messageList:[]
};
const chatReducers = (state = initialState, action: reducers) => {

    switch (action.type) {
        case chatTypes.GET_MESSAGES:
            return { ...state, messageList: action.payload };
        case chatTypes.SEND_MESSAGE:
            return { ...state, membersLis: action.payload };
       
            
        default: return state;
    }
}
export default chatReducers;