import React from "react";
import s from "./dialogs.module.css";
import {NavLink} from "react-router-dom";
import {TypeDialogData} from "../../Types/Types";

let Dialog = (props:TypeDialogData) => {

    let dialog = props.dataDialog.map(m => {
        return (<div key={m.id}  className={s.name}>
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