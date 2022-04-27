import React, {useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertColor, AlertProps} from '@mui/material/Alert';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType, ThunkDispatchHW} from "../../../h10/bll/store";
import {changeStatus, savedError, savedResMessage} from "../../bll/testRequest-reducer";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export function ErrorSnackbar() {
    const error = useSelector<AppStoreType, string | null>(state => state.request.error)
    const message = useSelector<AppStoreType, string | null>(state => state.request.responseMessage)

    useEffect(() => {
        dispatch(changeStatus('failed'))
    }, [error, message])

    const dispatch: ThunkDispatchHW = useDispatch();

    const alertType: AlertColor | undefined = error !== null ? 'error' : 'info'
    const responseInfo: string | null = error !== null ? error : message

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(savedError(null))
        dispatch(savedResMessage(null))
        dispatch(changeStatus('succeeded'))
    };

    return (
        <Snackbar open={error !== null || message !== null} onClose={handleClose}
                  anchorOrigin={{horizontal: 'center', vertical: 'top'}}>
            <Alert onClose={handleClose} severity={alertType} sx={{width: '100%'}}>
                Response: {responseInfo}
            </Alert>
        </Snackbar>
    );
}