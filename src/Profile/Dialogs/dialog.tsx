import React from "react";
import s from "./dialogs.module.css";
import {NavLink} from "react-router-dom";
import {TypePropsDialog} from "../../Redux/store";

type PropsDialog={
    dialogData:Array<TypePropsDialog>
}
// let Dialog = (props:PropsDialog)=>{
let Dialog: React.FC<PropsDialog> = (props)=>{
    let dialog = props.dialogData.map(m => {
        return (<div className={s.name}>
            <NavLink to={`/dialogs/${m.address}`}>{m.name}</NavLink>
        </div>)

    })
    return (
        <div>

            {dialog}

        </div>
    )
}
export default Dialog;