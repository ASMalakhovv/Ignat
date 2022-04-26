export type ThemeType = 'dark' | 'red' | 'some'
export type initStateType = { theme: ThemeType }
const initState: initStateType = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};
type ActionType = ChangeThemeCType
type ChangeThemeCType = { type: 'CHANGE-THEME', theme: ThemeType }
export const changeThemeC = (theme: ThemeType): ChangeThemeCType => {
    return {
        type: "CHANGE-THEME",
        theme
    }
};