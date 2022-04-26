import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeCallBack = (value: ThemeType) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio options={themes} name='themes' value={theme}
                        className={s.superRadio} onChangeOption={onChangeCallBack}
            />
            <hr/>
        </div>
    );
}

export default HW12;


