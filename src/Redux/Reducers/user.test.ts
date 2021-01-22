import {TypeInitialStateUsers, TypeResponseDataUsers} from "../../Types/Types";
import usersReducer, {FollowAC, getUsersAC, setPageAC} from "./usersReducer";
import axios from "axios";
let initialState: TypeInitialStateUsers;

beforeEach(()=>{
    initialState= {
        users: [{
            name:"string",
            id:1,
            uniqueUrlName:null,
            photos: {small:null,large:null},
            status:null,
            followed:true,

        },
            {
                name:"string",
                id:2,
                uniqueUrlName:null,
                photos: {small:null,large:null},
                status:null,
                followed:true,

            }],
        pageNumber: 1,
        count: 10,
        countPage: 10,
        isPreloader: false
    }

})
test('Follow_User',()=>{
let action=FollowAC(1);
    let newState = usersReducer (initialState, action)

    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[1].followed).toBe(true)


})
test('Set_Page_User',()=>{
    let action=setPageAC(55);
    let newState = usersReducer (initialState, action)
    expect(newState.pageNumber).toBe(55)
    expect(newState.users.length<400).toBe(true)
})
test('Get_USERS',()=>{
    let action ;
    axios.get<TypeResponseDataUsers>
    (`https://social-network.samuraijs.com/api/1.0/users?page=2&count=10`)
        .then((response) => {
            getUsersAC( response.data.items)
        })
    action = getUsersAC([{
        name:"string",
        id:1,
        uniqueUrlName:null,
        photos: {small:null,large:null},
        status:null,
        followed:true,

    },
        {
            name:"string",
            id:2,
            uniqueUrlName:null,
            photos: {small:null,large:null},
            status:null,
            followed:true,

        }])
    let newState = usersReducer (initialState, action)
    expect(newState.users.length<5).toBe(true)
})
