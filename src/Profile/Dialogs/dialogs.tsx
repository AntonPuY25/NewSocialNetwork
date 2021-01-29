import React, {ChangeEvent} from "react";
import s from './dialogs.module.css';
import Dialog from "./dialog";
import Message from "./message";
import {TypeDialogs} from "../../Types/Types";
import {Button, TextField} from "@material-ui/core";


export default function Dialogs(props: TypeDialogs) {
    let onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = (event.currentTarget.value)
        props.onChangeMessageText(text)
    }

    let addMessages = () => {
        props.addMessage()
    }
    return (
     <div className={s.dialogs}>
            <div className={s.nameMessages}>

                <Dialog dataDialog={props.messageData.dataDialog}/>
            </div>
            <div className={s.messages}>
                <Message message={props.messageData.dataMessage}/>
                <hr/>
                <div className={s.nameMyPost}>New Message</div>
                <div className={s.textareaPost}>
                    <TextField
                        multiline variant="outlined" value={props.valueMessage} label={'Enter Message'}
                        onChange={onChangeMessage}/></div>

                <div>
                    <Button variant={"contained"} color={"default"} onClick={addMessages} className={s.butPost}>Send
                        Message</Button>
                </div>
            </div>

        </div>
    )

}