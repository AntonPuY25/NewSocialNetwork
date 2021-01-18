import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import axios from "axios";
import {TypeStoreReducer} from "../Redux/reduxStore";
import {setProfileDataAC} from "../Redux/Reducers/profileReducer";

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
    photos:TypePhotosDataProfile
}

type TypeProfileProps = {
    profile:TypeResponseDataProfile
    setProfileDataAC:(data:TypeResponseDataProfile)=>void
}
class ProfileConteiner extends React.Component<TypeProfileProps, any> {
    componentDidMount() {
        axios.get<TypeResponseDataProfile>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setProfileDataAC(response.data)
            })
    }

    render() {


        return (
            <Profile profile={this.props.profile}/>
        )

    }
}

let mapStateToProps = (state: TypeStoreReducer) => {
    return {
        profile:state.profilePage.profile
    }
}
export default connect(mapStateToProps, {setProfileDataAC})(ProfileConteiner)