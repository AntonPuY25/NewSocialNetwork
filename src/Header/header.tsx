import React from "react";
import s from './header.module.css';

export default function Header(){
    return(<div className={s.header} >

            <div>
                <img src={"https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434839_1280.png"}/>

            </div>

            <div>Header</div>

    </div>)
}