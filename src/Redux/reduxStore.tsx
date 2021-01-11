import {createStore, combineReducers} from 'redux';
import dialogsReducer, {TypeInitialStateDialogs} from "./Reducers/dealogsReducer";
import profileReducer, {TypeInitialStateProfile} from "./Reducers/profileReducer";
import usersReducer, {TypeInitialStateUsers} from "./Reducers/usersReducer";

export type TypeStoreReducer = {
    profilePage: TypeInitialStateProfile
    dialogsPage: TypeInitialStateDialogs
    usersPage:TypeInitialStateUsers

}
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
})

let store = createStore(reducers);

export default store;