import React from "react";
import {TypeInitialStateProfile, TypeResponseDataProfile} from "../../Types/Types";
import profileReducer, {PostAC, PostTextAC, setPreloaderAC} from "./profileReducer";

let initialState:TypeInitialStateProfile

beforeEach(()=>{
 initialState = {
        postData: {
            dataPost: [
                {
                    id: 1,
                    name: 'Anton',
                    date: '21.12.2020',
                    textPost: 'Hello this is my first Post',
                    likes: 22,
                    imgPost: 'post1',

                },
                {
                    id: 2,
                    name: 'Yana',
                    date: '22.12.2020',
                    textPost: 'Hello ,Anton',
                    likes: 15,
                    imgPost: 'post2',

                }
            ],
        },
        valueTextPost: '',
        profile: {} as TypeResponseDataProfile,
        isPreloader: false

    }

})
test('Add_Text_Post',()=>{
    let action=PostTextAC("Hello? the message from Test")

let newState = profileReducer(initialState,action)
expect(newState.valueTextPost).toBe("Hello? the message from Test")
})
test('Add_Post',()=>{
    let action=PostAC()

    let newState = profileReducer(initialState,action)

    expect(newState.postData.dataPost.length).toBe(3)
    expect(newState.postData.dataPost[2].textPost).toBe("")
    expect(newState.postData.dataPost[2].id).toBe(5)
})

test('Set_Preloader',()=>{
    let action=setPreloaderAC(true)
    let newState = profileReducer(initialState,action)

    expect(newState.isPreloader).toBe(true)

})