const ADD_TEXT_POST = "ADD_TEXT_POST";
const ADD_POST = "ADD_POST";
export type PostType = {
    id: number
    name: string
    date: string
    textPost: string
    likes: number
    imgPost: string

}
export  type TypeAction = {
    type?: string
    text?: string
}
export type TypePostData = {
    dataPost: Array<PostType>
}
export type TypeInitialStateProfile = {
    postData: TypePostData
    valueTextPost: string
}
let initialState = {
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
    valueTextPost: ''
}

let profileReducer = (state: TypeInitialStateProfile = initialState, action: TypeAction): TypeInitialStateProfile => {
    switch (action.type) {
        case ADD_TEXT_POST:
            return {
                ...state,
                valueTextPost:action.text || ""

            };
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                name: 'Anton',
                date: '21.12.2020',
                textPost: state.valueTextPost,
                likes: 22,
                imgPost: 'post1',

            }

            return {
                ...state,
                postData: {
                    ...state.postData,
                    dataPost: [...state.postData.dataPost, newPost]
                },
                valueTextPost: ""


            };
        default:
            return state
    }
}
export const PostTextAC: (value: string) => TypeAction = (text) => ({type: ADD_TEXT_POST, text: text})
export const PostAC: () => TypeAction = () => ({type: ADD_POST})
export default profileReducer;