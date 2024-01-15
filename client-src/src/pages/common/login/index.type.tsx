export interface registerConvertorType {
    message: string,
    formvalues: {
        email: string,
        password: string
    },
    changeValues: Function,
    submit: boolean,
    handleSubmit: Function,

}
export interface reducersUserType {
    user: {
        token: string,
        messageLoggedIn: string,
        userData: {
            _id: string,
            role: string
            token: string
        },
        userList: {
            data: []
        },
        profileInfo: {
            firstName: string,
            lastName: string,
            email: string,
            password: string,
            phone: string
        }
    }
}
