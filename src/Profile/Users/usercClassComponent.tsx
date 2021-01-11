import React from "react";
import s from './users.module.css'
import axios from 'axios';
export type TypePhoto = {
    small:null
    large:null

}
export type User = {
    name:string
    id:number
    uniqueUrlName:null
    photos:TypePhoto
    status:null
    followed:boolean
}
export type TypeResponseData = {
    items:Array<User>
    totalCount: number
    error: null
}
export type TypeUsersProps = {
    users:Array<User>
    follow:(value:number)=>void
    unFollow:(value:number)=>void
    setUsers:(value:Array<User>)=>void
    totalCount:number
    count:number
    pageNumber:number
    setPageNumber:(pageNumber:number)=>void
    setTotalCount:(totalCount:number)=>void

}

class Users extends React.Component<TypeUsersProps, any>{
   constructor(props:TypeUsersProps) {
       super(props);

   }
    componentDidMount(){
        axios.get<TypeResponseData>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.count}`)
            .then((response)=>{
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

clickPage = (id:number)=>{
       this.props.setPageNumber(id)
    axios.get<TypeResponseData>(`https://social-network.samuraijs.com/api/1.0/users?page=${id}&count=${this.props.count}`)
        .then((response)=>{
            this.props.setUsers(response.data.items)
        })
}
   render() {

       let pages= Math.ceil(this.props.totalCount/this.props.count)

       let arr = [];
    for(let i = 1;i<=pages;i++){
        arr.push(i)
    }

       return<div>
           {arr.map((i,id)=>{
            return   <span onClick={()=>{this.clickPage(id+1)}} key={id} className={this.props.pageNumber-1 === id?s.pageNumber:""+ s.test }>{i}</span>
           })}

           {this.props.users.map(i=>{
debugger
               return(<div key={i.id}>
                       <div><img className={s.avaUser} alt={'Ava'} src={i.photos.small?i.photos.small:require(`../../Img/ava1.png`)}/></div>
                       <div>{i.name}</div>
                       <div>{i.status}</div>
                       {i.followed===true?<button onClick={()=>{this.props.follow(i.id)}}>Follow</button>
                           :<button onClick={()=>{this.props.unFollow(i.id)}}>UnFollow</button>}

                   </div>

               )
           })}

       </div>;
   }
}



export default Users;