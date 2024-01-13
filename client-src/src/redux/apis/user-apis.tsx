import _helperaxios from "../../config/axios.helper"

function authenticate(params: { email: string, password: string }) {
    return _helperaxios('/authenticate', params, 'POST')
}

function listUser() {
    return _helperaxios('/user', {}, 'GET')
}

function getUserById(id: string) {
    return _helperaxios(`/user/${id}`, {}, 'GET')
}

function editUser(id: string, params: { email: string, password: string, firstName: string, lastName: string, phone: string }) {
    return _helperaxios(`/user/${id}`, params, 'PUT')
}

function createUser( params: { email: string, password: string, firstName: string, lastName: string, phone: string }) {
    return _helperaxios(`/user`, params, 'POST')
}

export {
    authenticate,
    listUser,
    getUserById,
    editUser,
    createUser
}