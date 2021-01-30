import React from "react";
import {Redirect} from "react-router-dom";
import {TypeMapStateToPropsHoc, TypeStoreReducer} from "../Types/Types";
import {connect} from "react-redux";

const mapStateToPropsRedirect = (state: TypeStoreReducer): TypeMapStateToPropsHoc => {
    return {
        isAuth: state.authPage.isAuth
    }
}
export const RedirectHoc = <P extends object>(PropsComponent: React.ComponentType<P>) => {

    const RedirectComponent: React.FC<TypeMapStateToPropsHoc>
        = (props) => {
        return (props.isAuth) ? <PropsComponent{...props as P}/> : <Redirect to={'/login'}/>
    }
    return connect(mapStateToPropsRedirect)(RedirectComponent)

}
