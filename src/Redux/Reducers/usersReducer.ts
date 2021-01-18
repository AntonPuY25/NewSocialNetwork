import {User} from "../../Profile/Users/users";

export type TypeInitialStateUsers = {
    users: Array<User>
    count: number
    pageNumber: number
    countPage: number
    isPreloader: boolean
}
type TypeActionFollow = {
    type: typeof FOLLOW
    id: number
}
type TypeActionUnFollow = {
    type: typeof UNFOLLOW
    id: number
}
type TypeActionSetCountPage = {
    type: typeof SETCOUNTPAGE
    countPage: number
}
type TypeActionSetPage = {
    type: typeof SETPAGENUMBER
    pageNumber: number
}
type TypeActionGetUsers = {
    type: typeof GETUSERS
    arr: Array<User>
}
type TypeActionSetPreloader = {
    type: typeof SetPreloader
    preloader: boolean
}
export  type TypeAction = TypeActionFollow | TypeActionUnFollow | TypeActionSetCountPage
    | TypeActionSetPage | TypeActionGetUsers | TypeActionSetPreloader;

let initialState: TypeInitialStateUsers = {
    users: [],
    pageNumber: 1,
    count: 10,
    countPage: 10,
    isPreloader: false


}
const SetPreloader = "SET_PRELOADER";
const FOLLOW = "FOLLOW";
const SETCOUNTPAGE = "SET_COUNT_PAGE";
const UNFOLLOW = "UN_FOLLOW";
const GETUSERS = "GET_USERS";
const SETPAGENUMBER = "SET_PAGE_NUMBER";

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


let usersReducer = (state: TypeInitialStateUsers = initialState, action: TypeAction): TypeInitialStateUsers => {
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
        default:
            return state
    }
}


export default usersReducer;

