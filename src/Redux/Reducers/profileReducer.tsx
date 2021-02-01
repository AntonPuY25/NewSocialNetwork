import {
    PostType,
    ResultCodeEnum,
    TypeActionProfileReducer,
    TypeInitialStateProfile,
    TypeResponseDataProfile,
    TypeResponseDataProfileStatus,
    TypeResponseSetDataProfileStatus,
    TypeStoreReducer,
} from "../../Types/Types";
import {getProfileApi} from "../../DALL/api";
import {ThunkAction} from "redux-thunk";



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
    isPreloader: false,
    status: "New Status"

}


let profileReducer = (state: TypeInitialStateProfile = initialState, action: TypeActionProfileReducer): TypeInitialStateProfile => {
    switch (action.type) {
        case 'ADD_TEXT_POST':
            return {
                ...state,
                valueTextPost: action.text || ""

            };
        case 'ADD_POST':
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
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.data,
            };


        case 'SET_PRELOADER':
            return {
                ...state,
                isPreloader: action.preloader
            }
        case 'SET_STATUS_TEXT':
            return {
                ...state,
                status: action.textStatus
            }

        default:
            return state
    }
}
export const ActionsProfile = {
    PostTextAC:(text: string) => {
        return {
            type: 'ADD_TEXT_POST',
            text

        }  as const
    },
    PostAC:() => {
        return {
            type: 'ADD_POST'
        } as const
    },
    setProfileDataAC:(data: TypeResponseDataProfile) => {
        return {
            type: 'SET_PROFILE',
            data
        } as const
    },
    setPreloaderAC:(preloader: boolean) => {
        return {
            type: 'SET_PRELOADER',
            preloader
        } as const
    },
    setTextStatusAC:(textStatus: any) => {
        return {
            type: 'SET_STATUS_TEXT',
            textStatus
        } as const
    }
}




export const setProfileThunkCreator = (userId: string): ThunkAction<void, TypeStoreReducer,
    unknown, TypeActionProfileReducer> => {
    return (dispatch) => {
        getProfileApi.getProfile(userId).then((data: TypeResponseDataProfile) => {
            getProfileApi.getStatusProfile(userId).then((data: TypeResponseDataProfileStatus) => {
                dispatch(ActionsProfile.setTextStatusAC(data))
            })
            dispatch(ActionsProfile.setProfileDataAC(data))
            dispatch(ActionsProfile.setPreloaderAC(true))
        })
    }
}

export const setStatusThunkCreator = (textStatus:string):ThunkAction<void, TypeStoreReducer,
    unknown, TypeActionProfileReducer> => {
    return (dispatch) => {
        getProfileApi.setStatusProfile(textStatus).then((data:TypeResponseSetDataProfileStatus)=>{
            if(data.resultCode===ResultCodeEnum.Sucsses){
                dispatch(ActionsProfile.setTextStatusAC(textStatus))
            }

        })
    }
}
export default profileReducer;