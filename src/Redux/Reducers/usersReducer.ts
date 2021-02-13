import {
    TypeActionUserReducer,
    TypeActionFollow, TypeActionGetUsers,
    TypeActionSetCountPage,
    TypeActionSetPage,
    TypeActionSetPreloader, TypeActionUnFollow,
    TypeInitialStateUsers, User, TypeActionDisabledButton,
} from "../../Types/Types";
import {getUsersApi} from "../../DALL/api";
import {ThunkAction} from "redux-thunk";


let initialState: TypeInitialStateUsers = {
    users: [],
    pageNumber: 1,
    count: 10,
    countPage: 10,
    isPreloader: true,
    disabledButton: []
}
export const SetPreloader = "user/SET_PRELOADER";
export const FOLLOW = "user/FOLLOW";
export const SET_COUNTPAGE = "user/SET_COUNT_PAGE";
export const UNFOLLOW = "user/UN_FOLLOW";
export const GET_USERS = "user/GET_USERS";
export const SET_PAGENUMBER = "user/SET_PAGE_NUMBER";
export const SET_DISABLED_BUTTON = "user/SET_DISABLED_BUTTON";

export const setDisabledButtonAC = (isDisable: Array<number>): TypeActionDisabledButton => {
    return {
        type: SET_DISABLED_BUTTON,
        isDisable

    }
}
export const setCountPAgeAC = (countPage: number): TypeActionSetCountPage => {
    return {
        type: SET_COUNTPAGE,
        countPage
    }
}
export const SetPreloaderAC = (preloader: boolean): TypeActionSetPreloader => {
    return {
        type: SetPreloader,
        preloader
    }
}
export const setPageAC = (pageNumber: number): TypeActionSetPage => ({type: SET_PAGENUMBER, pageNumber})
export const FollowAC = (id: number): TypeActionFollow => ({type: FOLLOW, id: id})
export const UnFollowAC = (id: number): TypeActionUnFollow => ({type: UNFOLLOW, id: id})
export const getUsersAC = (arr: Array<User>): TypeActionGetUsers => ({type: GET_USERS, arr: arr})

export const getUsersThunkCreator = (pageNumber: number, count: number): ThunkAction<void, TypeInitialStateUsers, unknown, TypeActionUserReducer> => {
    return async (dispatch) => {
        dispatch(SetPreloaderAC(true))
        let data = await getUsersApi.getUsersPages(pageNumber, count);
        dispatch(getUsersAC(data.items))
        dispatch(SetPreloaderAC(false))


    }
}
export const getPageUsersThunkCreator = (id: number, count: number): ThunkAction<void, TypeInitialStateUsers, unknown, TypeActionUserReducer> => {
    return async (dispatch) => {
        dispatch(SetPreloaderAC(true))
        dispatch(setPageAC(id))
        let data = await getUsersApi.getUsersPageNumber(id, count)

        dispatch(getUsersAC(data.items))
        dispatch(SetPreloaderAC(false))

    }
}
export const followThunkCreator = (userId: number): ThunkAction<void, TypeInitialStateUsers, unknown, TypeActionUserReducer> => {
    return async (dispatch) => {
        dispatch(setDisabledButtonAC([userId]))
      let data = await  getUsersApi.followUsersApi(userId);
            if (data.resultCode === 0) {
                dispatch(FollowAC(userId))
                dispatch(setDisabledButtonAC([]))
            }
    }
}
export const unFollowThunkCreator = (userId: number): ThunkAction<void, TypeInitialStateUsers, unknown, TypeActionUserReducer> => {
    return async (dispatch) => {
        dispatch(setDisabledButtonAC([userId]))
      let data = await getUsersApi.UnfollowUsersApi(userId);
            if (data.resultCode === 0) {
                dispatch(UnFollowAC(userId))
                dispatch(setDisabledButtonAC([]))
            }

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
        case GET_USERS:

            return {
                ...state,
                users: action.arr

            }
        case SET_PAGENUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber
            }

        case SET_COUNTPAGE:
            return {
                ...state,
                countPage: action.countPage
            }
        case "user/SET_PRELOADER":
            return {
                ...state,
                isPreloader: action.preloader
            }
        case "user/SET_DISABLED_BUTTON":
            return {
                ...state,
                disabledButton: action.isDisable
            }
        default:
            return state
    }
}


export default usersReducer;

