import React from "react";
import {TypeLogoutContainerProps} from "../../Types/Types";

const Logout = (props:TypeLogoutContainerProps)=>{

    const logoutFun = ()=>{
        props.logoutThunkCreator()
    }
    return<div>
        <button onClick={logoutFun}>Logout</button>
    </div>
}
export default Logout