import {useDispatch, useSelector} from "react-redux";
import {
    getPageUsersThunkCreator,
    getUsersThunkCreator, setCountPAgeAC,

} from "../../Redux/Reducers/usersReducer";
import React, {useEffect, useState} from "react";
import UserFun from "./userFunctional";
import Preloader from "../Preloader/Preloader";

import {getAllSelectors} from "../../Redux/Reducers/Selectors/userSelectors";


const Users: React.FC = () => {
    const {count,countPage,isPreloader} = useSelector(getAllSelectors)
    const dispatch = useDispatch()
    let [arr,setArr]=useState<Array<number>>([])
    useEffect(() => {
        let testArr=[];
        dispatch(getUsersThunkCreator(1, count))
        for (let i = 1; i <= 10; i++) {
             testArr.push(i)
        }
        setArr(testArr)
    }, [dispatch,count])

    const clickPage = (id: number) => {
        dispatch(getPageUsersThunkCreator(id, count))

    }

    let functionTest = (num: number, check: boolean) => {
        let testArr=[];
        if (check) {
            dispatch(setCountPAgeAC(countPage + 10))
            for (let i = countPage; i <= countPage + 10; i++) {
                testArr.push(i)
            }
            setArr(testArr)
        } else if (!check && countPage >= 10) {

            dispatch(setCountPAgeAC(countPage - 10))
            for (let i = countPage - 10; i <= countPage; i++) {
                testArr.push(i)
            }
            setArr(testArr)
        }
    }
    return (


        <div>

            {isPreloader ? <Preloader/>

                : <UserFun functionTest={functionTest} arr={arr}
                           clickPage={clickPage}


                />

            }
        </div>
    )
}


export default Users;