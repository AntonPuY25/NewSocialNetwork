import React from "react";
import {TypeLogoutContainerProps} from "../../Types/Types";
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutSagaAC} from "../../Redux/Reducers/saga/authSaga";

const Logout = (props:TypeLogoutContainerProps)=>{
    const dispatch = useDispatch()
    const logoutFun = ()=>{
        dispatch(logoutSagaAC())
    }
    return<div>
        {props.isAuth? <button onClick={logoutFun}>Logout</button>:
            <Redirect to={'/login'}/>}

    </div>
}
export default Logout