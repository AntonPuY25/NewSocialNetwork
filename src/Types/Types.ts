import {DeleteMessageAC, DialogAC, DialogTextAC} from "../Redux/Reducers/dealogsReducer";
import {
    FOLLOW,
    GET_USERS,
    SET_COUNTPAGE,
    SET_PAGENUMBER, SetPreloader,
    SET_DISABLED_BUTTON,
    UNFOLLOW,
} from "../Redux/Reducers/usersReducer";
import {AddSongAC} from "../Redux/Reducers/musicReducer";
import {SetAuthIsAuthTestAC, SetEmailAC, SetLoginAC, SetUserIdAC} from "../Redux/Reducers/authReducer";
import {ActionsProfile} from "../Redux/Reducers/profileReducer";
import {ActionsApp} from "../Redux/Reducers/appReducer";
import {reducers} from "../Redux/reduxStore";
//APP
export type TypeAppProps={
    initialized:boolean
    initialThunkCreator:(initialized:boolean)=>void

}
//APP_REDUCER
export type TypeInitialState = {
    initialized:boolean
}
export type TypeActionsApp = ActionsTypeFromInfer<typeof ActionsApp>
export type TypeMapStateToPropsApp = {
    initialized:boolean
}
export type TypeMapDispatchToPropsApp = {
    initialThunkCreator:(initialized:boolean)=>void
}

//PROFILE_CONTAINER
export type TypeContactsDataProfile = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
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
export type TypeMessage = {
    id: number
    message: string
}
export type TypeMessageData = {
    dataDialog: Array<TypeDialog>
    dataMessage: Array<TypeMessage>
}
export type TypeAddTextMessageAction = ReturnType<typeof DialogTextAC>
export type TypeAddMessageAction = ReturnType<typeof DialogAC>
export type TypeDeleteMessageAction = ReturnType<typeof DeleteMessageAC>
export type TypeAction = TypeAddTextMessageAction | TypeAddMessageAction | TypeDeleteMessageAction
export type TypeInitialStateDialogs = {
    messageData: TypeMessageData
    valueMessage: string
}
//DIALOGS_CONTEINER
export type TypeMapDispatchToProps = {
    addMessage: () => void
    onChangeMessageText: (text: string) => void
}
export type TypeMapStateToProps = {
    valueMessage: string
    messageData: TypeMessageData
}
//DIALOGS
export type TypeDialogs = {
    onChangeMessageText: (text: string) => void
    addMessage: () => void
    messageData: TypeMessageData
    valueMessage: string
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
}
export type TypeActionSetAuthEmail = ReturnType<typeof SetEmailAC>
export type TypeActionSetAuthLogin = ReturnType<typeof SetLoginAC>

export type TypeSetUserID = ReturnType<typeof SetUserIdAC>;

export type TypeActionSetIsAuth = ReturnType<typeof SetAuthIsAuthTestAC>;
export type TypeActionAuth = TypeActionSetAuthEmail |
    TypeActionSetIsAuth| TypeSetUserID|TypeActionSetAuthLogin;

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
}
export type TypeMapDispatchToPropsLogin = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void
}
export type TypeContainerLoginProps = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void
    isAuth:boolean
}
export type TypeLoginProps = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void
    isAuth:boolean
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
export type TypeMapDispatchToPropsLogout = {
    logoutThunkCreator:()=>void
}
export type TypeLogoutContainerProps = {
    logoutThunkCreator:()=>void
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
    login: (email: string, password: string, rememberMe: boolean, captcha: boolean) => Promise<TypeLoginResponseData>
    Logout: () => Promise<TypeLogoutResponseData>
}
export type TypeGetProfileApi = {
    getProfile: (userId: string) => Promise<TypeResponseDataProfile>
    getStatusProfile: (userId: string) => Promise<TypeResponseDataProfileStatus>
    setStatusProfile: (textStatus: string) => Promise<TypeResponseSetDataProfileStatus>
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
