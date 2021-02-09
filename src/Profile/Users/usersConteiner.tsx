import {connect} from "react-redux";
import {
    followThunkCreator, getPageUsersThunkCreator,
    getUsersAC, getUsersThunkCreator,
    setCountPAgeAC,
    setPageAC, SetPreloaderAC, unFollowThunkCreator
} from "../../Redux/Reducers/usersReducer";
import React from "react";
import UserFun from "./userFunctional";
import Preloader from "../Preloader/Preloader";
import {

    TypeMapDispatchToPropsUserContainer,
    TypeMapStateToPropsUserContainer,
    TypeStoreReducer,
    TypeUsersProps,

} from "../../Types/Types";
import {
    getCountPageSelector,
    getCountUsersSelector, getDisabledButtonSelector, getisPreloaderSelector,
    getPageNumberSelector,
    reselectGetUsers
} from "../../Redux/Reducers/Selectors/userSelectors";


class Users extends React.Component<TypeUsersProps, any> {

    arr: Array<number> = [];

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageNumber, this.props.count)
        for (let i = 1; i <= this.props.countPAge; i++) {
            this.arr.push(i)
        }

    }
    clickPage = (id: number) => {
        this.props.getPageUsersThunkCreator(id, this.props.count)
    }

    render() {


        let functionTest = (num: number, check: boolean) => {
            if (check) {
                this.props.setCountPAgeAC(this.props.countPAge + 10)
                this.arr = []
                for (let i = this.props.countPAge; i <= this.props.countPAge + 10; i++) {
                    this.arr.push(i)
                }
            } else if (!check && this.props.countPAge >= 10) {
                this.props.setCountPAgeAC(this.props.countPAge - 10)

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
                           followThunkCreator={this.props.followThunkCreator}
                           unFollowThunkCreator={this.props.unFollowThunkCreator}
                           isDisabled={this.props.idDisabledButton}
                />
            }
        </div>
    }
}

const mapStateToProps = (state: TypeStoreReducer): TypeMapStateToPropsUserContainer => {
    return {
        // users:getUsersSelector(state),
        users:reselectGetUsers(state),
        count: getCountUsersSelector(state),
        pageNumber: getPageNumberSelector(state),
        countPAge: getCountPageSelector(state),
        isPreloader: getisPreloaderSelector(state),
        idDisabledButton: getDisabledButtonSelector(state),
    }
}


const UserConteiner = connect<TypeMapStateToPropsUserContainer, TypeMapDispatchToPropsUserContainer,
    {}, TypeStoreReducer>(mapStateToProps, {followThunkCreator,unFollowThunkCreator,getUsersAC,setPageAC,
    getUsersThunkCreator,getPageUsersThunkCreator,SetPreloaderAC,setCountPAgeAC
    })(Users)

export default UserConteiner;