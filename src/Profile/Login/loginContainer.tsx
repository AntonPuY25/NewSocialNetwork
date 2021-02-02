import React from "react";
import Login from "./login";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/Reducers/authReducer";
import {
    TypeContainerLoginProps,
    TypeMapDispatchToPropsLogin,
    TypeMapStateToPropsLogin,
    TypeStoreReducer
} from "../../Types/Types";

const ContainerLogin = (props:TypeContainerLoginProps)=>{

    return<div>
        <Login isAuth={props.isAuth} loginThunkCreator={props.loginThunkCreator} />
    </div>

}
const mapStateToProps =(state: TypeStoreReducer):TypeMapStateToPropsLogin=> {
      return {
          isAuth:state.authPage.isAuth
      }
}
const connectContainerLogin = connect<TypeMapStateToPropsLogin,TypeMapDispatchToPropsLogin,{},
    TypeStoreReducer>(mapStateToProps,
    {loginThunkCreator})(ContainerLogin)
export default connectContainerLogin;