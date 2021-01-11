import React from "react";
import s from './profile.module.css';
import PostsConteiner from "./Posts/PostsConteiner";



export default function Profile(){

    return(<div >

            <div className={s.fonPage}>
                <img alt={'ava'} src={require('../Img/fon.jpg')}/>

            </div>
            <div className={s.about}>
                <div className={s.ava}>
                    <img alt={'ava'} src={require('../Img/ava1.png')}/>
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
              <PostsConteiner/>
            </div>

    </div>)
}