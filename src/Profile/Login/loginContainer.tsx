import React from "react";
import Login from "./login";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/Reducers/authReducer";
import {
    TypeContainerLoginProps,
    TypeMapDispatchToPropsLogin,
    TypeMapStateToPropsLogin,
    TypeStore
} from "../../Types/Types";

const ContainerLogin:React.FC<TypeContainerLoginProps> = ({isAuth,captchaUrl,loginThunkCreator})=>{

    return<div>
        <Login isAuth={isAuth} captchaUrl={captchaUrl}   loginThunkCreator={loginThunkCreator} />
    </div>

}
const mapStateToProps =(state: TypeStore):TypeMapStateToPropsLogin=> {
      return {
          isAuth:state.authPage.isAuth,
          captchaUrl:state.authPage.captchaUrl
      }
}
const connectContainerLogin = connect<TypeMapStateToPropsLogin,TypeMapDispatchToPropsLogin,{},
    TypeStore>(mapStateToProps,
    {loginThunkCreator})(ContainerLogin)
export default connectContainerLogin;