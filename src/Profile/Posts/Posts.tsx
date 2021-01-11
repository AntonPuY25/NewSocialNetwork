import React, {ChangeEvent} from "react";
import s from './posts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../Redux/Reducers/profileReducer";
type PropsType = {
    valueTextPost:string
    dataPost: Array<PostType>
    addPost:()=>void
    onChangePostText:(text:string)=>void
}


export default function Posts(props:PropsType) {

    let posts = props.dataPost.map((p,i)=>{
        return <Post key={i} id ={p.id} name={p.name} date={p.date} textPost={p.textPost} likes={p.likes} imgPost={p.imgPost}/>
    })
    let onChangePost = (event:ChangeEvent<HTMLTextAreaElement>)=>{
        let text = event.currentTarget.value
        props.onChangePostText(text)

    }
    let addPosts = ()=>{
        props.addPost()


    }
    return (<div>
       <div className={s.nameMyPost} >My Posts</div>
        <textarea value={props.valueTextPost} onChange={onChangePost} className={s.textareaPost}/>
       <div> <button onClick={addPosts} className={s.butPost}>Add Post</button></div>

        {posts}
    </div>)
}