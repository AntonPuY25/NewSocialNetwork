import React, {useEffect} from "react";
import Profile from "./profile";
import {useDispatch, useSelector} from "react-redux";
import {
    setProfileThunkCreator,
} from "../Redux/Reducers/profileReducer";
import Preloader from "./Preloader/Preloader";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import {
    PathParamsType,
    TypeInitialStateAuth,
    TypeInitialStateProfile,

    TypeStore
} from "../Types/Types";
import {compose} from "redux";
import {RedirectHoc} from "../HOC/redirectHoc";

export const ProfileContainer: React.FC<RouteComponentProps<PathParamsType>> = (props) => {
    const statePage = useSelector<TypeStore, TypeInitialStateProfile>(state => state.profilePage)
    const stateAuth = useSelector<TypeStore, TypeInitialStateAuth>(state => state.authPage)
    const dispatch = useDispatch()
    useEffect(() => {
        let userId: string = props.match.params.userId
        if (!userId) {
            userId = stateAuth.userId
        }
        dispatch(setProfileThunkCreator(userId))
    },[dispatch,stateAuth.userId,props.match.params])


    return <div>
        {statePage.isPreloader ?
            <Profile/> : <Preloader/>}
    </div>


}


export default compose<React.ComponentType>(
    RedirectHoc,
    withRouter,
)(ProfileContainer)

