import {createStore, combineReducers} from 'redux';
import dialogsReducer from "./Reducers/dealogsReducer";
import profileReducer from "./Reducers/profileReducer";
import usersReducer from "./Reducers/usersReducer";
import MusicReducer from "./Reducers/musicReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    musicPage:MusicReducer,
})

let store = createStore(reducers);

export default store;