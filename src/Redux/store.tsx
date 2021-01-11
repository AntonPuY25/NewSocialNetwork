 import React from "react";
// import profileReducer from "./Reducers/profileReducer";
// import dialogsReducer from "./Reducers/dealogsReducer";
//
//
//
//
// export type TypeDialog = {
//     id: number
//     name: string
//     address: number
// }
// export type TypeMessage = {
//     id: number
//     message: string
// }
//
// export type TypeMessageData = {
//     dataDialog: Array<TypeDialog>
//     dataMessage: Array<TypeMessage>
// }
// export type TypeState = {
//     postData: TypePostData
//     messageData: TypeMessageData
//     valueTextPost: string
//     valueMessage: string
// }
// export  type TypeAction = {
//     type?: string
//     text?: string
// }
//
// export type storeType = {
//     _state: TypeState,
//     getState: () => void
//     rendrerOurTree: () => void
//     describer: (observer: () => void) => void
//     dispatch: (action: TypeAction) => void
// }
// let store = {
//     _state: {
//         postData: {
//             dataPost: [
//                 {
//                     id: 1,
//                     name: 'Anton',
//                     date: '21.12.2020',
//                     textPost: 'Hello this is my first Post',
//                     likes: 22,
//                     imgPost: 'post1',
//
//                 },
//                 {
//                     id: 2,
//                     name: 'Yana',
//                     date: '22.12.2020',
//                     textPost: 'Hello ,Anton',
//                     likes: 15,
//                     imgPost: 'post2',
//
//                 }
//             ],
//         },
//         messageData: {
//             dataDialog: [
//                 {
//                     id: 1,
//                     name: 'Anton',
//                     address: 1
//                 },
//                 {
//                     id: 2,
//                     name: 'Yana',
//                     address: 2
//                 },
//                 {
//                     id: 3,
//                     name: 'Kirill',
//                     address: 3
//                 },
//                 {
//                     id: 4,
//                     name: 'Ira',
//                     address: 4
//                 },
//                 {
//                     id: 5,
//                     name: 'Lera',
//                     address: 5
//                 }
//             ],
//             dataMessage: [
//                 {
//                     id: 1,
//                     message: 'Hello,where are you from?'
//                 },
//                 {
//                     id: 2,
//                     message: 'What do you do?'
//                 },
//                 {
//                     id: 3,
//                     message: 'Do you have friends?'
//                 }
//             ],
//         },
//         valueTextPost: '',
//         valueMessage: "",
//     },
//     _rendrerOurTree() {
//     },
//     describer(observer: () => void) {
//         this._rendrerOurTree = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action: TypeAction) {
//         this._state = profileReducer(this._state, action)
//         this._state = dialogsReducer(this._state, action)
//         this._rendrerOurTree()
//         // if (action.type === "ADD_TEXT_POST") {
//         //     this._state.valueTextPost = action.text || ""
//         //     this._rendrerOurTree()
//         // } else if (action.type === ADD_POST) {
//         //     let newPost: PostType = {
//         //         id: 1,
//         //         name: 'Anton',
//         //         date: '21.12.2020',
//         //         textPost: this._state.valueTextPost,
//         //         likes: 22,
//         //         imgPost: 'post1',
//         //
//         //     }
//         //     this._state.postData.dataPost.push(newPost)
//
//         // if (action.type === ADD_TEXT_MESSAGE) {
//         //     this._state.valueMessage = action.text || ""
//         //     this._rendrerOurTree()
//         // } else if (action.type === ADD_MESSAGE) {
//         //     let newMessage = {
//         //         id: 4,
//         //         message: this._state.valueMessage
//         //     }
//         //     this._state.messageData.dataMessage.push(newMessage)
//         //     this._rendrerOurTree()
//         // }
//     }
//
// }
//
//
// export default store;