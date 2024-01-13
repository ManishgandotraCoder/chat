export interface listType {
    list: Array<Type>;
    handleSubmit: Function
}
interface Type {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    role: string,
}