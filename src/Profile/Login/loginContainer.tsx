import React from "react";
import Login from "./login";
import {connect} from "react-redux";
import {
    TypeContainerLoginProps,
    TypeMapStateToPropsLogin,
    TypeStore
} from "../../Types/Types";

const ContainerLogin:React.FC<TypeContainerLoginProps> = ({isAuth,captchaUrl})=>{

    return<div>
        <Login isAuth={isAuth} captchaUrl={captchaUrl}   />
    </div>

}
const mapStateToProps =(state: TypeStore):TypeMapStateToPropsLogin=> {
      return {
          isAuth:state.authPage.isAuth,
          captchaUrl:state.authPage.captchaUrl
      }
}
const connectContainerLogin = connect(mapStateToProps,{})(ContainerLogin)
export default connectContainerLogin;