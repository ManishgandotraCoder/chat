import _helperaxios from "../../config/axios.helper"


function getMessages(params: any) {
    return _helperaxios(`/messages/getmsg`, params, 'POST')
}
function sendMessage(params: any) {
    return _helperaxios(`/messages/addmsg`, params, 'POST')
}

export {
    getMessages,
    sendMessage

}