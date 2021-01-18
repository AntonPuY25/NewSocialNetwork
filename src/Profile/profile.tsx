import React from "react";
import s from './profile.module.css';
import PostsConteiner from "./Posts/PostsConteiner";
import {TypeResponseDataProfile} from "./profileConteiner";

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
                <div>{props.profile.aboutMe}</div>
                <div>
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>

            </div>
        </div>
        <div className={s.posts}>
            <PostsConteiner/>
        </div>

    </div>)
}