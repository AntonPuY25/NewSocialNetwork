import {PostAC, PostTextAC} from "../../Redux/Reducers/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {TypeStoreReducer} from "../../Redux/reduxStore";

let mapStateToProps = (state: TypeStoreReducer) => {
    return {
        dataPost: state.profilePage.postData.dataPost,
        valueTextPost: state.profilePage.valueTextPost
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(PostAC())
        },
        onChangePostText: (text: string) => {
            dispatch(PostTextAC(text))
        }
    }
}
let PostsConteiner = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsConteiner;