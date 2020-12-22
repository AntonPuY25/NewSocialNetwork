import React from "react";
import s from './dialogs.module.css';
import {NavLink} from "react-router-dom";
import {StorePropsType} from "../../index";
import Dialog from "./dialog";
import Message from "./message";
type PropsType = {
    dataStore:StorePropsType
}


export default function Dialogs(props:PropsType) {


    return (<div className={s.dialogs}>
        <div className={s.nameMessages}>
            <Dialog dialogData={props.dataStore.dataDialog}/>
        </div>
        <div className={s.messages}>
            <Message messageData={props.dataStore.dataMessage}/>

        </div>

    </div>)
}