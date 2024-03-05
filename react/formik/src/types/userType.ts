export type User = {
    username: string,
    email: string,
    password: string
}

export type UserForm = {
    initialValues: User,
    loginValidation: Function,
    onSubmit: Function
}