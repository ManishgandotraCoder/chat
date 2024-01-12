const response = (data: object, status: number, message: string) => {
    return { data: data, status: status, message: message }
}
export default response