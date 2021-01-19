import React, {Component} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import axios from "axios";
import {TypeStoreReducer} from "../Redux/reduxStore";
import {setPreloaderAC, setProfileDataAC} from "../Redux/Reducers/profileReducer";
import Preloader from "./Preloader/Preloader";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
export type TypeContactsDataProfile = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
export type TypePhotosDataProfile = {
    small: string
    large: string

}
export type TypeResponseDataProfile = {
    aboutMe: string
    contacts: TypeContactsDataProfile
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: TypePhotosDataProfile
}

type TypeProfileProps = {
    profile: TypeResponseDataProfile
    setProfileDataAC: (data: TypeResponseDataProfile) => void
    isPreloader: boolean
    setPreloaderAC: (preloader: boolean) => void
}

export class ProfileConteiner extends Component<TypeProfileProps & RouteComponentProps<any>>{
    componentDidMount() {
 let userId = this.props.match.params.userId
 if(!userId){
     userId = 2
        }

        axios.get<TypeResponseDataProfile>(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then((response) => {
                this.props.setProfileDataAC(response.data)
                this.props.setPreloaderAC(true)
            })

    }

    render() {


        return (<div>
                {this.props.isPreloader ? <Profile profile={this.props.profile}/> : <Preloader/>}
            </div>

        )

    }
}

let mapStateToProps = (state: TypeStoreReducer) => {
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.isPreloader
    }
}

export default connect(mapStateToProps, {setProfileDataAC, setPreloaderAC})(withRouter(ProfileConteiner))