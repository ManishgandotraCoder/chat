import * as chatApi from "../apis/chat-apis"
import { chatTypes } from "../constants/chat-types"

export const getMessages = async (params: any) => {
    const response: any = await chatApi.getMessages(params)
    return {
        type: chatTypes.GET_MESSAGES,
        payload: response?.data
    }
}
export const sendMessage = async (params: any) => {
    const response: any = await chatApi.sendMessage(params)
    return {
        type: chatTypes.SEND_MESSAGE,
        payload: response?.data
    }
}