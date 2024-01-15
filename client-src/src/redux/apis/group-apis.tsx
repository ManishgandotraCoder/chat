import _helperaxios from "../../config/axios.helper"

function getGroups() {
    return _helperaxios('/group', {}, 'GET')
}
function getGroupById(id: string) {
    return _helperaxios(`/group/${id}`, {}, 'GET')
}
function nonGroupMembers(id: string) {
    return _helperaxios(`/group/members/${id}`, {}, 'GET')
}
function updateGroup(groupId: string, type: string, id: string) {
    return _helperaxios(`/group/${groupId}`, {
        "type": type,
        "member": id
    }, 'PUT')
}
function saveGroup(name: string) {
    return _helperaxios(`/group/`, {
        "name": name,
    }, 'POST')
}
export {
    getGroups,
    getGroupById,
    nonGroupMembers,
    updateGroup,
    saveGroup
}