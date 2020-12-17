import React from "react";
import s from './post.module.css';
type PostType = {
    like:number
    text:string
}
export default function Post(props:PostType){
    return(<div className={s.post}>


        <img src={'https://steamuserimages-a.akamaihd.net/ugc/931551805216142162/8CA459BD2EF031FF144884A2E9DD3B07689CC883/?imw=512&amp;imh=531&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'}/>
        <div>
            <span>Like:</span>
            <span>{props.like}</span>
        </div>
        <div>{props.text}</div>



    </div>)
}