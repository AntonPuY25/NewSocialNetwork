import {ActionsProfile} from "../../Redux/Reducers/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {
    TypeActionProfileReducer,
    TypeMapDispatchToPropsPostConteiner,
    TypeMapStateToPropsPostConteiner,
    TypeStoreReducer
} from "../../Types/Types";
import {Dispatch} from "react";
import React from "react";

let mapStateToProps = (state: TypeStoreReducer):TypeMapStateToPropsPostConteiner => {
    return {
        dataPost: state.profilePage.postData.dataPost,
        valueTextPost: state.profilePage.valueTextPost
    }
}
let mapDispatchToProps = (dispatch: Dispatch<TypeActionProfileReducer>):TypeMapDispatchToPropsPostConteiner => {
    return {
        addPost: () => {
            dispatch(ActionsProfile.PostAC())
        },
        onChangePostText: (text: string) => {
            dispatch(ActionsProfile.PostTextAC(text))
        }
    }
}
let PostsConteiner = connect<TypeMapStateToPropsPostConteiner,TypeMapDispatchToPropsPostConteiner,
    {},TypeStoreReducer>(mapStateToProps, mapDispatchToProps)(Posts);

const MemoContainer = React.memo(PostsConteiner)

export default MemoContainer;