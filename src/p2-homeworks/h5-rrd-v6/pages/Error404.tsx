import React from 'react'
import s from './Error404.module.scss'

function Error404() {
    return (
        <div className={s.errorBlock}>
            <div className={s.container}>
                <h1>404</h1>
            </div>
        </div>
    )
    }

export default Error404
