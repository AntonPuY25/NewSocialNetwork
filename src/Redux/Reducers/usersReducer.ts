import {User} from "../../Profile/Users/users";

export type TypeInitialStateUsers = {
    users: Array<User>
}
export  type TypeAction = {
    type?: string
    id?: number
    arr?:TypeInitialStateUsers
}
let initialState: TypeInitialStateUsers = {
    users: []
}
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UN_FOLLOW";
const GETUSERS="GET_USERS"
export const FollowAC:(value:number)=>TypeAction=(id)=>({type:FOLLOW,id:id})
export const UnFollowAC:(value:number)=>TypeAction=(id)=>({type:UNFOLLOW,id:id})
export const getUsersAC:(value:Array<User>)=>void
    =(arr:Array<User>)=>({type:GETUSERS,arr:arr})
let usersReducer =(state:TypeInitialStateUsers = initialState,action:TypeAction)=>{
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users:state.users.map(i=>{
                    if(i.id === action.id){
                        return {...i,followed:false}
                    }
                    return i  }
                )
            }
        case UNFOLLOW:
            return{
                ...state,
                users:state.users.map(i=>{
                    if(i.id === action.id){
                        return  {...i,followed:true}
                    }
                    return i
                })
            }
        case GETUSERS:

            return {

                users:action.arr

            }

        default:
            return state
    }
}





export default usersReducer;

