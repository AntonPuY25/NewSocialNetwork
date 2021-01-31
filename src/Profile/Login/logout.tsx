import React from "react";
import {TypeLogoutContainerProps} from "../../Types/Types";
import {Redirect} from "react-router-dom";

const Logout = (props:TypeLogoutContainerProps)=>{

    const logoutFun = ()=>{
        props.logoutThunkCreator()
    }
    return<div>
        {props.isAuth? <button onClick={logoutFun}>Logout</button>:
            <Redirect to={'/login'}/>}

    </div>
}
export default Logout