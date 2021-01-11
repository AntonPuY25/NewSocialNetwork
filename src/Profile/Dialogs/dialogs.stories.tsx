import React, {ChangeEvent} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import s from "./dialogs.module.css";
import Dialog, {TypeDialogData} from "./dialog";


export default {
    title: 'SocialNetwork /PostStories',
    component: Dialog,

} as Meta;

const Template: Story<TypeDialogData> = (args) => {
    let onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = (event.currentTarget.value)
        alert(text)
    }

    return  ( <div>
        <Dialog {...args}/>
    <textarea  onChange={onChangeMessage} className={s.textareaPost}/>

    </div> )

}

export const dialog = Template.bind({})
dialog.args = {
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
}

