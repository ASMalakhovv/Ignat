export type InitStateType = typeof initState

const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: { type: 'IS-LOADING', isLoading: boolean }): InitStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): { type: 'IS-LOADING', isLoading: boolean } => {
    return {
        type: 'IS-LOADING',
        isLoading
    }
} // fix any