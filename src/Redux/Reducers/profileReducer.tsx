import {
    PostType,
    ResultCodeEnum,
    TypeActionProfileReducer,
    TypeInitialStateProfile,
    TypeResponseDataProfile,
    TypeStore,
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
        case 'profile/ADD_TEXT_POST':
            return {
                ...state,
                valueTextPost: action.text || ""

            };
        case 'profile/ADD_POST':
            let newPost: PostType = {
                id: 5,
                name: 'Anton',
                date: '21.12.2020',
                textPost: state.valueTextPost,
                likes: 0,
                imgPost: 'post2',

            }

            return {
                ...state,
                postData: {
                    ...state.postData,
                    dataPost: [newPost,...state.postData.dataPost]
                },
                valueTextPost: ""


            };
        case 'profile/SET_PROFILE':
            return {
                ...state,
                profile: action.data,
            };


        case 'profile/SET_PRELOADER':
            return {
                ...state,
                isPreloader: action.preloader
            }
        case 'profile/SET_STATUS_TEXT':
            return {
                ...state,
                status: action.textStatus
            }
        case "profile/SET_PHOTO":{

            return {

                ...state,
                profile:{...state.profile,
                photos:action.photo
                }
            }
        }
        case "profile/UPDATE_PROFILE_INFO":{
            return{
                ...state,
                profile:action.dataInfo

            }
        }

        default:
            return state
    }
}
export const ActionsProfile = {
    PostTextAC:(text: string) => {
        return {
            type: 'profile/ADD_TEXT_POST',
            text

        }  as const
    },
    PostAC:() => {
        return {
            type: 'profile/ADD_POST'
        } as const
    },
    setProfileDataAC:(data: TypeResponseDataProfile) => {
        return {
            type: 'profile/SET_PROFILE',
            data
        } as const
    },
    setPreloaderAC:(preloader: boolean) => {
        return {
            type: 'profile/SET_PRELOADER',
            preloader
        } as const
    },
    setTextStatusAC:(textStatus: any) => {
        return {
            type: 'profile/SET_STATUS_TEXT',
            textStatus
        } as const
    },
    setNewPhotoAC:(photo: any) => {
        return {
            type: 'profile/SET_PHOTO',
            photo
        } as const
    },
    updateProfileInfo:(dataInfo:TypeResponseDataProfile) => {
        return {
            type: 'profile/UPDATE_PROFILE_INFO',
            dataInfo
        } as const
    }
}




export const setProfileThunkCreator =  (userId: string): ThunkAction<Promise<void>, any,
    TypeStore, TypeActionProfileReducer> => {
    return async (dispatch) => {

        let dataProfile = await getProfileApi.getProfile(userId);
           let dataStatus = await getProfileApi.getStatusProfile(userId);
            dispatch(ActionsProfile.setTextStatusAC(dataStatus))

            dispatch(ActionsProfile.setProfileDataAC(dataProfile))
            dispatch(ActionsProfile.setPreloaderAC(true))

    }
}

export const setStatusThunkCreator = (textStatus:string):ThunkAction<Promise<void>, any,
    TypeStore, TypeActionProfileReducer> => {
    return async (dispatch) => {
       let data = await getProfileApi.setStatusProfile(textStatus);
            if(data.resultCode===ResultCodeEnum.Sucsses){
                dispatch(ActionsProfile.setTextStatusAC(textStatus))
            }


    }
}
export const setPhotoThunkCreator = (photos:any):ThunkAction<Promise<void>, any,
    TypeStore, TypeActionProfileReducer>=>{
    return async (dispatch)=>{
        let data = await getProfileApi.uploadPhoto(photos);
            if(data.resultCode===0){
                 dispatch(ActionsProfile.setNewPhotoAC(data.data.photos))
            }else{
                alert('Error')
            }

    }
}

export const updateProfileInfoThunkCreator = (dataInfo:TypeResponseDataProfile):ThunkAction<Promise<void>, any,
    TypeStore, TypeActionProfileReducer>=>{

    return async (dispatch)=>{
        let data = await getProfileApi.updateProfileInfo(dataInfo);

        console.log(data)
        if(data.resultCode===0){
            dispatch(ActionsProfile.updateProfileInfo(dataInfo))
        }else{
            alert('Error')
        }

    }
}
export default profileReducer;