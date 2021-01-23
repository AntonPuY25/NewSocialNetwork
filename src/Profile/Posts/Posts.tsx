import React, {ChangeEvent} from "react";
import s from './posts.module.css';
import Post from "./Post/Post";
import { PropsType} from "../../Types/Types";
import {Button, Container, TextField} from "@material-ui/core";



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
    return (<div className={s.test}>
        <Container >


                <TextField   value={props.valueTextPost} onChange={onChangePost}  id="filled-textarea" label="Enter Text" multiline   variant="outlined" />
                <div> <Button variant={"contained"}  onClick={addPosts} color={"default"} >Add Post</Button></div>


            {posts}

        </Container>



    </div>)
}