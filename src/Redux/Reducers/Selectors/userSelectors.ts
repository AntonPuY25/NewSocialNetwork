import {TypeStoreReducer} from "../../../Types/Types";
import {createSelector} from 'reselect'

export const getUsersSelector = (state:TypeStoreReducer)=>{
    return state.usersPage.users
}



export const reselectGetUsers = createSelector(getUsersSelector,(users)=> {
    return users.filter(user=>user)
})


export const getCountUsersSelector = (state:TypeStoreReducer)=>{
    return state.usersPage.count
}
export const getPageNumberSelector = (state:TypeStoreReducer)=>{
    return state.usersPage.pageNumber
}
export const getCountPageSelector = (state:TypeStoreReducer)=>{
    return state.usersPage.countPage
}
export const getisPreloaderSelector = (state:TypeStoreReducer)=>{
    return state.usersPage.isPreloader
}
export const getDisabledButtonSelector = (state:TypeStoreReducer)=>{
    return state.usersPage.disabledButton
}