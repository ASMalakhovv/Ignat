import {changeThemeC, initStateType, themeReducer} from "../themeReducer";

let initialState: initStateType

beforeEach(() => {
    initialState = {
        theme: 'dark'
    }
})

test('should change the theme to red', () => {

    //action
    const action = changeThemeC('red')
    const state = themeReducer(initialState,action)

    //expect
    expect(state.theme).toBe('red')

})