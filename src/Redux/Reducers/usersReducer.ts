import {
    TypeActionUserReducer,
    TypeActionFollow, TypeActionGetUsers,
    TypeActionSetCountPage,
    TypeActionSetPage,
    TypeActionSetPreloader, TypeActionUnFollow,
    TypeInitialStateUsers, User, TypeActionDisabledButton, TypeResponseDataUsers, TypeUserResponseData
} from "../../Types/Types";
import {getUsersApi} from "../../DALL/api";



let initialState: TypeInitialStateUsers = {
    users: [],
    pageNumber: 1,
    count: 10,
    countPage: 10,
    isPreloader: true,
    disabledButton:[]
}
// 14339,14338
export const SetPreloader = "SET_PRELOADER";
export const FOLLOW = "FOLLOW";
export const SETCOUNTPAGE = "SET_COUNT_PAGE";
export const UNFOLLOW = "UN_FOLLOW";
export const GETUSERS = "GET_USERS";
export const SETPAGENUMBER = "SET_PAGE_NUMBER";
export const SET_DISABLED_BUTTON = "SET_DISABLED_BUTTON";

export const setDisabledButtonAC = (isDisable:Array<number>):TypeActionDisabledButton=>{
    return {
        type:SET_DISABLED_BUTTON,
        isDisable

    }
}
export const setCountPAgeAC = (countPage: number): TypeActionSetCountPage => {
    return {
        type: SETCOUNTPAGE,
        countPage
    }
}
export const SetPreloaderAC = (preloader: boolean): TypeActionSetPreloader => {
    return {
        type: SetPreloader,
        preloader
    }
}
export const setPageAC = (pageNumber: number): TypeActionSetPage => ({type: SETPAGENUMBER, pageNumber})
export const FollowAC = (id: number): TypeActionFollow => ({type: FOLLOW, id: id})
export const UnFollowAC = (id: number): TypeActionUnFollow => ({type: UNFOLLOW, id: id})
export const getUsersAC = (arr: Array<User>): TypeActionGetUsers => ({type: GETUSERS, arr: arr})

export const getUsersThunkCreator = (pageNumber:number,count:number):any=>{
    return (dispatch:any)=>{
        dispatch(SetPreloaderAC(true))
        getUsersApi.getUsersPages(pageNumber, count).then((data: TypeResponseDataUsers) => {
            dispatch(getUsersAC(data.items))
            dispatch(SetPreloaderAC(false))
        })

    }
}
export const getPageUsersThunkCreator = (id:number, count:number):any=>{
    return (dispatch:any)=>{
        dispatch(SetPreloaderAC(true))
        dispatch(setPageAC(id))
        getUsersApi.getUsersPageNumber(id,count)
            .then((data: TypeResponseDataUsers) => {
                dispatch(getUsersAC(data.items))
                dispatch(SetPreloaderAC(false))
            })
    }
}
export const followThunkCreator = (userId:number):any=>{
    return (dispatch:any)=>{
        dispatch(setDisabledButtonAC([userId]))
        getUsersApi.followUsersApi(userId).then((data: TypeUserResponseData) => {
            if (data.resultCode === 0) {
                dispatch(FollowAC(userId))
                dispatch(setDisabledButtonAC([]))
            }

        })
    }
}
export const unFollowThunkCreator = (userId:number):any=>{
    return (dispatch:any)=>{
        dispatch(setDisabledButtonAC([userId]))
        getUsersApi.UnfollowUsersApi(userId).then((data: TypeUserResponseData) => {
            if (data.resultCode === 0) {
                dispatch(UnFollowAC(userId))
                dispatch(setDisabledButtonAC([]))
            }

        })
    }
}

let usersReducer = (state: TypeInitialStateUsers = initialState, action: TypeActionUserReducer): TypeInitialStateUsers => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(i => {
                        if (i.id === action.id) {
                            return {...i, followed: false}
                        }
                        return i
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(i => {
                    if (i.id === action.id) {
                        return {...i, followed: true}
                    }
                    return i
                })
            }
        case GETUSERS:

            return {
                ...state,
                users: action.arr

            }
        case SETPAGENUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber
            }

        case SETCOUNTPAGE:
            return {
                ...state,
                countPage: action.countPage
            }
        case "SET_PRELOADER":
            return {
                ...state,
                isPreloader: action.preloader
            }
        case "SET_DISABLED_BUTTON":
            return {
                ...state,
                disabledButton:action.isDisable
            }
        default:
            return state
    }
}


export default usersReducer;

