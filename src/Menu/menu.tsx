import React from "react";
import s from './menu.module.css'

export default function Menu() {
    return (<div className={s.nav}>

            <div><a className={`${s.items} ${s.ownItem}`} href='#'>Profile</a></div>
            <div><a className={s.items} href='#'>Message</a></div>
            <div><a className={s.items} href='#'>News</a></div>
            <div><a className={s.items} href='#'>Music</a></div>
            <div><a className={s.items} href='#'>Settings</a></div>


    </div>)
}