import {connect} from "react-redux";
import {TypeStoreReducer} from "../../Redux/reduxStore";
import {
    FollowAC,
    getUsersAC,
    setCountPAgeAC,
    setPageAC, SetPreloaderAC,
    UnFollowAC
} from "../../Redux/Reducers/usersReducer";
import React from "react";
import axios from "axios";
import UserFun from "./userFunctional";
import Preloader from "../Preloader/Preloader";

export type TypePhoto = {
    small: null
    large: null

}
export type User = {
    name: string
    id: number
    uniqueUrlName: null
    photos: TypePhoto
    status: null
    followed: boolean
}
export type TypeResponseData = {
    items: Array<User>
    totalCount: number
    error: null
}
export type TypeUsersProps = {
    users: Array<User>
    follow: (value: number) => void
    unFollow: (value: number) => void
    setUsers: (value: Array<User>) => void
    count: number
    pageNumber: number
    setPageNumber: (pageNumber: number) => void
    countPAge: number
    setCountPage: (countPage: number) => void
    isPreloader:boolean
    setPreloader:(prelaoder:boolean)=>void
}

class Users extends React.Component<TypeUsersProps,any> {

    arr: Array<number> = [];
    componentDidMount() {
        this.props.setPreloader(true)
        axios.get<TypeResponseData>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.count}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)
            })

        for (let i = 1; i <= this.props.countPAge; i++) {
            this.arr.push(i)
        }

    }

    clickPage = (id: number) => {
        this.props.setPreloader(true)
        this.props.setPageNumber(id)
        console.log(id)
        axios.get<TypeResponseData>(`https://social-network.samuraijs.com/api/1.0/users?page=${id}&count=${this.props.count}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)
            })

    }

    render() {



        let functionTest = (num: number, check: boolean) => {
            if (check) {
                this.props.setCountPage(this.props.countPAge + 10)
                this.arr = []
                for (let i = this.props.countPAge; i <= this.props.countPAge + 10; i++) {
                    this.arr.push(i)
                }
            } else if (!check && this.props.countPAge >= 10) {
                this.props.setCountPage(this.props.countPAge - 10)

                this.arr = []
                for (let i = this.props.countPAge - 10; i <= this.props.countPAge; i++) {
                    this.arr.push(i)
                }
            }
        }

        return <div>
            {this.props.isPreloader?<Preloader/>
                :<UserFun functionTest={functionTest} arr={this.arr}
                clickPage={this.clickPage} pageNumber={this.props.pageNumber}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}/>}
        </div>
    }
}

const mapStateToProps = (state: TypeStoreReducer) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        pageNumber: state.usersPage.pageNumber,
        countPAge: state.usersPage.countPage,
        isPreloader:state.usersPage.isPreloader
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (id: number) => {
            dispatch(FollowAC(id))
        },
        unFollow: (id: number) => {
            dispatch(UnFollowAC(id))
        },
        setUsers: (arr: Array<User>) => {
            dispatch(getUsersAC(arr))
        },
        setPageNumber: (pageNumber: number) => {
            dispatch(setPageAC(pageNumber))
        },

        setCountPage: (countPage: number) => {
            dispatch(setCountPAgeAC(countPage))
        },
        setPreloader :(preloader:boolean)=>{
            dispatch(SetPreloaderAC(preloader))
        }
    }
}

const UserConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserConteiner;