import {connect} from "react-redux";
import {
    FollowAC,
    getUsersAC,
    setCountPAgeAC,
    setPageAC, SetPreloaderAC,
    UnFollowAC
} from "../../Redux/Reducers/usersReducer";
import React, {Dispatch} from "react";
import UserFun from "./userFunctional";
import Preloader from "../Preloader/Preloader";
import {
    TypeActionUserReducer,
    TypeMapDispatchToPropsUserContainer,
    TypeMapStateToPropsUserContainer,
    TypeResponseDataUsers,
    TypeStoreReducer,
    TypeUsersProps,
    UserType
} from "../../Types/Types";
import {getUsersApi} from "../../DALL/api";


class Users extends React.Component<TypeUsersProps, any> {

    arr: Array<number> = [];

    componentDidMount() {
        this.props.setPreloader(true)

        getUsersApi.getUsersPages(this.props.pageNumber, this.props.count).then((data: TypeResponseDataUsers) => {
            this.props.setUsers(data.items)
            this.props.setPreloader(false)
        })

        for (let i = 1; i <= this.props.countPAge; i++) {
            this.arr.push(i)
        }

    }

    clickPage = (id: number) => {
        this.props.setPreloader(true)
        this.props.setPageNumber(id)
        getUsersApi.getUsersPageNumber(id, this.props.count)
            .then((data: TypeResponseDataUsers) => {
                this.props.setUsers(data.items)
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
            {this.props.isPreloader ? <Preloader/>
                : <UserFun functionTest={functionTest} arr={this.arr}
                           clickPage={this.clickPage} pageNumber={this.props.pageNumber}
                           users={this.props.users}
                           follow={this.props.follow}
                           unFollow={this.props.unFollow}/>}
        </div>
    }
}

const mapStateToProps = (state: TypeStoreReducer): TypeMapStateToPropsUserContainer => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        pageNumber: state.usersPage.pageNumber,
        countPAge: state.usersPage.countPage,
        isPreloader: state.usersPage.isPreloader
    }
}
const mapDispatchToProps = (dispatch: Dispatch<TypeActionUserReducer>): TypeMapDispatchToPropsUserContainer => {
    return {
        follow: (id: number) => {
            dispatch(FollowAC(id))
        },
        unFollow: (id: number) => {
            dispatch(UnFollowAC(id))
        },
        setUsers: (arr: Array<UserType>) => {
            dispatch(getUsersAC(arr))
        },
        setPageNumber: (pageNumber: number) => {
            dispatch(setPageAC(pageNumber))
        },

        setCountPage: (countPage: number) => {
            dispatch(setCountPAgeAC(countPage))
        },
        setPreloader: (preloader: boolean) => {
            dispatch(SetPreloaderAC(preloader))
        }
    }
}

const UserConteiner = connect<TypeMapStateToPropsUserContainer, TypeMapDispatchToPropsUserContainer,
    {}, TypeStoreReducer>(mapStateToProps, mapDispatchToProps)(Users)

export default UserConteiner;