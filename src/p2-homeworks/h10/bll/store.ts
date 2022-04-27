import {ActionLoading, loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionTheme, themeReducer} from "../../h12/bll/themeReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionRequest, testRequestReducer} from "../../h13/bll/testRequest-reducer";

//TYPE
export type AppStoreType = ReturnType<typeof reducers>
export type ThunkDispatchHW = ThunkDispatch<AppStoreType, unknown, HWActionType>;
export type HWActionType = ActionRequest | ActionLoading | ActionTheme
export type HWThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStoreType,
    unknown,
    HWActionType>

//STATE
const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: testRequestReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store


// @ts-ignore
window.store = store // for dev
