export interface registerConvertorType {
    formvalues: {
        email:string,
        password:string
    },
    changeValues: Function,
    submit: boolean,
    handleSubmit: Function,

}
export interface reducersUserType {
    user:{
        userData :{
            user :{
                _id:string,
                role: string
            },
            token: string
        },
        userList:{
            data :[]
        }
    }
}
