import React from "react";
import s from './profile.module.css';

import StatusFunc from "./Dialogs/status/statusFunc";
import {useSelector} from "react-redux";
import {TypeInitialStateProfile, TypeStore} from "../Types/Types";
import Posts from "./Posts/Posts";



export default function Profile() {
    const statePage = useSelector<TypeStore, TypeInitialStateProfile>(state => state.profilePage)
    return (<div>

        <div className={s.fonPage}>
            <img alt={'ava'} src={require('../Img/fon.jpg')}/>

        </div>
        <div className={s.about}>
            <div className={s.ava}>
                <img alt={'ava'} src={statePage.profile.photos.small ? statePage.profile.photos.small :
                    require('../Img/ava1.png')}/>
            </div>

            <div className={s.info}>
                <h3>{statePage.profile.fullName}</h3>
                <div>Status:{statePage.profile.aboutMe}</div>
                <div>ID:{statePage.profile.userId}</div>
                <div>
                    <span>Job:{statePage.profile.lookingForAJobDescription}</span>
                </div>

            </div>
        </div>
        <div className={s.posts}>
            <StatusFunc/>
            <Posts/>
        </div>

    </div>)
}