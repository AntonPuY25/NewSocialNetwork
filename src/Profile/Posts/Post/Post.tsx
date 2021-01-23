import React from "react";
import s from './post.module.css';
import {PostTypeProps} from "../../../Types/Types";
import {Paper} from "@material-ui/core";

export default function Post(props:PostTypeProps){

    return(<div>
        <Paper elevation={10} >
        <div className={s.post}>
            <div className={s.miniAva}>
                <img  alt={'ava'} src={require('../../../Img/ava2.png')} />
            </div>
            <div className={s.miniName}  >
                {props.name}
            </div>
            <div className={s.seen}>
                {props.date}
            </div>
            <hr className={s.hr1}/>
            <div className={s.postImg}>
                {props.textPost}
                <img alt={'posts'}  src={require(`../../../Img/${props.imgPost}.jpg`)}/>
            </div>
            <div className={s.countLike}>
                <div className={s.like}>

                    <img onClick={props.fun}   alt={'like'} src={require('../../../Img/like.png')}/>


                </div>
                <div className={s.countLike}>
                    {props.likes}
                </div>
            </div>
        </div>

        </Paper>

    </div>)
}