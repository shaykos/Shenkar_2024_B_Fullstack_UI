export type UserType = {
    _id: string,
    full_name: string,
    email: string,
    image: string,
    updateUserImage?: Function
}

export type CloudinaryCompType = {
    setImage: Function
}

export type UserCompProps = {
    u: UserType,
    updateUser: Function
}
