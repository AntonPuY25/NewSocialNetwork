import {createStore, combineReducers} from 'redux';
import dialogsReducer, {TypeInitialStateDialogs} from "./Reducers/dealogsReducer";
import profileReducer, {TypeInitialStateProfile} from "./Reducers/profileReducer";
import usersReducer, {TypeInitialStateUsers} from "./Reducers/usersReducer";
import MusicReducer, {TypeInitialStateMusic} from "./Reducers/musicReducer";

export type TypeStoreReducer = {
    profilePage: TypeInitialStateProfile
    dialogsPage: TypeInitialStateDialogs
    usersPage:TypeInitialStateUsers
    musicPage:TypeInitialStateMusic

}
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    musicPage:MusicReducer,
})

let store = createStore(reducers);

export default store;