import {AppStoreType, HWThunk, ThunkDispatchHW} from "../../h10/bll/store";
import {hw13API, TestRequestResponseType} from "../api/hw13-api";
import {AxiosError} from "axios";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type initStateType = typeof initState
const initState = {
    isChecked: false,
    error: null as null | string,
    status: 'idle' as RequestStatusType,
    responseMessage: null as null | string
}


export const testRequestReducer = (state: initStateType = initState, action: ActionRequest): initStateType => {
    switch (action.type) {
        case "test/SAVED-MESSAGE":
            return {...state, responseMessage: action.message}
        case "test/CHANGE-STATUS":
            return {...state, status: action.status}
        case "test/SAVED-ERROR":
            return {...state, error: action.error}
        case 'test/CHANGE-IS-CHECKED':
            return {...state, isChecked: action.success};
        default:
            return state
    }

}

//AC
export const changeIsChecked = (success: boolean) => {
    return {
        type: 'test/CHANGE-IS-CHECKED',
        success
    } as const
}

export const savedError = (error: string | null) => {
    return {
        type: 'test/SAVED-ERROR',
        error
    } as const
}

export const changeStatus = (status: RequestStatusType) => {
    return {
        type: 'test/CHANGE-STATUS',
        status
    } as const
}

export const savedResMessage = (message: string | null) => {
    return {
        type: 'test/SAVED-MESSAGE',
        message
    } as const
}

//THUNK
export const postRequest = (success: boolean): HWThunk => async (dispatch: ThunkDispatchHW, getState: () => AppStoreType) => {
    try {
        dispatch(changeStatus('loading'))
        dispatch(changeIsChecked(success))
        const resolve = await hw13API.testRequest(success)
        dispatch(savedResMessage(resolve.data.errorText))
    } catch (error) {
        const err = error as AxiosError<TestRequestResponseType>
        err.response?.data.errorText && dispatch(savedError(err.response.data.errorText))
    } finally {
        dispatch(changeStatus('succeeded'))
    }

}

export const handleClose = () => {

}

//TYPES
export type ActionRequest = ChangeIsChecked | SavedError | ChangeStatus | SavedMessage
type ChangeIsChecked = ReturnType<typeof changeIsChecked>
type SavedError = ReturnType<typeof savedError>
type ChangeStatus = ReturnType<typeof changeStatus>
type SavedMessage = ReturnType<typeof savedResMessage>