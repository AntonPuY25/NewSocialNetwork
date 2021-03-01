import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TypeStore, UserType} from "../../Types/Types";
import {friendsThunkCreator} from "../../Redux/Reducers/friendsReducer";
import {getFriends} from "../../Redux/Reducers/Selectors/friendsSelectors";
import s from "../Users/users.module.css";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import {followThunkCreator} from "../../Redux/Reducers/usersReducer";
import {getAllSelectors} from "../../Redux/Reducers/Selectors/userSelectors";

const Friends = ()=>{
    const {disabledButton} = useSelector(getAllSelectors)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(friendsThunkCreator())
    },[dispatch,disabledButton])
    const friends = useSelector<TypeStore, Array<UserType>>( getFriends)

    return<>
        {friends.map(i=>{
            return<div className={s.people} key={i.id}>
                {i.followed? <div>
                    <div><NavLink to={`/profile/${i.id}`}> <img className={s.avaUser} alt={'Ava'}
                    src={i.photos.small ? i.photos.small : require(`../../Img/ava1.png`)}/></NavLink>
                    </div>
                    <div>{i.name}</div>
                    <div>{i.status}</div>
                    <Button disabled={disabledButton.some(id=>id===i.id)} variant={"contained"}
                    onClick={() => {dispatch(followThunkCreator(i.id))
                }}>UnFollow</Button></div>:""}

            </div>

        })}
    </>
}
export  default Friends;