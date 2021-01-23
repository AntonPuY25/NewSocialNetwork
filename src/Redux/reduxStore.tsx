import {createStore, combineReducers} from 'redux';
import dialogsReducer from "./Reducers/dealogsReducer";
import profileReducer from "./Reducers/profileReducer";
import usersReducer from "./Reducers/usersReducer";
import MusicReducer from "./Reducers/musicReducer";
import authResucer from "./Reducers/authReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    musicPage:MusicReducer,
    authPage:authResucer
})

let store = createStore(reducers);

export default store;