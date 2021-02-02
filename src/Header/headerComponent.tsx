import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {
    TypeMapDispatchToPropsHeader,
    TypeMapStateToPropsHeader,
    TypePropsHeaderComponent,
    TypeStoreReducer
} from "../Types/Types";

class HeaderComponent extends React.Component<TypePropsHeaderComponent, any> {


    render() {
        return <div>
            <Header isAuth={this.props.isAuth} email={this.props.email}/>
        </div>

    }


}

let mapStateToProps = (state: TypeStoreReducer):TypeMapStateToPropsHeader => {
    return {
        email: state.authPage.email,
        isAuth: state.authPage.isAuth
    }
}
export default connect<TypeMapStateToPropsHeader,TypeMapDispatchToPropsHeader
    ,{},TypeStoreReducer>(mapStateToProps, )(HeaderComponent)