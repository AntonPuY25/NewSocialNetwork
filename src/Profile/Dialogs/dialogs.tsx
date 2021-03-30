import React, {ChangeEvent, useState} from "react";
import s from './dialogs.module.css';
import Dialog from "./dialog";
import Message from "./message";
import {TypeDialogs} from "../../Types/Types";
import {Button, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {setMessageTC} from "../../Redux/Reducers/dealogsReducer";


export default function Dialogs(props: TypeDialogs) {
    const [textMessage,setTextMessage]= useState<string>('')
    const dispatch = useDispatch()

    let onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextMessage(event.currentTarget.value)
    }

    let addMessages = () => {
        dispatch(setMessageTC(textMessage))
        setTextMessage('')
    }
    return (
     <div className={s.dialogs}>
            <div className={s.nameMessages}>

                <Dialog dataDialog={props.dataDialog}/>
            </div>
            <div className={s.messages}>
                <Message messages={props.dataMessage}/>
                <hr/>
                <div className={s.nameMyPost}>New Message</div>
                <div className={s.textareaPost}>
                    <TextField
                        multiline variant="outlined" value={textMessage} label={'Enter Message'}
                        onChange={onChangeMessage}/></div>

                <div>
                    <Button variant={"contained"} color={"default"} onClick={addMessages} className={s.butPost}>Send
                        Message</Button>
                </div>
            </div>

        </div>
    )

}