import React from "react";
import s from "./dialogs.module.css";
import { TypePropsMessage} from "../../index";
type PropsDialog={
    messageData:Array<TypePropsMessage>
}
let Message = (props:PropsDialog)=>{
    let message = props.messageData.map(m => {
        return (
            <div className={s.message}>{m.message}</div>
        )
    })
    return (
        <div>

            {message}

        </div>
    )
}
export default Message;