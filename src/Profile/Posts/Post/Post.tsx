import React from "react";
import s from './post.module.css';
type PostType = {
    like:number
    text:string
}
export default function Post(props:PostType){
    return(<div className={s.post}>


        <div>
            <span>Like:</span>
            <span>{props.like}</span>
        </div>
        <div>{props.text}</div>



    </div>)
}