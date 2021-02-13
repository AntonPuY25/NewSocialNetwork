import React from "react";
import Logout from "./logout";
import {connect} from "react-redux";
import {
    TypeLogoutContainerProps,
    TypeMapDispatchToPropsLogout,
    TypeMapStateToPropsLogout,
    TypeStore
} from "../../Types/Types";
import {logoutThunkCreator} from "../../Redux/Reducers/authReducer";

const LogoutConteriner = (props:TypeLogoutContainerProps)=>{
    return<div>
        <Logout isAuth={props.isAuth} logoutThunkCreator={props.logoutThunkCreator}/>
    </div>
}
let mapStateToProps =(state: TypeStore):TypeMapStateToPropsLogout=> {
    return {
        isAuth:state.authPage.isAuth
    }
}
export default  connect<TypeMapStateToPropsLogout,TypeMapDispatchToPropsLogout,
    {}, TypeStore>(mapStateToProps,{logoutThunkCreator})(LogoutConteriner)