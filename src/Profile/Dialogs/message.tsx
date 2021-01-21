import React from "react";
import s from "./dialogs.module.css";
import {TypeMessage} from "../../Types/Types";

type PropsDialog={
    message:Array<TypeMessage>
}
let Message = (props:PropsDialog)=>{

    let message = props.message.map((m,i) => {
        return (
            <div key={i} className={s.message}>{m.message}</div>
        )
    })
    return (
        <div>

            {message}

        </div>
    )
}
export default Message;