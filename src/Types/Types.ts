import {
    ADD_POST,
    ADD_TEXT_POST,
    SET_PRELOADER,
    SET_PROFILE
} from "../Redux/Reducers/profileReducer";
import {DialogAC, DialogTextAC} from "../Redux/Reducers/dealogsReducer";
import {
    FOLLOW,
    GETUSERS,
    SETCOUNTPAGE,
    SETPAGENUMBER, SetPreloader,

    UNFOLLOW
} from "../Redux/Reducers/usersReducer";
import {AddSongAC} from "../Redux/Reducers/musicReducer";
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
export type TypeResponseDataProfile = {
    aboutMe: string
    contacts: TypeContactsDataProfile
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: TypePhotosDataProfile
}
export type PathParamsType = {
    userId: string
}
export type TypeProfileProps = {
    profile: TypeResponseDataProfile
    setProfileDataAC: (data: TypeResponseDataProfile) => void
    isPreloader: boolean
    setPreloaderAC: (preloader: boolean) => void
}
export type TypeMapStateToPropsProfile = {
    profile: TypeResponseDataProfile
    isPreloader: boolean
}
export type TypeMapDispatchToPropsProfile = {
    setProfileDataAC: (data: TypeResponseDataProfile) => void
    setPreloaderAC: (preloader: boolean) => void
}


//PROFILE_REDUCER
export type TypeProfileData = {
    type: typeof SET_PROFILE
    data: TypeResponseDataProfile
}
export type TypePreloaderProfile = {
    type: typeof SET_PRELOADER,
    preloader: boolean
}
export type PostType = {
    id: number
    name: string
    date: string
    textPost: string
    likes: number
    imgPost: string

}
export type TypeAddPostAction = {
    type: typeof ADD_POST
}
export type TypeAddPostTextAction = {
    type: typeof ADD_TEXT_POST
    text: string
}
export type TypeActionProfileReducer =
    TypeAddPostAction
    | TypeAddPostTextAction
    | TypeProfileData
    | TypePreloaderProfile;
export type TypePostData = {
    dataPost: Array<PostType>
}
export type TypeInitialStateProfile = {
    postData: TypePostData
    valueTextPost: string
    profile: TypeResponseDataProfile
    isPreloader: boolean
}

//POST
export type PostTypeProps = {
    id:number
    name:string
    date:string
    textPost:string
    likes:number
    imgPost:string
    fun?:()=>void

}
//POSTS
export type PropsType = {
    valueTextPost:string
    dataPost: Array<PostType>
    addPost:()=>void
    onChangePostText:(text:string)=>void
}
//POST_CONTEINER
export type TypeMapStateToPropsPostConteiner={
    dataPost:Array<PostType>
    valueTextPost:string

}
export type TypeMapDispatchToPropsPostConteiner = {
    addPost: () =>void
    onChangePostText: (text: string) =>void
}


//USER_CONTAINER
export type TypeUsersProps = {
    users: Array<UserType>
    follow: (value: number) => void
    unFollow: (value: number) => void
    setUsers: (value: Array<UserType>) => void
    count: number
    pageNumber: number
    setPageNumber: (pageNumber: number) => void
    countPAge: number
    setCountPage: (countPage: number) => void
    isPreloader: boolean
    setPreloader: (prelaoder: boolean) => void
}
export type TypePhoto = {
    small: null
    large: null

}
export type User = {
    name: string
    id: number
    uniqueUrlName: null
    photos: TypePhotoUsers
    status: null
    followed: boolean
}
export type TypeResponseData = {
    items: Array<UserType>
    totalCount: number
    error: null
}
export type TypeMapStateToPropsUserContainer = {
    users: Array<UserType>
    count: number
    pageNumber: number
    countPAge: number
    isPreloader: boolean
}
export type TypeMapDispatchToPropsUserContainer = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (arr: Array<UserType>) => void
    setPageNumber: (pageNumber: number) => void
    setCountPage: (countPage: number) => void
    setPreloader: (preloader: boolean) => void
}
//USER_FUNCTIONAL
export type TypeUserFunProps = {
    functionTest: (num:number,check:boolean)=>void
    arr:Array<number>
    clickPage:(id:number) =>void
    pageNumber:number
    users:Array<User>
    follow: (value: number) => void
    unFollow: (value: number) => void

}


//USER_REDUCER
export type TypeInitialStateUsers = {
    users: Array<UserType>
    count: number
    pageNumber: number
    countPage: number
    isPreloader: boolean
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
    type: typeof SETCOUNTPAGE
    countPage: number
}
export type TypeActionSetPage = {
    type: typeof SETPAGENUMBER
    pageNumber: number
}
export type TypeActionGetUsers = {
    type: typeof GETUSERS
    arr: Array<UserType>
}
export type TypeActionSetPreloader = {
    type: typeof SetPreloader
    preloader: boolean
}
export  type TypeActionUserReducer = TypeActionFollow | TypeActionUnFollow | TypeActionSetCountPage
    | TypeActionSetPage | TypeActionGetUsers | TypeActionSetPreloader;
//USERS
export type TypePhotoUsers = {
    small:null
    large:null

}
export type UserType = {
    name:string
    id:number
    uniqueUrlName:null
    photos:TypePhotoUsers
    status:null
    followed:boolean
}
export type TypeResponseDataUsers = {
    items:Array<UserType>
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
export type TypeAction = TypeAddTextMessageAction | TypeAddMessageAction
export type TypeInitialStateDialogs = {
    messageData: TypeMessageData
    valueMessage: string
}
//DIALOGS_CONTEINER
export type TypeMapDispatchToProps = {
    addMessage:()=>void
    onChangeMessageText:(text:string)=>void
}
export type TypeMapStateToProps = {
    valueMessage:string
    messageData:TypeMessageData
}
//DIALOGS
export type TypeDialogs = {
    onChangeMessageText:(text:string)=>void
    addMessage:()=>void
    messageData:TypeMessageData
    valueMessage:string
}
//DIALOG
export type TypeDialogData = {
    dataDialog:Array<TypeDialog>
}


//MUSIC_REDUCER
export type TypeInitialStateMusic = {
    songs:string[]
}
export type TypeActionMusicReducer = TypeAddSongAC
export type TypeAddSongAC = ReturnType<typeof AddSongAC>
//MUSIC_CONTEINER
export type TypeMapStateToPropsMusicConteiner = {
    songs:string[]
}
export type TypeMapDispatchToPropsMusicConteiner = {
    AddSongAC:(song:string)=>void
}
//MUSIC
export type TypePropsMusic = {
    songs: string[]
    AddSongAC:(song:string)=>void
}

//REDUX_STORE
export type TypeStoreReducer = {
    profilePage: TypeInitialStateProfile
    dialogsPage: TypeInitialStateDialogs
    usersPage: TypeInitialStateUsers
    musicPage: TypeInitialStateMusic

}