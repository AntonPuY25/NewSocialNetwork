import {ThunkAction} from "redux-thunk";
import {getUsersApi} from "../../DALL/api";
import {UserType} from "../../Types/Types";

export type TypeFriendsState = {
    friends: Array<UserType>

}
const initialState: TypeFriendsState = {
    friends: [],

}
const SET_FRIENDS = "/friendsReducer/SET_FRIENDS"
export const setFriendsAC = (friends: Array<UserType>) => {
    return {
        type: SET_FRIENDS,
        friends
    } as const
}

type TypeSetFriends = ReturnType<typeof setFriendsAC>
type TypeActions = TypeSetFriends;
const FriendsReducer = (state: TypeFriendsState = initialState, action: TypeActions): TypeFriendsState => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {
                ...state,
                friends: action.friends
            }
        }


        default:
            return state
    }

}

export const friendsThunkCreator = (): ThunkAction<void, TypeFriendsState, unknown, TypeActions> => async (dispatch) => {

    const friends = await getUsersApi.getUsersPages(104, 100)
    dispatch(setFriendsAC(friends.items))
}
export default FriendsReducer;