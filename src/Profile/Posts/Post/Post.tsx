import React from "react";
import s from './post.module.css';
import {strict} from "assert";
export type PostTypeProps = {
    id:number
    name:string
    date:string
    textPost:string
    likes:number
    imgPost:string

}
export default function Post(props:PostTypeProps){
    return(<div>

        <div className={s.post}>
            <div className={s.miniAva}>
                <img src={require('../../../Img/ava2.png')}/>
            </div>
            <div className={s.miniName}>
                {props.name}
            </div>
            <div className={s.seen}>
                {props.date}
            </div>
            <hr className={s.hr1}/>

            <div className={s.postImg}>
                {props.textPost}
                <img src={require(`../../../Img/${props.imgPost}.jpg`)}/>
            </div>
            <div className={s.countLike}>
                <div className={s.like}>

                    <img src={require('../../../Img/like.png')}/>


                </div>
                <div className={s.countLike}>
                    {props.likes}
                </div>
            </div>
        </div>



    </div>)
}