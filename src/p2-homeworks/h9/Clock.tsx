import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './Clock.module.scss'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() //'Time' // fix with date

    const day = String(date.getDay()).length < 2 ? `0${date.getDay()}` : date.getDay()
    const month = String(date.getMonth()).length < 2 ? `0${date.getMonth()}` : date.getMonth()
    const stringDate = `${day}.${month}.${date.getFullYear()}` // fix with date

    return (
        <div className={style.clockBlock}>
            <div
                className={style.clock}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={style.data}>
                    {stringDate}
                </div>
            )}

            <div className={style.button}>
                <SuperButton onClick={start} className={style.superButton}>start</SuperButton>
                <SuperButton onClick={stop} className={style.superButton}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
