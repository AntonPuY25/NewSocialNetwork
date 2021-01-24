import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {TypePropsHeaderComponent, TypeResponseDataAuth, TypeStoreReducer} from "../Types/Types";
import {SetAuthDataAC, SetAuthIsAuthTestAC} from "../Redux/Reducers/authReducer";
import {getAuthApi} from "../DALL/api";

class HeaderComponent extends React.Component<TypePropsHeaderComponent, any> {

    componentDidMount() {
        getAuthApi.checkLogin().then((data: TypeResponseDataAuth) => {
            return (data.resultCode === 0) ?
                (this.props.SetAuthIsAuthTestAC(true),
                    this.props.SetAuthDataAC(data.data)) :
                this.props.SetAuthIsAuthTestAC(false)
        })
    }

    render() {

        return <div>
            <Header isAuth={this.props.isAuth} email={this.props.email}/>

        </div>

    }


}

let mapStateToProps = (state: TypeStoreReducer) => {
    return {
        email: state.authPage.data.email,
        isAuth: state.authPage.isAuth
    }
}
export default connect(mapStateToProps, {SetAuthDataAC, SetAuthIsAuthTestAC})(HeaderComponent)