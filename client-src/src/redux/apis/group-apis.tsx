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
function updateGroup(groupId: string,type: string, id: string) {
    return _helperaxios(`/group/${groupId}`, {
        "type": type,
        "member": id
    }, 'PUT')
}
export {
    getGroups,
    getGroupById,
    nonGroupMembers,
    updateGroup

}