import SuperButton from "../../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {changeIsChecked, postRequest, RequestStatusType} from "../../bll/testRequest-reducer";
import {AppStoreType, ThunkDispatchHW} from "../../../h10/bll/store";
import Box from "@mui/material/Box/Box";
import LinearProgress from "@mui/material/LinearProgress";
import style from './Request.module.scss'

const Request = () => {
    const isChecked = useSelector<AppStoreType, boolean>(state => state.request.isChecked)
    const status = useSelector<AppStoreType, RequestStatusType>(state => state.request.status)

    const dispatch: ThunkDispatchHW = useDispatch()

    const sendStatesCheckBox = () => {
        dispatch(postRequest(isChecked))
    }
    const changeStateCheckBox = (success: boolean) => {
        dispatch(changeIsChecked(success))
    }
    // если пошел запрос или обрабатываем сообщение об ошибке | положительном ответе
    const disabled = status !== 'loading' && status !== 'failed'
    return (
        <div>
            {status === 'loading'
                ? <Box sx={{width: '100%', height: '20px'}}>
                    <LinearProgress/>
                </Box>
                : <div style={{height: '20px'}}></div>
            }
            <div className={style.controls}>
                <SuperButton onClick={sendStatesCheckBox} disabled={disabled}
                             className={style.button}>
                    SEND
                </SuperButton>
                <div>
                    <SuperCheckbox onChangeChecked={changeStateCheckBox} checked={isChecked}/> SUCCESS
                </div>
            </div>
        </div>
    );
};

export default Request;