import React from "react";
import s from './menu.module.css'
import {NavLink} from "react-router-dom";

export default function Menu() {
    return (<div className={s.nav}>
        <div className={s.test}>
            <div className={s.icon}><img alt={'icon'} src={require('../Img/friends.png')}/><NavLink
                className={`${s.items}`}
                activeClassName={s.ownItem}
                to='/profile'>Profile</NavLink>
            </div>
            <div className={s.icon}><img alt={'icon'} src={require('../Img/message.png')}/><NavLink className={s.items}
                                                                                                    activeClassName={s.ownItem}
                                                                                                    to='/dialogs'>Message</NavLink>
            </div>
            <div className={s.icon}><img alt={'icon'} src={require('../Img/realFriends.png')}/><NavLink className={s.items}
                                                                                                    activeClassName={s.ownItem}
                                                                                                    to='/friends'>Friends</NavLink>
            </div>
            <div className={s.icon}><img alt={'icon'} src={require('../Img/friends.png')}/><NavLink className={s.items}
                                                                                                    activeClassName={s.ownItem}
                                                                                                    to='/people'>People</NavLink>
            </div>
            <div className={s.icon}><img alt={'icon'} src={require('../Img/news.png')}/><NavLink className={s.items}
                                                                                                 activeClassName={s.ownItem}
                                                                                                 to='/news'>News</NavLink>
            </div>
            <div className={s.icon}><img alt={'icon'} src={require('../Img/music.png')}/><NavLink className={s.items}
                                                                                                  activeClassName={s.ownItem}
                                                                                                  to='/music'>Music</NavLink>
            </div>
            <div className={s.icon}><img alt={'icon'} src={require('../Img/settings.png')}/><NavLink className={s.items}
                                                                                                     activeClassName={s.ownItem}
                                                                                                     to='/settings'>Settings</NavLink>
            </div>

        </div>
    </div>)
}