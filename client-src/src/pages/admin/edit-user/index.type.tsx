export interface editUserType {
    submit:boolean,
    handleSubmit: Function,
    handleSubmit2: Function,
    formvalues :{
        email:string,
        password:string,
        firstName:string,
        lastName:string,
        phone:string
    },
    changeValues: Function
}
