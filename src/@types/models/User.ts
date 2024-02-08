interface IUser {
    username: string | null
    email: string | null
    photo?: string | null
}

export type User = IUser