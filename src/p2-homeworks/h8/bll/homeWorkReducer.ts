import {UserType} from "../HW8";

const sortNameForReducer = (a: UserType, b: UserType): number => {
    return a.name < b.name ? -1
        : a.name > b.name ? 1
            : 0
}
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]
            return action.payload === 'up'
                ?
                copyState.sort((a, b) => sortNameForReducer(a, b))
                :
                copyState
        }
        case 'check': {
            return state.filter(e => e.age >= action.payload)
        }
        default:
            return state
    }
}

//AC

export const sortUp = (payload: 'up' | 'down') => {
    return {
        type: 'sort',
        payload
    } as const
}
export const checkAge = (payload: number) => {
    return {
        type: 'check',
        payload
    } as const
}

//TYPES

export type SortUp = ReturnType<typeof sortUp>
export type CheckAge = ReturnType<typeof checkAge>
export type ActionType = SortUp | CheckAge