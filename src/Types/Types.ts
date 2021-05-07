import {ClosePageMessages, DialogAC} from "../Redux/Reducers/dealogsReducer";
import {
    FOLLOW,
    GET_USERS,
    SET_COUNTPAGE,
    SET_DISABLED_BUTTON,
    SET_PAGENUMBER,
    SetPreloader,
    UNFOLLOW,
} from "../Redux/Reducers/usersReducer";
import {AddSongAC} from "../Redux/Reducers/musicReducer";
import {ActionsProfile} from "../Redux/Reducers/profileReducer";
import {reducers} from "../Redux/reduxStore";
import {ActionsApp} from "../Redux/Reducers/saga/appSaga";
import {SetAuthIsAuthTestAC, SetCaptchaUrl, SetEmailAC, SetLoginAC, SetUserIdAC} from "../Redux/Reducers/saga/authSaga";
//APP
export type TypeAppProps={
    initialized:boolean
    initialThunkCreator:(initialized:boolean)=>void

}
//APP_REDUCER
export type TypeInitialState = {
    initialized:boolean
}
export type TypeActionsApp = ActionsTypeFromInfer<typeof ActionsApp>;
export type TypeMapStateToPropsApp = {
    initialized:boolean
}
export type TypeMapDispatchToPropsApp = {
    initialThunkCreator:(initialized:boolean)=>void
}

//PROFILE_CONTAINER
export type TypeContactsDataProfile = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}
export type TypePhotosDataProfile = {
    small: string
    large: string

}
export type TypeUserId = {
    userId: number
}
export type TypeResponseDataProfile = {
    aboutMe: string
    contacts: TypeContactsDataProfile
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: TypeUserId
    photos: TypePhotosDataProfile
    status: string
    facebook?:string

}
export type TypeResponseDataProfileStatus = {
    data: string

}
export type TypeResponseSetDataProfileStatus = {
    data: {}
    resultCode:ResultCodeEnum

}
type DataTypePhoto= {
    photos:TypePhotosDataProfile,
}
export type TypeResponseSetDataPhoto = {
    data: DataTypePhoto,
    fieldsErrors: []
    messages: []
    resultCode: number
}
export type PathParamsType = {
    userId: string
}
export type TypeProfileProps = {
    profile: TypeResponseDataProfile
    isPreloader: boolean
    setProfileThunkCreator: (userId: number|null) => void
    status: string
    setTextStatusAC: (textStatus: string) => void
    setStatusThunkCreator: (textStatus: string) => void
    userId: number
    isAuth:boolean


}
export type TypeMapStateToPropsProfile = {
    profile: TypeResponseDataProfile
    isPreloader: boolean
    status: string
    userId: number|null
    isAuth:boolean

}
export type TypeMapDispatchToPropsProfile = {
    setProfileThunkCreator: (userId: string) => void
    setTextStatusAC: (textStatus: string) => void
    setStatusThunkCreator: (textStatus: string) => void
}


//PROFILE_REDUCER


export type PostType = {
    id: number
    name: string
    date: string
    textPost: string
    likes: number
    imgPost: string

}


export type TypeActionProfileReducer =ActionsTypeFromInfer<typeof ActionsProfile>
export type TypePostData = {
    dataPost: Array<PostType>
}
export type TypeInitialStateProfile = {
    postData: TypePostData
    valueTextPost: string
    profile: TypeResponseDataProfile
    isPreloader: boolean
    status: string
}

//POST
export type PostTypeProps = {
    id: number
    name: string
    date: string
    textPost: string
    likes: number
    imgPost: string
    fun?: () => void

}
//POSTS
export type PropsType = {
    valueTextPost: string
    dataPost: Array<PostType>
    addPost: () => void
    onChangePostText: (text: string) => void
}
//POST_CONTEINER
export type TypeMapStateToPropsPostConteiner = {
    dataPost: Array<PostType>
    valueTextPost: string

}
export type TypeMapDispatchToPropsPostConteiner = {
    addPost: () => void
    onChangePostText: (text: string) => void
}


