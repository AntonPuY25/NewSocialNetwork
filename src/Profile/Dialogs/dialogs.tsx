import React, {ChangeEvent} from "react";
import s from './dialogs.module.css';
import Dialog from "./dialog";
import Message from "./message";
import {TypeDialogs} from "../../Types/Types";


export default function Dialogs(props: TypeDialogs) {
    let onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = (event.currentTarget.value)
        props.onChangeMessageText(text)

    }
    let addMessages = () => {
         props.addMessage()

    }

    return (<div className={s.dialogs}>
        <div className={s.nameMessages}>

            <Dialog dataDialog={props.messageData.dataDialog}/>
        </div>
        <div className={s.messages}>
            <Message message={props.messageData.dataMessage}/>
            <hr/>
            <div className={s.nameMyPost}>New Message</div>
            <textarea value={props.valueMessage} onChange={onChangeMessage} className={s.textareaPost}/>
            <div>
                <button onClick={addMessages} className={s.butPost}>Send Message</button>
            </div>
        </div>

    </div>)
}