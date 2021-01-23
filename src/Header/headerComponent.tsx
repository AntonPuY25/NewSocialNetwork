import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import { TypePropsHeaderComponent, TypeResponseDataAuth, TypeStoreReducer} from "../Types/Types";
import axios from "axios";
import {SetAuthDataAC, SetAuthIsAuthTestAC} from "../Redux/Reducers/authReducer";

class HeaderComponent extends React.Component<TypePropsHeaderComponent,any>{

    componentDidMount() {
        axios.get<TypeResponseDataAuth>(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials:true
            })
            .then((response) => {

               return  (response.data.resultCode=== 0)?
                 (this.props.SetAuthIsAuthTestAC(true),
                     this.props.SetAuthDataAC(response.data.data)):
                        this.props.SetAuthIsAuthTestAC(false)
            })
    }
    render(){

        return<div>
            <Header isAuth={this.props.isAuth} email={this.props.email} />

        </div>

    }



}

let mapStateToProps=(state:TypeStoreReducer)=>{
    return{
        email:state.authPage.data.email,
        isAuth:state.authPage.isAuth
    }
}
export default connect(mapStateToProps,{SetAuthDataAC,SetAuthIsAuthTestAC})(HeaderComponent)