//USER_CONTAINER
export type TypeUsersProps = {
    users: Array<UserType>
    count: number
    pageNumber: number
    countPAge: number
    isPreloader: boolean
    idDisabledButton: Array<number>
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
    getUsersAC: (arr: Array<UserType>) => void
    setPageAC: (pageNumber: number) => void
    setCountPAgeAC: (countPage: number) => void
    SetPreloaderAC: (preloader: boolean) => void

}

export type User = {
    name: string
    id: number
    uniqueUrlName: null
    photos: TypePhotoUsers
    status: null
    followed: boolean
}

export type TypeMapDispatchToPropsUserContainer = {
    getUsersAC: (arr: Array<UserType>) => void
    setPageAC: (pageNumber: number) => void
    setCountPAgeAC: (countPage: number) => void
    SetPreloaderAC: (preloader: boolean) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void


}
//USER_FUNCTIONAL
export type TypeUserFunProps = {
    functionTest: (num: number, check: boolean) => void
    arr: Array<number>
    clickPage: (id: number) => void



}
export type TypeUserResponseData = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: number

}

//USER_REDUCER
export type TypeInitialStateUsers = {
    users: Array<UserType>
    count: number
    pageNumber: number
    countPage: number
    isPreloader: boolean
    disabledButton: Array<number>
}
export type TypeActionDisabledButton = {
    type: typeof SET_DISABLED_BUTTON
    isDisable: Array<number>


}
export type TypeActionFollow = {
    type: typeof FOLLOW
    id: number
}
export type TypeActionUnFollow = {
    type: typeof UNFOLLOW
    id: number
}
export type TypeActionSetCountPage = {
    type: typeof SET_COUNTPAGE
    countPage: number
}
export type TypeActionSetPage = {
    type: typeof SET_PAGENUMBER
    pageNumber: number
}
export type TypeActionGetUsers = {
    type: typeof GET_USERS
    arr: Array<UserType>
}
export type TypeActionSetPreloader = {
    type: typeof SetPreloader
    preloader: boolean
}
export  type TypeActionUserReducer = TypeActionFollow | TypeActionUnFollow | TypeActionSetCountPage
    | TypeActionSetPage | TypeActionGetUsers | TypeActionSetPreloader | TypeActionDisabledButton;
//USERS
export type TypePhotoUsers = {
    small: null
    large: null

}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: TypePhotoUsers
    status: null
    followed: boolean
}
export type TypeResponseDataUsers = {
    items: Array<UserType>
    totalCount: number
    error: null
}


//DIALOGS_REDUCER
export type TypeDialog = {
    id: number
    name: string
    address: number
}
export type TypeChatMessage =  {
    message: string
    photo:string
    userId:number
    userName:string
}

export type TypeAddMessageAction = ReturnType<typeof DialogAC>|ReturnType<typeof ClosePageMessages>
export type TypeAction =  TypeAddMessageAction
export type TypeInitialStateDialogs = {
    dataMessage: Array<TypeChatMessage>|any
}
//DIALOGS_CONTEINER
export type TypeMapDispatchToProps = {
    onChangeMessageText: (text: string) => void
}
export type TypeMapStateToProps = {
    dataMessage: Array<TypeChatMessage>
}
//DIALOGS
export type TypeDialogs = {
    dataMessage: Array<TypeChatMessage>
}
//DIALOG
export type TypeDialogData = {
    dataDialog: Array<TypeDialog>
}


//MUSIC_REDUCER
export type TypeInitialStateMusic = {
    songs: string[]
}
export type TypeActionMusicReducer = TypeAddSongAC
export type TypeAddSongAC = ReturnType<typeof AddSongAC>
//MUSIC_CONTEINER
export type TypeMapStateToPropsMusicConteiner = {
    songs: string[]
}
export type TypeMapDispatchToPropsMusicConteiner = {
    AddSongAC: (song: string) => void
}
//MUSIC
export type TypePropsMusic = {
    songs: string[]
    AddSongAC: (song: string) => void
}

