import React from "react";
import Logout from "./logout";
import {connect} from "react-redux";
import {
    TypeLogoutContainerProps,
    TypeMapStateToPropsLogout,
    TypeStore
} from "../../Types/Types";

const LogoutConteriner = (props:TypeLogoutContainerProps)=>{
    return<div>
        <Logout isAuth={props.isAuth}/>
    </div>
}
let mapStateToProps =(state: TypeStore):TypeMapStateToPropsLogout=> {
    return {
        isAuth:state.authPage.isAuth
    }
}
export default  connect(mapStateToProps,)(LogoutConteriner)