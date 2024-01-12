import _helperaxios from "../../config/axios.helper"

function authenticate() {
    return _helperaxios('/crypto', {}, 'GET')
}

export {
    authenticate,
}