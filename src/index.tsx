import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type PostTypeProps = {
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
export type StorePropsType = {
    dataPost: Array<PostTypeProps>
    dataDialog: Array<TypePropsDialog>
    dataMessage:Array<TypePropsMessage>

}
let store = {
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
}

ReactDOM.render(<App dataStore={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
