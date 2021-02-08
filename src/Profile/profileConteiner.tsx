import React, {Component} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {
    ActionsProfile,
    setProfileThunkCreator,
    setStatusThunkCreator,

} from "../Redux/Reducers/profileReducer";
import Preloader from "./Preloader/Preloader";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import {
    PathParamsType, TypeMapDispatchToPropsProfile, TypeMapStateToPropsProfile,
    TypeProfileProps, TypeStoreReducer
} from "../Types/Types";
import {compose} from "redux";
import {RedirectHoc} from "../HOC/redirectHoc";


export class ProfileConteiner extends Component<TypeProfileProps & RouteComponentProps<PathParamsType>> {
    componentDidMount() {


        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.userId
        }
        this.props.setProfileThunkCreator(userId)


    }

    render() {
        return <div>
            {this.props.isPreloader ?
                <Profile userId={this.props.userId} setStatusThunkCreator={this.props.setStatusThunkCreator} setTextStatusAC={this.props.setTextStatusAC}
                status={this.props.status} profile={this.props.profile}/> : <Preloader/>}
        </div>


    }

}

let mapStateToProps = (state: TypeStoreReducer): TypeMapStateToPropsProfile => {
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.isPreloader,
        status:state.profilePage.status,
        userId:state.authPage.userId,
        isAuth:state.authPage.isAuth
    }
}


const {setTextStatusAC} = ActionsProfile
export default compose<React.ComponentType>(
    connect<TypeMapStateToPropsProfile, TypeMapDispatchToPropsProfile, {},
        TypeStoreReducer>(mapStateToProps,
        {setProfileThunkCreator,setTextStatusAC,setStatusThunkCreator}),
    RedirectHoc,
    withRouter,
)(ProfileConteiner)
