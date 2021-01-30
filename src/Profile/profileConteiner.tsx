import React, {Component} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {setProfileThunkCreator, setStatusThunkCreator, setTextStatusAC} from "../Redux/Reducers/profileReducer";
import Preloader from "./Preloader/Preloader";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import {
    PathParamsType, TypeMapDispatchToPropsProfile, TypeMapStateToPropsProfile,
    TypeProfileProps, TypeStoreReducer
} from "../Types/Types";
import {compose} from "redux";


export class ProfileConteiner extends Component<TypeProfileProps & RouteComponentProps<PathParamsType>> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '13747'
        }
        this.props.setProfileThunkCreator(userId)


    }

    render() {
        return <div>
            {this.props.isPreloader ? <Profile setStatusThunkCreator={this.props.setStatusThunkCreator} setTextStatusAC={this.props.setTextStatusAC} status={this.props.status} profile={this.props.profile}/> : <Preloader/>}
        </div>


    }

}

let mapStateToProps = (state: TypeStoreReducer): TypeMapStateToPropsProfile => {
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.isPreloader,
        status:state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect<TypeMapStateToPropsProfile, TypeMapDispatchToPropsProfile, {},
        TypeStoreReducer>(mapStateToProps, {setProfileThunkCreator,setTextStatusAC,setStatusThunkCreator}),
    withRouter,
)(ProfileConteiner)

