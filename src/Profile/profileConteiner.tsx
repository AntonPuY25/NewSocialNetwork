import React, {Component} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {setProfileThunkCreator} from "../Redux/Reducers/profileReducer";
import Preloader from "./Preloader/Preloader";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import {
    PathParamsType, TypeMapDispatchToPropsProfile, TypeMapStateToPropsProfile,
    TypeProfileProps, TypeStoreReducer
} from "../Types/Types";
import {RedirectHoc} from "../HOC/redirectHoc";
import {compose} from "redux";


export class ProfileConteiner extends Component<TypeProfileProps & RouteComponentProps<PathParamsType>> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.setProfileThunkCreator(userId)


    }

    render() {
       return  <div>
                {this.props.isPreloader ? <Profile profile={this.props.profile}/> : <Preloader/>}
            </div>


    }

}

let mapStateToProps = (state: TypeStoreReducer): TypeMapStateToPropsProfile => {
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.isPreloader,
    }
}
export  default compose<React.ComponentType>(

    connect<TypeMapStateToPropsProfile, TypeMapDispatchToPropsProfile, {},
        TypeStoreReducer>(mapStateToProps, {setProfileThunkCreator}),
    RedirectHoc,
    withRouter,
)(ProfileConteiner)

// const isHocRedirect = RedirectHoc(ProfileConteiner)
//  connect<TypeMapStateToPropsProfile, TypeMapDispatchToPropsProfile, {},
//     TypeStoreReducer>(mapStateToProps, {setProfileThunkCreator})(withRouter(isHocRedirect))