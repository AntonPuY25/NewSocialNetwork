import React from "react";
import s from './posts.module.css';
import Post from "./Post/Post";
import {PostTypeProps} from "../../index";
type PropsType = {
    dataPost: Array<PostTypeProps>
}

export default function Posts(props:PropsType) {

    let posts = props.dataPost.map(p=>{
        return <Post id ={p.id} name={p.name} date={p.date} textPost={p.textPost} likes={p.likes} imgPost={p.imgPost}/>
    })
    return (<div>
       <div className={s.nameMyPost} >My Posts</div>
        <textarea className={s.textareaPost}/>
       <div> <button className={s.butPost}>Add Post</button></div>

        {posts}
    </div>)
}