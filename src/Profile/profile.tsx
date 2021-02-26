import React, {ChangeEvent, useState} from "react";
import s from './profile.module.css';
import {useDispatch, useSelector} from "react-redux";
import {TypeInitialStateAuth, TypeInitialStateProfile, TypeStore} from "../Types/Types";
import Posts from "./Posts/Posts";
import {setPhotoThunkCreator} from "../Redux/Reducers/profileReducer";
import ProfieInfo from "./profileInfo";
import EditProfileInfo from "./editProfileInfo";


export default function Profile() {
    const [editMode,setEditMode] = useState<boolean>(true)
    const statePage = useSelector<TypeStore, TypeInitialStateProfile>(state => state.profilePage)
    const stateAuth = useSelector<TypeStore, TypeInitialStateAuth>(state => state.authPage)
    const dispatch = useDispatch()

    const uploadPhoto = (event: ChangeEvent<HTMLInputElement>) => {
        let newPhoto = event.currentTarget.files ? event.currentTarget.files[0] : "";
        dispatch(setPhotoThunkCreator(newPhoto))
    }
    const changeEditMode = ()=>{
        setEditMode(!editMode)
    }

    return (<div>

        <div className={s.fonPage}>
            <img alt={'ava'} src={require('../Img/fon.jpg')}/>

        </div>
        <div className={s.about}>
            <div className={s.ava}>
                <img alt={'ava'} src={statePage.profile.photos.small ? statePage.profile.photos.small :
                    require('../Img/ava1.png')}/>
                {+statePage.profile.userId === +stateAuth.userId ?
                    <div>
                        <label htmlFor="file">Choose photo to upload</label>
                        <input type="file" onChange={uploadPhoto} name="filePhoto"/>
                    </div> : ""
                }

            </div>


            <br/>

            <div className={s.info}>
                {editMode? <ProfieInfo changeEditMode={changeEditMode} />:<EditProfileInfo changeEditMode={changeEditMode} />}


            </div>
        </div>
        <div className={s.posts}>

            <Posts/>
        </div>

    </div>)
}
