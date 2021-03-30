import React, { useEffect, useState} from "react";
import s from "./dialogs.module.css";
import {TypeMessage} from "../../Types/Types";

type PropsDialog={
    message:Array<TypeMessage>
    ws:any
}
type TypeChatMessage =  {
    message: string
    photo:string
    userId:number
    userName:string
}

let Message = (props:PropsDialog)=>{
    const [messages,setMessages] = useState<TypeChatMessage[]>([])

    useEffect(()=>{
        props.ws.addEventListener('message',(e:MessageEvent)=>{
            setMessages((preMessage)=>[...preMessage,...JSON.parse(e.data)]);
        })

    }, [])
    let message = messages.map((m,i) => {

        return (
            <div key={i} className={s.message}>

                <img src={m.photo} alt={'ava'}/> <b>{m.userName}</b>
                <br/>
                {m.message}
            </div>
        )
    })
    return (
        <div>

            {message}

        </div>
    )
}
export default Message;