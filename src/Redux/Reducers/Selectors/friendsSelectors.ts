import {TypeStore} from "../../../Types/Types";

export const getFriends = (state:TypeStore)=>{
    return state.friendsPage.friends.filter((friend => friend.followed))
}
