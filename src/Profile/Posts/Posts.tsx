import React from "react";
import s from './posts.module.css';
import Post from "./Post/Post";
export default function Posts(){
    return(<div>
        <div>POSTS</div>
        <textarea/>
        <div><button>Send</button></div>
<Post like={5} text='Hello From POST'/>
<Post like={3} text='My First Post'/>


    </div>)
}