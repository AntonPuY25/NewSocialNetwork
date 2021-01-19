import React from "react";
import s from "./users.module.css";
import {User} from "./users";
import {NavLink} from "react-router-dom";
type TypeUserFunProps = {
    functionTest: (num:number,check:boolean)=>void
    arr:Array<number>
    clickPage:(id:number) =>void
    pageNumber:number
    users:Array<User>
    follow: (value: number) => void
    unFollow: (value: number) => void

}

let UserFun:React.FC<TypeUserFunProps> = ({functionTest,arr,clickPage,pageNumber,users,
                                              follow,unFollow})=>{

    return <div>
        <button onClick={()=>{functionTest(10,false)}}>{`<`}</button>
        {arr.map((i, id) => {

            return <span onClick={() => {
                clickPage(i)
            }} key={id}  className={pageNumber  ===i ? s.pageNumber : "" + s.test}>{i}</span>

        })}
        <button onClick={()=>{functionTest(10,true)}}>{`>`}</button>


        {users.map(i => {
            return (<div className={s.people} key={i.id}>
                    <div><NavLink
                        to={`/profile/${i.id}`}> <img className={s.avaUser} alt={'Ava'}
                                            src={i.photos.small ? i.photos.small : require(`../../Img/ava1.png`)}/></NavLink>
                       </div>
                    <div>{i.name}</div>
                    <div>{i.status}</div>

                    {i.followed === true ? <button onClick={() => {
                            follow(i.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            unFollow(i.id)
                        }}>UnFollow</button>}

                </div>

            )
        })}

    </div>;
}

export default UserFun;