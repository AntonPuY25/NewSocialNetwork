import {User} from "../../Profile/Users/users";

export type TypeInitialStateUsers = {
    users: Array<User>
    count: number
    pageNumber: number
    countPage: number
}
export  type TypeAction = {
    type?: string
    id?: number
    arr?: TypeInitialStateUsers
    pageNumber?: number
    totalCount?: number
    countPage?: number
}
let initialState: TypeInitialStateUsers = {
    users: [],
    pageNumber: 1,
    count: 10,
    countPage: 10,


}
const FOLLOW = "FOLLOW";
const SETCOUNTPEGA = "SET_COUNT_PAGE";
const UNFOLLOW = "UN_FOLLOW";
const GETUSERS = "GET_USERS";
const SETPAGENUMBER = "SET_PAGE_NUMBER";
export const setCountPAgeAC: (value: number) => TypeAction = (countPage) => ({type: SETCOUNTPEGA, countPage})
export const setPageAC: (value: number) => TypeAction = (pageNumber) => ({type: SETPAGENUMBER, pageNumber})
export const FollowAC: (value: number) => TypeAction = (id) => ({type: FOLLOW, id: id})
export const UnFollowAC: (value: number) => TypeAction = (id) => ({type: UNFOLLOW, id: id})
export const getUsersAC: (value: Array<User>) => void
    = (arr: Array<User>) => ({type: GETUSERS, arr: arr})
let usersReducer = (state: TypeInitialStateUsers = initialState, action: TypeAction) => {
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

        case SETCOUNTPEGA:
            return {
                ...state,
                countPage: action.countPage
            }
        default:
            return state
    }
}


export default usersReducer;

