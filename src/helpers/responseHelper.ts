export const CreateErrorResponse = (
    field: string,
    error: string,
    type: string
) => {
    return {
        status: 'error',
        success: false,
        errors: {
            [field]: {
                type: type,
                message: error,
            },
        },
    }
}

export const CreateSuccessResponse = (message: string, data?: any) => {
    return {
        status: 'success',
        success: true,
        message: message,
        data: data,
    }
}