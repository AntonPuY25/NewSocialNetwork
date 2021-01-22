import React from "react";
import s from './profile.module.css';
import PostsConteiner from "./Posts/PostsConteiner";
import {TypeResponseDataProfile} from "../Types/Types";


type TypePropsProfile = {
    profile: TypeResponseDataProfile
}


export default function Profile(props: TypePropsProfile) {
    return (<div>

        <div className={s.fonPage}>
            <img alt={'ava'} src={require('../Img/fon.jpg')}/>

        </div>
        <div className={s.about}>
            <div className={s.ava}>
                <img alt={'ava'} src={props.profile.photos.small?props.profile.photos.small:
                    require('../Img/ava1.png')}/>
            </div>

            <div className={s.info}>
                <h3>{props.profile.fullName}</h3>
                <div>Status:{props.profile.aboutMe}</div>
                <div>ID:{props.profile.userId}</div>
                <div>
                    <span>Job:{props.profile.lookingForAJobDescription}</span>
                </div>

            </div>
        </div>
        <div className={s.posts}>
            <PostsConteiner/>
        </div>

    </div>)
}