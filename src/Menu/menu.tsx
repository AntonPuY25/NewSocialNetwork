import React from "react";
import s from './menu.module.css'
import {NavLink} from "react-router-dom";

export default function Menu() {
    return (<div className={s.nav}>

            <div><NavLink className={`${s.items}`} activeClassName={s.ownItem} to='/profile'>Profile</NavLink></div>
            <div><NavLink className={s.items}  activeClassName={s.ownItem} to='/dialogs'>Message</NavLink></div>
            <div><NavLink className={s.items} activeClassName={s.ownItem} to='/news'>News</NavLink></div>
            <div><NavLink className={s.items}  activeClassName={s.ownItem} to='/music'>Music</NavLink></div>
            <div><NavLink className={s.items} activeClassName={s.ownItem} to='/settings'>Settings</NavLink></div>


    </div>)
}