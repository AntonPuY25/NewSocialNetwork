import React from "react";
import s from './profile.module.css';
import Posts from "./Posts/Posts";
import {PostTypeProps} from "../index";
type PropsType = {
    dataPost: Array<PostTypeProps>
}
export default function Profile(props:PropsType){
    return(<div >

            <div className={s.fonPage}>
                <img src={require('../Img/fon.jpg')}/>

            </div>
            <div className={s.about}>
                <div className={s.ava}>
                    <img src={require('../Img/ava1.png')}/>
                </div>

                <div className={s.info}>
                    <div>Anton Kliachonak</div>
                    <div>
                        <span>Date of brithday:</span>
                        <span>28.10.1993</span>
                    </div>
                    <div>
                        <span>City:</span>
                        <span>Borisov</span>
                    </div>
                    <div>
                        <span>Education:</span>
                        <span>Junior Developer</span>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
              <Posts dataPost={props.dataPost}/>
            </div>

    </div>)
}