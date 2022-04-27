import {
    changeIsChecked,
    changeStatus,
    initStateType,
    savedError, savedResMessage,
    testRequestReducer
} from "./testRequest-reducer";

let initState: initStateType;

beforeEach(() => {
    initState = {
        isChecked: false,
        error: null,
        status: 'idle',
        responseMessage: null
    }
})

test('should change the value of isChecked', () => {

    //action
    const state = testRequestReducer(initState, changeIsChecked(false))

    //expect
    expect(state.isChecked).toBe(false)
})

test('error should be saved', () => {

    //action
    const state = testRequestReducer(initState, savedError('error'))

    //expect
    expect(state.error).toBe('error')
})

test('should change status', () => {

    //action
    const state = testRequestReducer(initState, changeStatus('succeeded'))

    //expect
    expect(state.status).toBe('succeeded')
})

test('should set reply to messages', () => {

    //action
    const state = testRequestReducer(initState, savedResMessage('OK'))

    //expect
    expect(state.responseMessage).toBe('OK')
})