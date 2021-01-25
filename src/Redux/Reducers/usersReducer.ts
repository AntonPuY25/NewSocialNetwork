import {
    TypeActionUserReducer,
    TypeActionFollow, TypeActionGetUsers,
    TypeActionSetCountPage,
    TypeActionSetPage,
    TypeActionSetPreloader, TypeActionUnFollow,
    TypeInitialStateUsers, User, TypeActionDisabledButton
} from "../../Types/Types";



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

