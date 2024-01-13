import _helperaxios from "../../config/axios.helper"

function authenticate(params:{}) {
    return _helperaxios('/crypto', {}, 'GET')
}

export {
    authenticate,
}