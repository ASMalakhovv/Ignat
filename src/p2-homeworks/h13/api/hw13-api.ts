import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})


//API
export const hw13API = {
    testRequest(success: boolean) {
        return instance
            .post<{ success: boolean }, AxiosResponse<TestRequestResponseType>>('auth/test', {success: success})
    }
}

//TYPES
export type TestRequestResponseType = {
    errorText: string
    info: string
    yourBody: {
        success?: boolean | string
    },
    yourQuery: {}
}

