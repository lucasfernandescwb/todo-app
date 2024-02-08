interface IErrorResponse {
    code: string
    message: string
}

export type ErrorResponse = IErrorResponse | null
