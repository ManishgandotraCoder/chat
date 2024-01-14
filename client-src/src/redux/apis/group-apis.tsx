import _helperaxios from "../../config/axios.helper"

function getGroups() {
    return _helperaxios('/group', {}, 'GET')
}
export {
    getGroups
 }