//AUTH_REDUCER
export type TypeResponseDataData = {
    id: number
    email: string
    login: string
}
export type TypeLoginResponseDataData = {
    userId: number
}
export type TypeLoginResponseData = {
    resultCode: number
    messages: string[],
    data: TypeLoginResponseDataData
    fieldsErrors: FieldsError[]
}
type FieldsError = {
    error: string
    field: string
}


export type TypeLogoutResponseData = {
    resultCode: number
    messages: [],
    data: {}
}
export type TypeResponseDataAuth = {
    data: TypeResponseDataData
    fieldsErrors: []
    messages: []
    resultCode: number
}
export type TypeInitialStateAuth = {
    email:string
    login:string
    isAuth: boolean
    userId:string
    captchaUrl:string | null
}
export type TypeActionSetAuthEmail = ReturnType<typeof SetEmailAC>
export type TypeActionSetAuthLogin = ReturnType<typeof SetLoginAC>
export type TypeSetCaptchaUrl= ReturnType<typeof SetCaptchaUrl>

export type TypeSetUserID = ReturnType<typeof SetUserIdAC>;

export type TypeActionSetIsAuth = ReturnType<typeof SetAuthIsAuthTestAC>;
export type TypeActionAuth = TypeActionSetAuthEmail |
    TypeActionSetIsAuth| TypeSetUserID|TypeActionSetAuthLogin |TypeSetCaptchaUrl;

//HEADER
export type TypePropsHeader = {
    isAuth: boolean
    email: string

}
export type TypePropsHeaderComponent = {
    isAuth: boolean
    email: any
}
export type TypeMapStateToPropsHeader = {
    email:string
    isAuth: boolean
}
export type TypeMapDispatchToPropsHeader = {
    authThunkCreator:()=>void
}
//Login
export type TypeMapStateToPropsLogin = {
    isAuth:boolean
    captchaUrl:string|null
}

export type TypeContainerLoginProps = {
    isAuth:boolean
    captchaUrl:string|null
}
export type TypeLoginProps = {
    isAuth:boolean
    captchaUrl: null|string
}
// export type TypeFormDataLogin = {
//     email: string
//     password: string
//     rememberMe: true
// }

//LOGOUT
export type TypeMapStateToPropsLogout = {
    isAuth:boolean
}

export type TypeLogoutContainerProps = {
    isAuth:boolean
}
//DALL
export type TypeGetUsersApi = {
    getUsersPages: (pageNumber: number, count: number) => Promise<TypeResponseDataUsers>
    getUsersPageNumber: (pageId: number, count: number) => Promise<TypeResponseDataUsers>
    followUsersApi: (id: number) => Promise<TypeUserResponseData>
    UnfollowUsersApi: (id: number) => Promise<TypeUserResponseData>
}
export type TypeGetAuthApi = {
    checkLogin: () => Promise<TypeResponseDataAuth>
    login: (email: string, password: string, rememberMe: boolean, captcha: null|string) => Promise<TypeLoginResponseData>
    Logout: () => Promise<TypeLogoutResponseData>
    captchaUrl:()=>Promise<TypeResponseDataCaptcha>
}
export type TypeResponseDataCaptcha={
    url:string
}
export type TypeGetProfileApi = {
    getProfile: (userId: string) => Promise<TypeResponseDataProfile>
    getStatusProfile: (userId: string) => Promise<TypeResponseDataProfileStatus>
    setStatusProfile: (textStatus: string) => Promise<TypeResponseSetDataProfileStatus>
    updateProfileInfo: (dataInfo: TypeResponseDataProfile) => Promise<TypeResponseSetDataProfileStatus>
    uploadPhoto:(textStatus: string)=>Promise<TypeResponseSetDataPhoto>
}

//REDUX_STORE
export type TypeStore = ReturnType<typeof reducers>

//HOC_REDIRECT
export type TypeMapStateToPropsHoc = {

    isAuth: boolean
}

//Enum
export enum ResultCodeEnum{
    Sucsses=0,
    error=1
}

//INFER
type PropertiesTypes<T> = T extends {[key:string]:infer U}? U:never

export type ActionsTypeFromInfer<T extends {[key:string]:
        (...args:any[])=>void}>= ReturnType<PropertiesTypes<T>>;

//TESt
