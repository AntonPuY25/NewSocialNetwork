import {connect} from "react-redux";
import {User} from "./users";
import {TypeStoreReducer} from "../../Redux/reduxStore";
import {FollowAC, getUsersAC, setPageAC, setTotalCount, UnFollowAC} from "../../Redux/Reducers/usersReducer";
import Users from "./usercClassComponent";


const mapStateToProps = (state:TypeStoreReducer)=>{
    return{
        users:state.usersPage.users,
        count:state.usersPage.count,
        totalCount:state.usersPage.totalCount,
        pageNumber: state.usersPage.pageNumber
    }
}
const mapDispatchToProps = (dispatch:any)=>{
    return{
        follow:(id:number)=>{
            dispatch(FollowAC(id))
        },
        unFollow:(id:number)=>{
            dispatch(UnFollowAC(id))
        },
        setUsers:(arr:Array<User>)=>{
            dispatch(getUsersAC(arr))
        },
        setPageNumber:(pageNumber:number)=>{
            dispatch(setPageAC(pageNumber))
        },
        setTotalCount:(totalCount:number)=>{
            dispatch(setTotalCount(totalCount))
        }
    }
}

const UserConteiner = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UserConteiner;