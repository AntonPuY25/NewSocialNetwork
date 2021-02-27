import axios from "axios";
import {
    TypeGetAuthApi,
    TypeGetProfileApi,
    TypeGetUsersApi, TypeLoginResponseData, TypeLogoutResponseData,
    TypeResponseDataAuth, TypeResponseDataCaptcha, TypeResponseDataProfile, TypeResponseDataProfileStatus,
    TypeResponseDataUsers, TypeResponseSetDataPhoto, TypeResponseSetDataProfileStatus, TypeUserResponseData
} from "../Types/Types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9943ad9b-2b43-46f7-bddd-09fd21e745ce'
    }
})


export const getUsersApi: TypeGetUsersApi = {
    getUsersPages(pageNumber, count) {
        return instance.get<TypeResponseDataUsers>(`users?page=${pageNumber}&count=${count}`).then(response => {
            return response.data
        })
    },
    getUsersPageNumber(pageId, count) {
        return instance.get<TypeResponseDataUsers>(`users?page=${pageId}&count=${count}`).then(response => {
            return response.data
        })
    },
    followUsersApi(id) {
        return instance.delete<TypeUserResponseData>(`follow/${id}`).then(response => {
            return response.data
        })
    },
    UnfollowUsersApi(id) {
        return instance.post<TypeUserResponseData>(`follow/${id}`).then(response => {
            return response.data
        })
    }


}
export const getAuthApi: TypeGetAuthApi = {
    checkLogin() {
        return instance.get<TypeResponseDataAuth>(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe, captcha) {
        return instance.post<TypeLoginResponseData>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => {
                return response.data
            }
        )
    },
    Logout() {
        return instance.delete<TypeLogoutResponseData>('auth/login').then(response => {
                return response.data
            }
        )
    },
    captchaUrl(){
        return instance.get<TypeResponseDataCaptcha>('security/get-captcha-url').then(response => {
            return response.data

        })
    }
}


export const getProfileApi: TypeGetProfileApi = {
    getProfile(userId) {
        return instance.get<TypeResponseDataProfile>(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatusProfile(userId) {
        return instance.get<TypeResponseDataProfileStatus>(`/profile/status/${userId}`).then(response => {
            return response.data
        })

    },
    setStatusProfile(textStatus: string) {
        return instance.put<TypeResponseSetDataProfileStatus>(`/profile/status`, {status: textStatus}).then(response => {
            return response.data
        })
    },
    updateProfileInfo(dataInfo) {
        return instance.put<TypeResponseSetDataProfileStatus>(`/profile`, {
            'fullName': dataInfo.fullName,
            'aboutMe': dataInfo.aboutMe,
            'lookingForAJob': dataInfo.lookingForAJob,
            'lookingForAJobDescription': dataInfo.lookingForAJobDescription,
            'contacts': dataInfo.contacts


        }).then(response => {
            return response.data
        })
    },
    uploadPhoto(photo: any) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put<TypeResponseSetDataPhoto>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data
        })
    }

}



