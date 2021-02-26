import React from 'react';
import {TypeInitialStateAuth, TypeInitialStateProfile, TypeStore} from "../Types/Types";
import StatusFunc from "./Dialogs/status/statusFunc";
import s from "./profile.module.css";
import {useSelector} from "react-redux";

type TypeProfileInfo = {
    changeEditMode: () => void
}
const ProfieInfo: React.FC<TypeProfileInfo> = ({changeEditMode}) => {
    const statePage = useSelector<TypeStore, TypeInitialStateProfile>(state => state.profilePage)
    const stateAuth = useSelector<TypeStore, TypeInitialStateAuth>(state => state.authPage)

    return <>
        <div><b>Status:</b> <StatusFunc/></div>

        <div><b>Name:</b>{statePage.profile.fullName}</div>
        <div><b>ID:</b>{statePage.profile.userId}</div>
        <div><b>About me:</b>{statePage.profile.aboutMe}</div>
        <div>
            <div>
                <b>Looking a job:</b>{statePage.profile.lookingForAJob ? 'Yes' : "No"}

            </div>
            <div>
                <b>My Job:</b>{statePage.profile.lookingForAJobDescription}
            </div>
            <b>Contacts:</b>
            {Object.keys(statePage.profile.contacts).map(key => {
                //@ts-ignore
                return <div className={s.contacts} key={key}><b>{key}:</b>{statePage.profile.contacts[key]}
                </div>
            })}
        </div>
        {+statePage.profile.userId === +stateAuth.userId ?
            <div>
                <button onClick={changeEditMode}>Edit</button>
            </div> : ""
        }
    </>
}
export default ProfieInfo;