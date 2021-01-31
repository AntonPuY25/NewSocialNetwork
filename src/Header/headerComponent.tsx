import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {
    TypeMapDispatchToPropsHeader,
    TypeMapStateToPropsHeader,
    TypePropsHeaderComponent,
    TypeStoreReducer
} from "../Types/Types";
import {authThunkCreator} from "../Redux/Reducers/authReducer";

class HeaderComponent extends React.Component<TypePropsHeaderComponent, any> {

    componentDidMount() {
        this.props.authThunkCreator()
    }

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
    ,{},TypeStoreReducer>(mapStateToProps, {authThunkCreator})(HeaderComponent)