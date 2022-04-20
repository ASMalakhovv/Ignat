import React from 'react'
import m from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {
    return (
        <div className={m.message}>
            <div>
                <img className={m.avaUser} src={props.avatar} alt={`Аватарка ${props.name}`}/>
            </div>
            <div className={m.data}>
                <div>
                    {props.name}
                </div>
                <div className={m.text}>
                    {props.message}
                </div>
                <div className={m.time}>
                    {props.time}
                </div>
            </div>

        </div>
    )
}

export default Message
