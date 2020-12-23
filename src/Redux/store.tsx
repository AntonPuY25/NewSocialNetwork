export type PostType = {
    id: number
    name: string
    date: string
    textPost: string
    likes: number
    imgPost: string

}
export type TypePropsDialog = {
    id: number
    name: string
    address: number
}
export type TypePropsMessage = {
    message: string
}

export type PostDataType = {
    dataPost: Array<PostType>
}

export type  MessageDataType = {
    dataDialog: Array<TypePropsDialog>
    dataMessage: Array<TypePropsMessage>
}
export type storeType = {
    postData: PostDataType
    massageData: MessageDataType
}
let store = {
    postData:{
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
    messageData:{
        dataDialog: [
            {
                id: 1,
                name: 'Anton',
                address: 1
            },
            {
                id: 2,
                name: 'Yana',
                address: 2
            },
            {
                id: 3,
                name: 'Kirill',
                address: 3
            },
            {
                id: 4,
                name: 'Ira',
                address: 4
            },
            {
                id: 5,
                name: 'Lera',
                address: 5
            }
        ],
        dataMessage: [
            {
                id: 1,
                message: 'Hello,where are you from?'
            },
            {
                id: 2,
                message: 'What do you do?'
            },
            {
                id: 3,
                message: 'Do you have friends?'
            }
        ],
},

}
export default store;