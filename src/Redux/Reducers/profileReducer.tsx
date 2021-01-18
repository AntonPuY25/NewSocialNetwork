import {TypeResponseDataProfile} from "../../Profile/profileConteiner";

const ADD_TEXT_POST = "ADD_TEXT_POST";
const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE"
const SET_PRELOADER = "SET_PRELOADER"
export type PostType = {
    id: number
    name: string
    date: string
    textPost: string
    likes: number
    imgPost: string

}
export type TypeAddPostAction = ReturnType<typeof PostAC>;
export type TypeAddPostTextAction = ReturnType<typeof PostTextAC>
export type TypeProfileData = ReturnType<typeof setProfileDataAC>
export type TypePreloaderProfile = ReturnType<typeof setPreloaderAC>

export  type TypeAction = TypeAddPostAction | TypeAddPostTextAction | TypeProfileData | TypePreloaderProfile;
export type TypePostData = {
    dataPost: Array<PostType>
}
export type TypeInitialStateProfile = {
    postData: TypePostData
    valueTextPost: string
    profile: TypeResponseDataProfile
    isPreloader: boolean
}
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


let profileReducer = (state: TypeInitialStateProfile = initialState, action: TypeAction): TypeInitialStateProfile => {
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
                likes: 22,
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
export const PostTextAC = (text: string) => {
    return {
        type: ADD_TEXT_POST,
        text

    } as const
}
export const PostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const setProfileDataAC = (data: TypeResponseDataProfile) => {
    return {
        type: SET_PROFILE,
        data
    } as const
}
export const setPreloaderAC = (preloader: boolean) => {
    return {
        type: SET_PRELOADER,
        preloader
    } as const
}
export default profileReducer;