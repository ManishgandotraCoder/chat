import _helperaxios from "../../config/axios.helper"

function authenticate(params: { email: string, password: string }) {
    return _helperaxios('/authenticate', params, 'POST')
}
function listUser() {
    return _helperaxios('/user',  {},'GET')
}
export {
    authenticate,
    listUser
}