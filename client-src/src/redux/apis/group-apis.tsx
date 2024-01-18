import _helperaxios from "../../config/axios.helper"

function getGroups(search:string) {
    return _helperaxios(`/group?search=${search}`, {}, 'GET')
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
function deleteGroup(groupId: string) {
    return _helperaxios(`/group/${groupId}`, {}, 'DELETE')
}
export {
    getGroups,
    getGroupById,
    nonGroupMembers,
    updateGroup,
    saveGroup,
    deleteGroup
}