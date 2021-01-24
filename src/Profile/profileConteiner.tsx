import React, {Component} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {setPreloaderAC, setProfileDataAC} from "../Redux/Reducers/profileReducer";
import Preloader from "./Preloader/Preloader";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import {
    PathParamsType, TypeMapDispatchToPropsProfile, TypeMapStateToPropsProfile,
    TypeProfileProps,
    TypeResponseDataProfile, TypeStoreReducer
} from "../Types/Types";
import {getProfileApi} from "../DALL/api";


export class ProfileConteiner extends Component<TypeProfileProps & RouteComponentProps<PathParamsType>> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        getProfileApi.getProfile(userId).then((data:TypeResponseDataProfile) => {
                this.props.setProfileDataAC(data)
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

let mapStateToProps = (state: TypeStoreReducer): TypeMapStateToPropsProfile => {
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.isPreloader
    }
}

export default connect<TypeMapStateToPropsProfile, TypeMapDispatchToPropsProfile, {},
    TypeStoreReducer>(mapStateToProps, {setProfileDataAC, setPreloaderAC})(withRouter(ProfileConteiner))