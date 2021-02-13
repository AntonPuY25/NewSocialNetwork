import React, {ChangeEvent} from "react";
import s from './posts.module.css';
import Post from "./Post/Post";
import {TypeInitialStateProfile, TypeStore} from "../../Types/Types";
import {Button, Container, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {ActionsProfile} from "../../Redux/Reducers/profileReducer";


export default function Posts() {
    const postDataProps = useSelector<TypeStore, TypeInitialStateProfile>(state => state.profilePage)
    const dispatch = useDispatch()
    let posts = postDataProps.postData.dataPost.map((p, i) => {
        return <Post key={i} id={p.id} name={p.name} date={p.date} textPost={p.textPost} likes={p.likes}
                     imgPost={p.imgPost}/>
    })
    let onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        dispatch(ActionsProfile.PostTextAC(text))

    }
    let addPosts = () => {
        dispatch(ActionsProfile.PostAC())


    }
    return (<div className={s.test}>
        <Container>
            <TextField value={postDataProps.valueTextPost} onChange={onChangePost} id="filled-textarea"
                       label="Enter Text" multiline variant="outlined"/>
            <div><Button variant={"contained"} onClick={addPosts} color={"default"}>Add Post</Button></div>
            {posts}
        </Container>


    </div>)
}