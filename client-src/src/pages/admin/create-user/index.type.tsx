export interface editUserType {
    submit:boolean,
    handleSubmit: Function,
    handleSubmit2: Function,
    message: string,
    formvalues :{
        email:string,
        password:string,
        firstName:string,
        lastName:string,
        phone:string,
        confirmPassword: string
    },
    changeValues: Function
}
