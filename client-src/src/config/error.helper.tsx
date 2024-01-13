const response = (data: object, status: number, message: string) => {
    return { data: data, status: status, message: message }
}
export const response_f00 = ()=>{
    return { data: null, status: 403, message: 'Forbidden' }
}
export default response