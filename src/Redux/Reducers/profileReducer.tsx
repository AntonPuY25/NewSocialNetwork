import {
    PostType, TypeActionProfileReducer,
    TypeAddPostAction, TypeAddPostTextAction,
    TypeInitialStateProfile,
    TypePreloaderProfile,
    TypeProfileData,
    TypeResponseDataProfile
} from "../../Types/Types";
import {getProfileApi} from "../../DALL/api";


export const ADD_TEXT_POST = "ADD_TEXT_POST";
export const ADD_POST = "ADD_POST";
export const SET_PROFILE = "SET_PROFILE"
export const SET_PRELOADER = "SET_PRELOADER"

let initialState = {
    postData: {
        dataPost: [
            {
                id: 1,
                name: 'Anton',
                date: '21.12.2020',
                textPost: 'Hello this is my first Post',
                likes: 22,
                imgPost: 'post1',

            },
            {
                id: 2,
                name: 'Yana',
                date: '22.12.2020',
                textPost: 'Hello ,Anton',
                likes: 15,
                imgPost: 'post2',

            }
        ],
    },
    valueTextPost: '',
    profile: {} as TypeResponseDataProfile,
    isPreloader: false

}


let profileReducer = (state: TypeInitialStateProfile = initialState, action: TypeActionProfileReducer): TypeInitialStateProfile => {
    switch (action.type) {
        case ADD_TEXT_POST:
            return {
                ...state,
                valueTextPost: action.text || ""

            };
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                name: 'Anton',
                date: '21.12.2020',
                textPost: state.valueTextPost,
                likes: 0,
                imgPost: 'post1',

            }

            return {
                ...state,
                postData: {
                    ...state.postData,
                    dataPost: [...state.postData.dataPost, newPost]
                },
                valueTextPost: ""


            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.data
            };
        case SET_PRELOADER:
            return {
                ...state,
                isPreloader: action.preloader
            }

        default:
            return state
    }
}
export const PostTextAC = (text: string): TypeAddPostTextAction => {
    return {
        type: ADD_TEXT_POST,
        text

    } as const
}
export const PostAC = (): TypeAddPostAction => {
    return {
        type: ADD_POST
    }
}
export const setProfileDataAC = (data: TypeResponseDataProfile): TypeProfileData => {
    return {
        type: SET_PROFILE,
        data
    }
}
export const setPreloaderAC = (preloader: boolean): TypePreloaderProfile => {
    return {
        type: SET_PRELOADER,
        preloader
    }
}

export const setProfileThunkCreator = (userId: string): any => {
    return (dispatch: any) => {
        getProfileApi.getProfile(userId).then((data: TypeResponseDataProfile) => {
            dispatch(setProfileDataAC(data))
            dispatch(setPreloaderAC(true))

        })
    }
}
export default profileReducer;